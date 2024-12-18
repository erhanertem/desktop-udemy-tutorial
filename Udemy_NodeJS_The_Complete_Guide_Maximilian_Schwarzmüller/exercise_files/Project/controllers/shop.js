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
		// Gather cart data
		const cart = await Cart.getCart();
		// Gather all products
		const products = await Product.findAll();
		// Rebuild cart data for UI
		const cartUIItems = cart.products.map((cartProduct) => {
			// Find the corresponding product from the product list
			const productDetails = products.find((product) => product.id === cartProduct.id);

			// Merge the cart product with additional details
			if (productDetails) {
				return {
					...productDetails, // Include all properties from the product
					quantity: cartProduct.qty,
					subtotal: cartProduct.qty * productDetails.price,
				};
			}

			// Handle the case where a product in the cart doesn't exist in the product list
			return null;
		});

		// Filter out any null values in case there are missing products
		const validCartUIItems = cartUIItems.filter((item) => item !== null);

		// Render the cart page with the re-constructed cart details
		res.render('shop/cart', {
			path: '/cart',
			pageTitle: 'Your Cart',
			products: validCartUIItems,
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
