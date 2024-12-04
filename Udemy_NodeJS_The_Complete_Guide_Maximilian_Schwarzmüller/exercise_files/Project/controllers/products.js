const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		pathAddProduct: true,
		styles: '<link rel="stylesheet" href="/css/product.css" ><link rel="stylesheet" href="/css/forms.css" >',
	});
};

exports.postAddProduct = (req, res, next) => {
	// console.log(req.body);
	// GUARD CLAUSE
	if (!req.body.title) {
		return res.status(400).render('400', { pageTitle: 'Error', path: '' });
	}

	const product = new Product(req.body.title);
	product.save();

	res.redirect('/'); // Redirect from /add-product to / route
};

exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll();

	res.render('shop', {
		prods: products,
		pageTitle: 'My Shop',
		hasProducts: products.length > 0,
		path: '/',
		pathRoot: true,
		styles: '<link rel="stylesheet" href="/css/main.css" ><link rel="stylesheet" href="/css/forms.css" >',
	});
};
