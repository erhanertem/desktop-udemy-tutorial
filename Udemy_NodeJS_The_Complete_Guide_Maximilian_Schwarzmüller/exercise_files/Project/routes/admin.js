const express = require('express');
const adminController = require('../controllers/admin');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

// GET /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// POST /admin/add-product
router.post('/add-product', adminController.postAddProduct);

// GET /admin/list-products
router.get('/list-products', adminController.getAllProducts);

// GET /admin/edit-product/params
router.get('/edit-product/:productId', adminController.getEditProduct);

// POST /admin/edit-product
router.post('/edit-product', adminController.postEditProduct);

// POST /admin/delete-product
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
