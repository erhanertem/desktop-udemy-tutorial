const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
	const products = await Product.fetchAll();
	res.render('shop/product-list', {
		prods: products,
		path: '/product-list',
		pageTitle: 'All products',
	});
};

exports.getProduct = async (req, res, next) => {
	const productId = req.params.productId;
	console.log(productId);
	const product = await Product.findById(productId);
	console.log(product);
	res.redirect('/');
};

exports.getIndex = async (req, res, next) => {
	const products = await Product.fetchAll();
	res.render('shop/index', {
		prods: products,
		path: '/',
		pageTitle: 'Shop',
	});
};

exports.getCart = (req, res, next) => {
	res.render('shop/cart', {
		path: '/cart',
		pageTitle: 'Your Cart',
	});
};

exports.getOrders = (req, res, next) => {
	res.render('shop/orders', {
		path: '/orders',
		pageTitle: 'Your Orders',
	});
};

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		path: '/checkout',
		pageTitle: 'Checkout',
	});
};
