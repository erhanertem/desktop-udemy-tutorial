// const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');
const { handleStripeWebhook } = require('../middlewares/stripeWebHook');

const isAuth = require('../middlewares/isAuth');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
// DYNAMIC SEGMENT
// VERY IMPORTANT - Within the same segments, params route should always come after static routes
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', isAuth, shopController.getCart);
router.get('/orders', isAuth, shopController.getOrders);
router.get('/orders/:orderId', isAuth, shopController.getInvoice);

router.get('/checkout', isAuth, shopController.getCheckout);
// NOTE: getCheckout includes Stripe session which either directs to checkout/success or checkout/failure
// router.get('/checkout/success', isAuth, shopController.postOrder);
// WARNING: This route is flawed/insecure as it can either be hit in normal circumstances by Stripe upon successful charging or manually by a malicious authenticated user without making actual payment issueing order# and invoice. We have to make sure that Stripe tells us if an order is put thru not a url call. Stripe uses Stripe webhooks to signal our webpage that a payment is processed and only after that the endpoint is allowed to proceed with. Unfortunately for this to function, we need to have an published site with actual domain @ https://dashboard.stripe.com/test/workbench/webhooks or locally can be tested with a Stripe listener
router.post(
	'/stripe_hook', // Webhook endpoint for stripe internally triggered
	express.raw({ type: 'application/json' }), // For all routes use express.json() and for webhook routes use express.raw() since json() will modify the content sent by Stripe.
	handleStripeWebhook
);

router.get('/checkout/cancel', isAuth, shopController.getCheckout);

router.post('/cart', isAuth, shopController.postCart);
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);
// router.post('/create-order', isAuth, shopController.postOrder);

module.exports = router;
