const express = require('express');
const { check, param, query, body, header } = require('express-validator');

const adminController = require('../controllers/admin');

const isAuth = require('../middleware/isAuth');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

// GET /admin/add-product
router.get('/add-product', isAuth, adminController.getAddProduct);

// POST /admin/add-product
router.post(
	'/add-product',
	[
		body('title').isAlphanumeric().isLength({ min: 3 }).trim(),
		body('imageUrl').isURL(),
		body('price').isFloat(),
		body('description').isLength({ min: 5, max: 400 }).trim(),
	],
	isAuth,
	adminController.postAddProduct
);

// GET /admin/list-products
router.get('/list-products', isAuth, adminController.getAllProducts);

// GET /admin/edit-product/params
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// POST /admin/edit-product
router.post(
	'/edit-product',
	[
		body('title').isAlphanumeric().isLength({ min: 3 }).trim(),
		body('imageUrl').isURL(),
		body('price').isFloat(),
		body('description').isLength({ min: 5, max: 400 }).trim(),
	],
	isAuth,
	adminController.postEditProduct
);

// POST /admin/delete-product
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
