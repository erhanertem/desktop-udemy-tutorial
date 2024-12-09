const Product = require('../models/product');
const Cart = require('../models/cart');

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
	const product = await Product.findById(productId);
	// console.log(product);
	res.render('shop/product-detail', {
		product,
		path: '/product-list',
		pageTitle: product.title,
	});
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

exports.postCart = async (req, res, next) => {
	// ProductId info is passed thriu input field submission as POST req.
	const productId = req.body.productId;
	const product = await Product.findById(productId);
	// console.log('product :', product);
	// console.log(productId);
	await Cart.addProduct(productId, product.price);
	res.redirect('/cart');
	// Add the product to the user's cart

	// Redirect to the cart page
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
