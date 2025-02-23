const Order = require('../models/order'); // Import Order model

exports.createOrder = async (user) => {
	try {
		// // TESTING
		// throw new Error('Test Error');

		// Populate cart items with product details
		await user.populate({
			path: 'cart.items.productId',
			select: 'title price description imageUrl',
		});

		// Extract products from the populated cart
		const products = user.cart.items.map((product) => ({
			// > Option#1
			// // VERY IMPORTANT: populate replaces productId on the fly with the corresponding product information. However, if we try to access the information we only receive the productId again.
			// // product: product.productId,
			// // VERY IMPORTANT: In order to access the populated information on productId, we need to use _doc property of mongoose for the populated object
			// product: product.productId._doc, // Get raw product data
			// > Option#2
			product: { ...product.productId },
			quantity: product.quantity,
		}));

		// Create a new order
		const order = new Order({
			user: {
				email: user.email,
				userId: user._id,
			},
			products,
		});

		await order.save(); // Save order to database
		await user.deleteCart(); // Clear cart after order creation

		console.log(`📦 Order created successfully for User ID: ${user._id}`);
		return order;
	} catch (error) {
		console.error('❌ Error creating order:', error);
		// Create custom error object
		error = new Error('Order creation failed.');
		error.httpStatusCode = 500;
		throw error;
	}
};
