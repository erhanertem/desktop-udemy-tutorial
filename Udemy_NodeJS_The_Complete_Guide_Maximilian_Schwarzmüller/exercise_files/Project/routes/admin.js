const express = require('express');
const html = require('../util/html');
const productsController = require('../controllers/products');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

// > THIS MIDDLEWARE ONLY RUNS @ /add-product ROUTE AND STOPS FURTHER EXECUTION
// GET /admin/add-product
router.get('/add-product', productsController.getAddProduct);

// POST /admin/add-product
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
