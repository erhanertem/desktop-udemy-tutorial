// const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getAllProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
