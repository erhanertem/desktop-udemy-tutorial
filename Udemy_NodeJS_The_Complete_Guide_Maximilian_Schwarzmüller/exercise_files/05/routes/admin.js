const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

const products = [];

// > THIS MIDDLEWARE ONLY RUNS @ /add-product ROUTE AND STOPS FURTHER EXECUTION
// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
	// SERVE STATIC HTML FILE CONTENT
	// // SPECIFY FOLDER MANUALLY
	// res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
	// // SPECIFY FOLDER AUTOMATICALLY
	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	// SERVE DYNAMIC HTML TEMPLATE FILE BASED ON DEFAULT TEMPLATE ENGINE
	// w/ PUG
	res.render('add-product', {
		pageTitle: 'Add Product',
		// path: '/admin/add-product',
		pathAddProduct: true,
		styles: '<link rel="stylesheet" href="/css/product.css" ><link rel="stylesheet" href="/css/forms.css" >',
	});
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
	// console.log(req.body);
	products.push({ title: req.body.title });

	res.redirect('/'); // Redirect from /add-product to / route
});

module.exports.routes = router;
module.exports.products = products;
