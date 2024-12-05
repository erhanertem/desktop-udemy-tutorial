const express = require('express');
const html = require('../util/html');
const adminController = require('../controllers/admin');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

// > THIS MIDDLEWARE ONLY RUNS @ /add-product ROUTE AND STOPS FURTHER EXECUTION
// GET /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// GET /admin/list-products
router.get('/list-products', adminController.getAllProducts);

// POST /admin/add-product
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
