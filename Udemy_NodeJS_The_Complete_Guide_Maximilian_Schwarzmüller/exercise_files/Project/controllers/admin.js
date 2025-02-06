const mongoose = require('mongoose');

const { validationResult } = require('express-validator');

const Product = require('../models/product'); // Product hereby is an arbitrary name does not need to match the name provided in the model() @ source file export

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
		hasError: false,
		errorMessage: null,
		validationErrors: [],
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
			// // TEST MOCK ERROR
			// throw new Error('Test Error');
			// // TEST MOCK ERROR
			// product = false;

			// Handle case where product is not found
			if (!product) {
				return res.status(404).render('errors/404', {
					pageTitle: 'Product Not Found',
					path: '',
					message: `Product with ID "${productId}" not found.`,
					redirectDelay: process.env.REDIRECT_DELAY,
				});
			}

			console.log('Found product');
			// Render the edit page if product exists
			res.render('admin/edit-product', {
				pageTitle: 'Edit Product',
				path: '/admin/edit-product',
				editing: editMode, // /admin/edit-product/12345?edit=true&title=new_product
				hasError: false,
				errorMessage: null,
				validationErrors: [],
				product,
			});
		})
		.catch((err) => {
			// console.error('Error fetching product:', err.message);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Fetching product failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getAllProducts = (req, res, next) => {
	Product.find({ userId: req.user._id }) // Find all products belonging to user - authorization client-side only - still requires server-side authorization for full authorization implementation
		// .select('title imageUrl price -_id') // Include title and price fields and get rid of _id field from the returned product fields
		// .populate('userId', 'name') // Populate the user object from userId field at each fetched product, if specified explicitly only name along with id is returned. If userId solely provided then everything associated with the user that matches the userId is returned
		.then((products) => {
			// // TEST MOCK ERROR
			// throw new Error('Test Error');

			res.render('admin/list-products', {
				prods: products,
				path: '/admin/list-products',
				pageTitle: 'Admin Products',
			});
		})
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Populating user products failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.postDeleteProduct = (req, res, next) => {
	const productId = req.body.productId;

	// Delete the product where the user has this product and a matching product id - filtered authorization
	Product.deleteOne({ _id: productId, userId: req.user._id })
		.then(() => {
			// // TEST MOCK ERROR
			// throw new Error('Test Error');

			console.log('Product deleted');
			res.redirect('/admin/list-products');
		})
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Deleting product failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.postEditProduct = (req, res, next) => {
	// Construct a new product
	// POST req includes req.body
	// console.log(req.body);
	const { title, imageUrl, price, description, productId } = req.body;

	// Read validatione errors from the prev validation middleware block
	const errors = validationResult(req);
	// If any error reported
	if (!errors.isEmpty()) {
		// Render the edit page again
		return res.status(422).render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: true, // /admin/edit-product/12345?edit=true&title=new_product
			hasError: true,
			errorMessage: errors.array()[0].msg, // Passes the generic message
			validationErrors: errors.array(), // Ables to pick  up validation errors specific to form line-items and furnish CSS in case of error
			product: {
				title: title,
				imageUrl: imageUrl,
				price: price,
				description: description,
				_id: productId, // Required to pass the productId to the edit-product page
			},
		});
	}

	// Attempt to save the product
	Product.findById(productId)
		.then((product) => {
			// // TEST MOCK ERROR
			// throw new Error('Test Error');

			// Engage in authorization check
			if (product.userId.toString() !== req.user._id.toString()) {
				// Redirect to the home page if unauthorized
				return res.status(403).redirect('/');
			}
			// Modify the retrieved product
			product.title = title;
			product.imageUrl = imageUrl;
			product.price = price;
			product.description = description;
			product.productId = productId;
			// Save the updated product to the database
			product.save().then((result) => {
				console.log('Updated product');
				res.redirect('/admin/list-products');
			});
		})
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Finding a product failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.postAddProduct = (req, res, next) => {
	const { title, imageUrl, price, description } = req.body;
	const userId = req.user._id; // Note: When _id is retrieved, its provided as string by the mongo driver
	// Read validatione errors from the prev validation middleware block
	const errors = validationResult(req);
	// If any error reported
	if (!errors.isEmpty()) {
		// Render the edit page again
		return res.status(422).render('admin/edit-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			editing: false, // /admin/edit-product/12345?edit=true&title=new_product
			hasError: true,
			errorMessage: errors.array()[0].msg, // Passes the generic message
			validationErrors: errors.array(), // Ables to pick  up validation errors specific to form line-items and furnish CSS in case of error
			product: {
				title: title,
				imageUrl: imageUrl,
				price: price,
				description: description,
			},
		});
	}

	// Create a new product
	const product = new Product({
		// // TEST MOCK ERROR
		// _id: new mongoose.Types.ObjectId('6781a162df1abe986cda2c29'), // Generate a new ObjectId from an existing product to deleberately plot an error for testing
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
			// > OPTION#1. THROW ERROR FOR GLOBAL ERROR HANDLING
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Creating a product failed.');
			error.httpStatusCode = 500;
			return next(error);

			// > OPTION#2. Intended Page/Response with Error Information upon Error
			// return res.status(500).render('admin/edit-product', {
			// 	pageTitle: 'Add Product',
			// 	path: '/admin/add-product',
			// 	editing: false,
			// 	hasError: true,
			// 	errorMessage: 'Failed to create product. Please try again.',
			// 	validationErrors: [],
			// 	product: {
			// 		title,
			// 		imageUrl,
			// 		price,
			// 		description,
			// 	},
			// });

			// > OPTION#3. Manually Redirect to a specific error page
			// res.redirect('/500');
		});
};
