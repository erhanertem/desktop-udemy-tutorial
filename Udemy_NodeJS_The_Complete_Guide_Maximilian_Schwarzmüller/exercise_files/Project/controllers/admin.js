const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		pathAddProduct: true,
	});
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
