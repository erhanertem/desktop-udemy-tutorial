const fs = require('fs').promises;
const path = require('path');

const pathRoot = require('../util/path');

module.exports = class Cart {
	// Define the path the DB file to be written @
	static ROOTPATH = path.join(pathRoot, 'data', 'cart.json');

	static async addProduct(id, productPrice) {
		let cart = { products: [], totalPrice: 0 };
		let updatedProduct;

		try {
			// Try reading the file
			try {
				// Fetch the previous cart if there is any
				const fileContent = await fs.readFile(Cart.ROOTPATH, 'utf-8');
				cart = JSON.parse(fileContent); // Parse existing cart products

				// Analyze the cart
				// Find the existing matching product
				const existingProductIndex = cart.products.findIndex((product) => product.id === id);
				const existingProduct = cart.products[existingProductIndex];
				// Increment quantity if it exists
				if (existingProductIndex >= 0) {
					// Make a copy of the product object
					updatedProduct = { ...existingProduct };
					// Increment its quantity by 1
					updatedProduct.qty = updatedProduct.qty + 1;
					// Make a copy of the cart products array
					cart.products = [...cart.products];
					// Replace the product @ found index with the revised object
					cart.products[existingProductIndex] = updatedProduct;
				}
				// Create the new product if doesn't exist
				else {
					updatedProduct = { id: id, qty: 1 };
					// Insert into the cart products array
					cart.products = [...cart.products, updatedProduct];
				}
				// Adjust the new totalPrice
				cart.totalPrice = Number(cart.totalPrice) + Number(productPrice);
			} catch (readError) {
				// If file does not exist, create a new array to store products
				if (readError.code === 'ENOENT') {
					console.warn('File not found, creating a new one...');

					// Initialize the cart with correct baseline structure
					cart = { products: [], totalPrice: 0 };

					// Create the new product if doesn't exist
					updatedProduct = { id: id, qty: 1 };
					// Insert into the cart products array
					cart.products = [updatedProduct];

					try {
						await fs.writeFile(Cart.ROOTPATH, JSON.stringify(cart));
						console.log('Cart saved to new file');
						return; // Prevent further execution
					} catch (writeError) {
						console.error('Error writing file:', writeError.message);
						throw writeError; // Re-throw if not a "file not found" error
					}
				} else {
					console.error('Error reading file:', readError.message);
					throw readError; // Re-throw if not a "file not found" error
				}
			}

			try {
				await fs.writeFile(Cart.ROOTPATH, JSON.stringify(cart), 'utf-8');
				console.log('Cart saved to file');
				return; // Prevent further execution
			} catch (writeError) {
				console.error('Error writing file:', writeError.message);
				throw writeError; // Re-throw if not a "file not found" error
			}
		} catch (error) {
			// General fallback for unexpected errors
			console.error('An Unexpected error occured:', error.message);
		}
	}
};
