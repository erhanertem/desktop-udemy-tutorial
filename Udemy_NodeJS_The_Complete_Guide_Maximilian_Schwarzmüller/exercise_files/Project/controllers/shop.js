const Product = require('../models/product');

exports.getIndex = async (req, res, next) => {
	try {
		const products = await Product.fetchAll();
		res.render('shop/index', {
			prods: products,
			path: '/',
			pageTitle: 'Shop',
		});
	} catch (err) {
		console.log(err);
		next(err); // Pass the error to the global error-handling middleware
	}
};

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.fetchAll();

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
	} catch (err) {
		console.error('Error fetching cart details:', err);
		next(err); // Pass the error to the global error-handling middleware
	}
};

exports.postCart = async (req, res, next) => {
	// ProductId info is passed thru input field submission as POST req.
	const productId = req.body.productId;
	// Read the current user cart
	const fetchedCart = await req.user.getCart();
	// Find if the product with id exist in the cart
	const productInstance = await fetchedCart.getProducts({ where: { id: productId } });

	let product;
	let updatedQuantity;
	// If it is in the cart, update the quantity of the product
	if (productInstance.length) {
		product = productInstance[0];
		// Update the quantity - sequelize provides access to quantity field of the cartItem as product and cartItem is linked
		updatedQuantity = product.cartItem.quantity + 1;
	} else {
		// If there is no product instance, grap the product info
		product = await Product.findByPk(productId);
		// Set the quantity to 1
		updatedQuantity = 1;
	}

	// Add the product to the user's current cart + update the quantity @ corresponding junction table
	await fetchedCart.addProduct(product, { through: { quantity: updatedQuantity } });

	// Redirect to the cart page
	res.redirect('/cart');
};

exports.postCartDeleteProduct = async (req, res, next) => {
	try {
		// ProductId info is passed thru input field submission as POST req.
		const productId = req.body.productId;
		// Read the current user cart
		const fetchedCart = await req.user.getCart();
		// Find the product with id
		const [product] = await fetchedCart.getProducts({ where: { id: productId } });

		const newQuantity = product.cartItem.quantity - 1;

		// Remove the product from the cart
		// Remove the item completely from DB if it has depleted
		if (!newQuantity) {
			await product.cartItem.destroy();
		} else {
			// Update the quantity of the product in the cart with newQuantity
			await fetchedCart.addProduct(product, { through: { quantity: newQuantity } });
		}
		// Redirect to the cart page
		res.redirect('/cart');
	} catch (err) {
		console.log(err);
		next(err); // Pass the error to the global error-handling middleware
	}
};

exports.postOrder = async (req, res, next) => {
	try {
		// Fetch the order details of the user
		const fetchedCart = await req.user.getCart();
		// Fetch the products in the cart
		const products = await fetchedCart.getProducts();
		// Create an order instance for the user
		const order = await req.user.createOrder();
		// Add products into order instance
		await order.addProducts(
			products.map((product) => {
				// Set the quantity of the product in the order-item table
				product.orderItem = { quantity: product.cartItem.quantity };
				return product;
			})
		);

		// Clear the cart after order is placed
		await fetchedCart.setProducts(null);

		// Redirect to orders page
		res.redirect('/orders');
	} catch (err) {
		console.log(err);
		next(err); // Pass the error to the global error-handling middleware
	}
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
