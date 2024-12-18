const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
	});
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
		const product = await Product.findByPk(productId);

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
	const products = await Product.findAll();
	res.render('admin/list-products', {
		prods: products,
		path: '/admin/list-products',
		pageTitle: 'Admin Products',
	});
};

exports.postDeleteProduct = async (req, res, next) => {
	const productId = req.body.productId;
	await Product.deleteById(productId);
	res.redirect('/admin/list-products');
};

exports.postEditProduct = async (req, res, next) => {
	try {
		// Construct a new product
		// POST req includes req.body
		// console.log(req.body);
		const { productId, description, price, imageUrl, title } = req.body;
		// Find the matching id product
		const product = await Product.findByPk(productId);
		// Assign the changes onto found product
		product.title = title;
		product.imageUrl = imageUrl;
		product.description = description;
		product.price = price;
		// Save to DB
		await product.save();

		res.redirect('/admin/list-products');
	} catch (err) {
		console.log(err);
	}
};

exports.postAddProduct = async (req, res, next) => {
	const { title, imageUrl, description, price } = req.body;

	try {
		await Product.create({
			title,
			imageUrl,
			description,
			price,
		});
		res.redirect('/admin/list-products');
	} catch (err) {
		console.log(err);
	}
};
