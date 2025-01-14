const Product = require('../models/product');
const Order = require('../models/order');

exports.getIndex = (req, res, next) => {
	Product.find()
		.then((products) => {
			return res.render('shop/index', {
				prods: products,
				path: '/',
				pageTitle: 'Shop',
				isAuthenticated: req.isLoggedIn, // Per postLogin value @ auth.js
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getProducts = (req, res, next) => {
	Product.find()
		.then((products) => {
			return res.render('shop/product-list', {
				prods: products,
				path: '/product-list',
				pageTitle: 'All products',
				isAuthenticated: req.isLoggedIn, // Per postLogin value @ auth.js
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getProduct = (req, res, next) => {
	const productId = req.params.productId;

	Product.findById(productId)
		.then((product) => {
			return res.render('shop/product-detail', {
				product,
				path: '/product-list',
				pageTitle: product.title,
				isAuthenticated: req.isLoggedIn, // Per postLogin value @ auth.js
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
		.populate('cart.items.productId') // Builds the cart items with corresponding full product reference
		.then((user) => {
			// console.log(user.cart.items);
			// Render the cart page with the re-constructed cart details
			res.render('shop/cart', {
				path: '/cart',
				pageTitle: 'Your Cart',
				products: user.cart.items,
				isAuthenticated: req.isLoggedIn, // Per postLogin value @ auth.js
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
	Product.findById(productId)
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
		// > Option#1
		// .populate('cart.items.productId')
		// > Option#2
		.populate({
			path: 'cart.items.productId',
			select: 'title price description imageUrl',
		})
		.then((user) => {
			// Populate product information from the cart items
			const products = user.cart.items;
			// Create a new order instance
			const order = new Order({
				userId: req.user._id,
				products: products.map((product) => {
					return {
						// > Option#1
						// // VERY IMPORTANT: populate replaces productId on the fly with the corresponding product information. However, if we try to access the information we only receive the productId again.
						// // product: product.productId,
						// // VERY IMPORTANT: In order to access the populated information on productId, we need to use _doc property of mongoose for the populated object
						// product: product.productId._doc,
						// > Option#2
						product: { ...product.productId },
						quantity: product.quantity,
					};
				}),
			});
			// Save the order via mongoose
			return order.save();
		})
		.then((result) =>
			// Clear the cart after order creation
			req.user.deleteCart()
		)
		.then((result) =>
			// Redirect to orders page
			res.redirect('/orders')
		)
		.catch((err) => {
			console.error('Error while creating order: ', err);
			next(err); // Pass the error to the global error-handling middleware})
		});
};

exports.getOrders = (req, res, next) => {
	Order.find({ userId: req.user._id })
		.then((orders) =>
			// Render the orders page
			res.render('shop/orders', {
				path: '/orders',
				pageTitle: 'Your Orders',
				orders,
				isAuthenticated: req.isLoggedIn, // Per postLogin value @ auth.js
			})
		)
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};
