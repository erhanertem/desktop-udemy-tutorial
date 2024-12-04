// const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
