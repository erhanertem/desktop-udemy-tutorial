const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { createOrder } = require('../util/createOrder');

const User = require('../models/user'); // Import User model

exports.handleStripeWebhook = async (req, res) => {
	const signature = req.headers['stripe-signature'];
	let event;

	try {
		event = stripe.webhooks.constructEvent(
			req.body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET // Verify webhook signature
		);
	} catch (err) {
		console.error('⚠️ Webhook signature verification failed.', err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	if (event.type === 'checkout.session.completed') {
		const stripeSession = event.data.object;
		const userId = stripeSession.client_reference_id;
		const paymentIntentId = stripeSession.payment_intent; // Get the payment intent ID from the session

		try {
			// > #1.Confirm the user
			// This being hit externally by Stripe, it has no access to req.user which includes user._id. We need to find the user by the client_reference_id which is the user._id
			const user = await User.findById(userId);
			if (!user) {
				console.error('User not found:', userId);
				return res.status(404).send('User not found.');
			}

			// > #2.Create the order after confirming the user
			await createOrder(user);

			// > #3.Capture the payment only if the order was created successfully
			await stripe.paymentIntents.capture(paymentIntentId);
			console.log(`✅ Order processed successfully for User ID: ${userId}`);
		} catch (err) {
			// > #3.Check if the payment intent is uncaptured and needs to be cancelled
			// Cancel the uncaptured payment intent
			await stripe.paymentIntents.cancel(paymentIntentId);

			// Notify the customer about the cancellation
			// await sendEmail({
			// 	to: user.email,
			// 	subject: 'Payment Cancellation Notice',
			// 	text: `Dear ${user.name},\n\nYour recent payment has been cancelled due to inactivity.\n\nIf you have any questions, feel free to reach out.\n\nBest regards,\nYour Team`,
			// });

			console.error('❌ Error processing webhook:', err);
			paymentIntentId && console.log(`✅ Payment intent ${paymentIntentId} cancelled and customer notified.`);

			return res.status(500).send('Internal Server Error: An error occurred while processing the webhook.');
		}

		// Notify the customer about the succcesfull charge
		// await sendEmail({
		// 	to: user.email,
		// 	subject: 'Payment Cancellation Notice',
		// 	text: `Dear ${user.name},\n\nYour recent payment has been cancelled due to inactivity.\n\nIf you have any questions, feel free to reach out.\n\nBest regards,\nYour Team`,
		// });

		res.status(200).send('Webhook received');
	}
};
