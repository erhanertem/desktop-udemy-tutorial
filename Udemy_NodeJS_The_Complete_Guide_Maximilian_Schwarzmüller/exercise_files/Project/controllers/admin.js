const Product = require('../models/product'); // Product hereby is an arbitrary name does not need to match the name provided in the model() @ source file export

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
		isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js - required for navigation.ejs selective UI
	});
};

exports.getEditProduct = (req, res, next) => {
	// Check for the `edit` query parameter
	const editMode = req.query.edit;
	// Redirect if not in edit mode
	if (!editMode) res.redirect('/');

	// Get the `productId` from route parameters
	const productId = req.params.productId;

	// Fetch the product by ID
	Product.findById(productId)
		.then((product) => {
			// Handle case where product is not found
			if (!product) {
				return res.status(404).render('404', {
					pageTitle: 'Product Not Found',
					path: '',
					message: `Product with ID "${productId}" not found.`,
					isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
				});
			}

			console.log('Found product');
			// Render the edit page if product exists
			res.render('admin/edit-product', {
				pageTitle: 'Edit Product',
				path: '/admin/edit-product',
				editing: editMode, // /admin/edit-product/12345?edit=true&title=new_product
				product,
				isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
			});
		})
		.catch((error) => {
			console.error('Error fetching product:', error.message);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getAllProducts = (req, res, next) => {
	Product.find() // Find all products
		// .select('title imageUrl price -_id') // Include title and price fields and get rid of _id field from the returned product fields
		// .populate('userId', 'name') // Populate the user object from userId field at each fetched product, if specified explicitly only name along with id is returned. If userId solely provided then everything associated with the user that matches the userId is returned
		.then((products) => {
			res.render('admin/list-products', {
				prods: products,
				path: '/admin/list-products',
				pageTitle: 'Admin Products',
				isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.postDeleteProduct = (req, res, next) => {
	const productId = req.body.productId;

	Product.findByIdAndDelete(productId)
		.then(() => {
			console.log('Product deleted');
			res.redirect('/admin/list-products');
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.postEditProduct = (req, res, next) => {
	// Construct a new product
	// POST req includes req.body
	// console.log(req.body);
	const { title, imageUrl, price, description, productId } = req.body;

	// Attempt to save the product
	Product.findById(productId)
		.then((product) => {
			// Modify the retrieved product
			product.title = title;
			product.imageUrl = imageUrl;
			product.price = price;
			product.description = description;
			product.productId = productId;
			// Save the updated product to the database
			product.save();
		})
		.then((result) => {
			console.log('Updated product');
			res.redirect('/admin/list-products');
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.postAddProduct = (req, res, next) => {
	const { title, imageUrl, price, description } = req.body;
	const userId = req.user._id; // Note: When _id is retrieved, its provided as string by the mongo driver

	// Create a new product
	const product = new Product({
		title,
		price,
		description,
		imageUrl,
		userId,
	});

	product
		.save() // mongoose document api fn
		.then((result) => {
			console.log('Created product');
			res.redirect('/admin/list-products');
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};
