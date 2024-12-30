// const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// DYNAMIC SEGMENT
// VERY IMPORTANT - Within the same segments, params route should always come after static routes
// router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', shopController.getCart);

// router.post('/cart', shopController.postCart);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// router.post('/create-order', shopController.postOrder);

// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

module.exports = router;
