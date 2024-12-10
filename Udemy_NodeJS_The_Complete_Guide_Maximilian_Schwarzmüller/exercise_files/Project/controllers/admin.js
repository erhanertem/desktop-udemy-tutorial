const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
	});
};

exports.postEditProduct = async (req, res, next) => {
	// Construct a new product
	// Replace the old one with the new one
};

exports.getEditProduct = async (req, res, next) => {
	try {
		// Check for the `edit` query parameter
		const editMode = req.query.edit;
		// Redirect if not in edit mode
		if (!editMode) res.redirect('/');

		// Get the `productId` from route parameters
		const productId = req.params.productId;

		// Fetch the product by ID
		const product = await Product.findById(productId);

		// Handle case where product is not found
		if (!product) {
			return res.status(404).render('404', {
				pageTitle: 'Product Not Found',
				path: '',
				message: `Product with ID "${productId}" not found.`,
			});
		}

		// Render the edit page if product exists
		res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: editMode, // /admin/edit-product/12345?edit=true&title=new_product
			product: product,
		});
	} catch (error) {
		console.error('Error fetching product:', error.message);

		// Pass the error to the 500 error-handling middleware
		throw error;
	}
};

exports.getAllProducts = async (req, res, next) => {
	const products = await Product.fetchAll();
	res.render('admin/list-products', {
		prods: products,
		path: '/admin/list-products',
		pageTitle: 'Admin Products',
	});
};

exports.postAddProduct = (req, res, next) => {
	const { title, imageUrl, description, price } = req.body;

	// REPALCED WITH FORM REQURIED - JUST AN EXERCISE
	// // GUARD CLAUSE - Dynamic absense check
	// for (const [key, value] of Object.entries(req.body))
	// 	switch (key) {
	// 		case 'title':
	// 			if (!value)
	// 				return res.status(400).render('errors/400', { pageTitle: 'Error', path: '', message: 'Title is required' });
	// 			break;
	// 		case 'imageUrl':
	// 			if (!value) {
	// 				return res
	// 					.status(400)
	// 					.render('errors/400', { pageTitle: 'Error', path: '', message: 'Image URL is required' });
	// 			}
	// 			break;
	// 		case 'description':
	// 			if (!value) {
	// 				return res
	// 					.status(400)
	// 					.render('errors/400', { pageTitle: 'Error', path: '', message: 'Description is required' });
	// 			}
	// 			break;
	// 		case 'price':
	// 			if (!value || isNaN(parseFloat(value))) {
	// 				return res
	// 					.status(400)
	// 					.render('errors/400', { pageTitle: 'Error', path: '', message: 'Valid price is required' });
	// 			}
	// 			break;
	// 		default:
	// 			break; // Ignore extra keys in the request body
	// 	}

	const product = new Product(title, imageUrl, description, price);
	product.save();

	res.redirect('/'); // Redirect from /add-product to / route
};
