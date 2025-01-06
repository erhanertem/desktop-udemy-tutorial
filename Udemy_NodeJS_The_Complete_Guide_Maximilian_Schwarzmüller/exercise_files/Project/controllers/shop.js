const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
	Product.fetchAllProducts()
		.then((products) => {
			return res.render('shop/index', {
				prods: products,
				path: '/',
				pageTitle: 'Shop',
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getProducts = (req, res, next) => {
	Product.fetchAllProducts()
		.then((products) => {
			return res.render('shop/product-list', {
				prods: products,
				path: '/product-list',
				pageTitle: 'All products',
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getProduct = (req, res, next) => {
	const productId = req.params.productId;

	Product.findProductById(productId)
		.then((product) => {
			return res.render('shop/product-detail', {
				product,
				path: '/product-list',
				pageTitle: product.title,
			});
		})
		.catch((err) => {
			console.error('Error fetching product details:', err);
			next(err); // Pass the error to the global error-handling middleware);
		});
};

exports.getCart = (req, res, next) => {
	// Gather cart data via seq. magic method
	req.user
		.getCart()
		.then((products) => {
			// Render the cart page with the re-constructed cart details
			res.render('shop/cart', {
				path: '/cart',
				pageTitle: 'Your Cart',
				products: products,
			});
		})
		.catch((err) => {
			console.error('Error fetching cart details:', err);
			next(err); // Pass the error to the global error-handling middleware);
		});
};

exports.postCart = (req, res, next) => {
	// ProductId info is passed thru input field submission as POST req.
	const productId = req.body.productId;
	// Get the product that needs to be added to the cart
	Product.findProductById(productId)
		.then((product) => {
			// Add the product to the cart
			return req.user.addToCart(product);
		})
		.then((result) => {
			console.log(result);
			// Redirect to the cart page
			res.redirect('/cart');
		})
		.catch((err) => {
			console.error('Error posting cart: ', err);
			next(err); // Pass the error to the global error-handling middleware);
		});
};

exports.postCartDeleteProduct = (req, res, next) => {
	// ProductId info is passed thru input field submission as POST req.
	const productId = req.body.productId;
	// Read the current user cart
	req.user
		.deleteItemFromCart(productId)
		.then((result) => {
			// Redirect to the cart page
			res.redirect('/cart');
		})
		.catch((err) => {
			console.error('Error deleting product from cart: ', err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.postOrder = (req, res, next) => {
	req.user
		// Add order
		.addOrder()
		.then((result) => {
			// Redirect to orders page
			res.redirect('/orders');
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware})
		});
};

exports.getOrders = async (req, res, next) => {
	try {
		// Fetch all orders of the user
		// VERY IMPORTANT! Sequelize include directive injects products in the order instance so we can utilize this data inside ejs
		// User has access to orders table and orders table has access to products table via orderitems junction table. Therefore, products table data could be injected into orders table data while fetching.
		const fetchedOrders = await req.user.getOrders({ include: ['products'] });
		// Render the orders page
		res.render('shop/orders', {
			path: '/orders',
			pageTitle: 'Your Orders',
			orders: fetchedOrders,
		});
	} catch (err) {
		console.log(err);
		next(err); // Pass the error to the global error-handling middleware
	}
};

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		path: '/checkout',
		pageTitle: 'Checkout',
	});
};
