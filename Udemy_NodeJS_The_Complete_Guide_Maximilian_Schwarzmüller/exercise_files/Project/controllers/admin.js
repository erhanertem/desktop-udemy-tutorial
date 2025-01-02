const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
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
	Product.findProductById(productId)
		.then((product) => {
			// Handle case where product is not found
			if (!product) {
				return res.status(404).render('404', {
					pageTitle: 'Product Not Found',
					path: '',
					message: `Product with ID "${productId}" not found.`,
				});
			}

			console.log('Found product');
			// Render the edit page if product exists
			res.render('admin/edit-product', {
				pageTitle: 'Edit Product',
				path: '/admin/edit-product',
				editing: editMode, // /admin/edit-product/12345?edit=true&title=new_product
				product: product,
			});
		})
		.catch((error) => {
			console.error('Error fetching product:', error.message);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.getAllProducts = (req, res, next) => {
	Product.fetchAllProducts()
		.then((products) => {
			res.render('admin/list-products', {
				prods: products,
				path: '/admin/list-products',
				pageTitle: 'Admin Products',
			});
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};

exports.postDeleteProduct = (req, res, next) => {
	const productId = req.body.productId;

	Product.deleteById(productId)
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
	console.log('productId :', productId);

	// Create a new product instance
	const product = new Product(title, price, description, imageUrl, productId);

	// Attempt to save the product
	product
		.saveProduct()
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

	const userId = req.user._id;
	// Create a new product
	const product = new Product(title, price, description, imageUrl, null, userId);

	product
		.saveProduct()
		.then((result) => {
			console.log('Created product');
			res.redirect('/admin/list-products');
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass the error to the global error-handling middleware
		});
};
