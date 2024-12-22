const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.findAll();

		res.render('shop/product-list', {
			prods: products,
			path: '/product-list',
			pageTitle: 'All products',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getProduct = async (req, res, next) => {
	const productId = req.params.productId;

	// #Alternate #1
	// const product = await Product.findAll({ where: { id: productId } });
	// console.log(product[0].dataValues);
	// #Alternate #2
	const product = await Product.findByPk(productId);

	res.render('shop/product-detail', {
		product,
		path: '/product-list',
		pageTitle: product.title,
	});
};

exports.getCart = async (req, res, next) => {
	try {
		// Gather cart data via seq. magic method
		const cart = await req.user.getCart();
		// Gather all products via seq. magic method
		const products = await cart.getProducts();
		// Render the cart page with the re-constructed cart details
		res.render('shop/cart', {
			path: '/cart',
			pageTitle: 'Your Cart',
			products: products,
		});
	} catch (error) {
		console.error('Error fetching cart details:', error);
		next(error); // Pass error to the global error-handling middleware
	}
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

exports.postCartDeleteProduct = async (req, res, next) => {
	const productId = req.body.productId;
	const { id, price } = await Product.findById(productId);
	await Cart.deleteProduct(id, price);
	res.redirect('/cart');
};

exports.getIndex = async (req, res, next) => {
	try {
		const products = await Product.findAll();
		res.render('shop/index', {
			prods: products,
			path: '/',
			pageTitle: 'Shop',
		});
	} catch (err) {
		console.log(err);
	}
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
