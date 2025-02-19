const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const Product = require('../models/product');
const Order = require('../models/order');
const useURL = require('../util/path');

exports.getCheckout = (req, res, next) => {
	req.user
		.populate('cart.items.productId') // Builds the cart items with corresponding full product reference
		.then((user) => {
			const products = user.cart.items;
			// Render the cart page with the re-constructed cart details
			const totalSum = products.reduce((sum, product) => {
				return sum + product.quantity * product.productId.price;
			}, 0);

			res.render('shop/checkout', {
				path: '/checkout',
				pageTitle: 'Checkout',
				products,
				totalSum,
			});
		})
		.catch((err) => {
			// Create custom error object
			const error = new Error('Populating cart details failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getInvoice = (req, res, next) => {
	const orderId = req.params.orderId;

	// GUARD CLAUSE - check if the requested invoice is belong to the user
	Order.findById(orderId)
		.then((order) => {
			// If no such order return an error
			if (!order) {
				return next(new Error('Order not found.'));
			}
			// If there is such order but not authorized for the user access
			if (order.user.userId.toString() !== req.user._id.toString()) {
				return next(new Error('Unauthorized.'));
			}

			const invoiceName = 'invoice-' + orderId + '.pdf';
			const invoicePath = path.join('data', 'invoices', invoiceName);
			// path.join() resolves the current working directory behind the scene when concatenating the provided URL fragments
			// data\invoices\invoice-67ad1defdf5db623dbb9a86d.pdf will be returned as /c:/CODING/REPO_ARCHIEVE/udemy/Udemy_NodeJS_The_Complete_Guide_Maximilian_Schwarzmüller/exercise_files/Project/data/invoices/invoice-123.pdf

			// // > #1. Send File to Client Existing File
			// IMPORTANT: Reading file into memory and stream only works for small projects and small files. But in large scale produxction and larger files, we need to stream data.
			// fs.readFile(invoicePath, (err, data) => {
			// 	if (err) {
			// 		next(err);
			// 	}
			// 	res.type('pdf'); // same as res.setHeader('Content-Type', 'application/pdf');
			// 	res.setHeader('Content-Disposition', `inline; filename='${invoiceName}'`); // No express version
			// 	// res.attachment(invoiceName); // same as res.setHeader('Content-Disposition', `attachment; filename='${invoiceName}'`);
			// 	res.send(data); // send() middleware by expressjs
			// });
			// // > #2. Stream File to Client Existing File
			// const file = fs.createReadStream(invoicePath); // Reads a chunk of data at a time from the requested file
			// res.type('pdf'); // same as res.setHeader('Content-Type', 'application/pdf');
			// res.setHeader('Content-Disposition', `inline; filename='${invoiceName}'`); // No express version
			// file.pipe(res); // Send stream to response for client browser to download the file step by step (in chunks). Only a chunk of binary data is temporarily stored in the memory called buffer.
			// > #3. Create PDF, save and send to client based on provided content
			const pdfDoc = new PDFDocument(); // Creates a new instance of PDF document
			res.type('pdf'); // same as res.setHeader('Content-Type', 'application/pdf');
			res.setHeader('Content-Disposition', `inline; filename='${invoiceName}'`); // No express version
			pdfDoc.pipe(fs.createWriteStream(invoicePath)); // This tells Node.js: ('Hey, whenever new PDF data is generated, write it to this file!');
			pdfDoc.pipe(res); // This tells Node.js: ('At the same time, send this data to the client’s browser too!');
			// Provide the content of the pdf file
			// NOTE: if this block comes before pipes, there would be err as data would have no idea where to go or be saved at.
			pdfDoc.fontSize(26).text('Invoice', { underline: true }); // Now, the actual content of the PDF is generated and sent to the pipes (file and response).
			pdfDoc.fontSize(26).text('--------------------------------');
			let totalPrice = 0;
			order.products.forEach((el) => {
				totalPrice += el.quantity * el.product.price;
				pdfDoc
					.image(useURL(el.product.imageUrl), { width: 26, height: 26, align: 'left', valign: 'center' })
					.moveDown(0.5);
				pdfDoc
					.fontSize(14)
					.text(`${el.product.title} - ${el.quantity} x $${el.product.price}`, { align: 'center', valign: 'center' });
			});
			pdfDoc.fontSize(26).text('--------------------------------');
			pdfDoc.fontSize(14).font('Helvetica-Bold').text(`Total Price: $${totalPrice}`);
			pdfDoc.end(); // This signals that no more data will be written, so the stream can finish properly.
		})
		.catch((err) => {
			// Create custom error object
			const error = new Error('Fetching order information failed.' || err.message);
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getIndex = (req, res, next) => {
	// Read pagination query variable from the endpoint URL
	const page = +req.query.page || 1; // If first time visiting the page set current page to 1 as fallback
	const { PAGINATION_ITEMS_PER_PAGE } = process.env;

	const message = req.flash('notify');

	let totalItems;
	Product.countDocuments()
		.then((numberOfProducts) => {
			totalItems = numberOfProducts;
			return Product.find()
				.skip((page - 1) * PAGINATION_ITEMS_PER_PAGE) // Skip n pages of items
				.limit(PAGINATION_ITEMS_PER_PAGE); // Limit to only first x number of items
		})
		.then((products) => {
			return res.render('shop/index', {
				// Page Related Data
				prods: products,
				path: '/',
				pageTitle: 'Shop',
				// Pagination Related Data
				hasNextPage: PAGINATION_ITEMS_PER_PAGE * page < totalItems,
				hasPrevPage: page > 1,
				currentPage: page,
				nextPage: page + 1,
				prevPage: page - 1,
				lastPage: Math.ceil(totalItems / PAGINATION_ITEMS_PER_PAGE),
				// Error Related Data
				notifyMessage: message.length && message,
				flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000,
				// Page Security Related Data
				// NOTE: Instead of coding this part @ every contorller view, we setup @ app.js a global middleware that injects these variables to res.locals so that views can pick it up
				// isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
				// csrfToken: req.csrfToken(), //csrfToken() is provided by the csrf middleware @ app.js
			});
		})
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Fetching products failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getProducts = (req, res, next) => {
	// Read pagination query variable from the endpoint URL
	const page = +req.query.page || 1; // If first time visiting the page set current page to 1 as fallback
	const { PAGINATION_ITEMS_PER_PAGE } = process.env;

	let totalItems;
	Product.countDocuments()
		.then((numberOfProducts) => {
			totalItems = numberOfProducts;
			return Product.find()
				.skip((page - 1) * PAGINATION_ITEMS_PER_PAGE) // Skip n pages of items
				.limit(PAGINATION_ITEMS_PER_PAGE); // Limit to only first x number of items
		})
		.then((products) => {
			return res.render('shop/product-list', {
				// Page Related Data
				prods: products,
				path: '/product-list',
				pageTitle: 'All products',

				// Pagination Related Data
				hasNextPage: PAGINATION_ITEMS_PER_PAGE * page < totalItems,
				hasPrevPage: page > 1,
				currentPage: page,
				nextPage: page + 1,
				prevPage: page - 1,
				lastPage: Math.ceil(totalItems / PAGINATION_ITEMS_PER_PAGE),
			});
		})
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Fetching products failed.');
			error.httpStatusCode = 500;
			return next(error);
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
			});
		})
		.catch((err) => {
			// console.error('Error fetching product details:', err);
			// next(err); // Pass the error to the global error-handling middleware);
			// Create custom error object
			const error = new Error('Fetching product details failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getCart = (req, res, next) => {
	req.user
		.populate('cart.items.productId') // Builds the cart items with corresponding full product reference
		.then((user) => {
			// const products = user.cart.items;
			// console.log('products :', products);
			// Render the cart page with the re-constructed cart details
			res.render('shop/cart', {
				path: '/cart',
				pageTitle: 'Your Cart',
				products: user.cart.items,
			});
		})
		.catch((err) => {
			// console.error('Error fetching cart details:', err);
			// next(err); // Pass the error to the global error-handling middleware);
			// Create custom error object
			const error = new Error('Fetching cart details failed.');
			error.httpStatusCode = 500;
			return next(error);
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
			// Redirect to the cart page
			res.redirect('/cart');
		})
		.catch((err) => {
			// console.error('Error posting cart: ', err);
			// next(err); // Pass the error to the global error-handling middleware);
			// Create custom error object
			const error = new Error('Posting cart failed.');
			error.httpStatusCode = 500;
			return next(error);
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
			// console.error('Error deleting product from cart: ', err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Deleting product from cart failed.');
			error.httpStatusCode = 500;
			return next(error);
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
				user: {
					email: req.user.email,
					userId: req.user._id,
				},
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
			// console.error('Error while creating order: ', err);
			// next(err); // Pass the error to the global error-handling middleware})
			// Create custom error object
			const error = new Error('Creating order failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.getOrders = (req, res, next) => {
	Order.find({ 'user.userId': req.user._id })
		.then((orders) =>
			// Render the orders page
			res.render('shop/orders', {
				path: '/orders',
				pageTitle: 'Your Orders',
				orders,
			})
		)
		.catch((err) => {
			// console.log(err);
			// next(err); // Pass the error to the global error-handling middleware
			// Create custom error object
			const error = new Error('Fetching orders failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};
