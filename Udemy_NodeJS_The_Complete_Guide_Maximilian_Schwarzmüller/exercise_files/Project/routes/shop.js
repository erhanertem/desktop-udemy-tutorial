// const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');

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

router.post('/cart', isAuth, shopController.postCart);
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);
router.post('/create-order', isAuth, shopController.postOrder);

module.exports = router;
