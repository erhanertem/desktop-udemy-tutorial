const express = require('express');
const { check, param, query, body, header } = require('express-validator');

const adminController = require('../controllers/admin');

const isAuth = require('../middlewares/isAuth');
const { upload } = require('../middlewares/uploadFile');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

// GET /admin/add-product
router.get('/add-product', isAuth, adminController.getAddProduct);

// POST /admin/add-product
router.post(
	'/add-product',
	[
		body('title')
			.trim() // Sanitize the input
			.notEmpty()
			.withMessage('Please provide product title.')
			.isAlphanumeric('en-US', { ignore: ' ' }) // Allows letters, numbers, and spaces
			.withMessage('Title must contain only letters and numbers.')
			.isLength({ min: 3 })
			.withMessage('Title must be at least 3 characters long.'),
		// body('imageUrl').isURL().withMessage('Please provide product image URL.'), // Handled via mutter output internally
		body('price')
			.notEmpty()
			.withMessage('Please provide a price.') // Ensures price is not empty
			.isFloat({ min: 0.01 })
			.withMessage('Price must be a valid number greater than 0.'),
		body('description')
			.isLength({ min: 5, max: 400 })
			.withMessage('Description must be between 5 and 400 characters.')
			.trim(),
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
		body('title')
			.trim() // Sanitize the input
			.notEmpty()
			.withMessage('Please provide product title.')
			.isAlphanumeric('en-US', { ignore: ' ' }) // Allows letters, numbers, and spaces
			.withMessage('Title must contain only letters and numbers.')
			.isLength({ min: 3 })
			.withMessage('Title must be at least 3 characters long.'),
		// body('imageUrl').isURL().withMessage('Please provide product image URL.'), // User is not required to submit image unless opt to do so
		body('price')
			.notEmpty()
			.withMessage('Please provide a price.') // Ensures price is not empty
			.isFloat({ min: 0.01 })
			.withMessage('Price must be a valid number greater than 0.'),
		body('description')
			.isLength({ min: 5, max: 400 })
			.withMessage('Description must be between 5 and 400 characters.')
			.trim(),
	],
	isAuth,
	adminController.postEditProduct
);

// POST /admin/delete-product
// // FOR SERVERSIDE RENDERING WE ARE LIMITED TO POST AND GET HTTP VERBS
// router.post('/delete-product', isAuth, adminController.postDeleteProduct);
// FOR CLIENT SIDE RENDERING THRU ASYNC REQS WE ARE ALLOWED TO USE GET, POST, DELETE, PATCH, PUT FULL FLEDGED HTTP VERBS.
router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;
