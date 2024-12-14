const fs = require('fs').promises;
const path = require('path');

const pathRoot = require('../util/path');

module.exports = class Cart {
	// Define the path the DB file to be written @
	static ROOTPATH = path.join(pathRoot, 'data', 'cart.json');

	static async getCart() {
		// Fetch the current cart
		try {
			const fileContent = await fs.readFile(Cart.ROOTPATH, 'utf-8');

			return JSON.parse(fileContent); // Parse existing cart
		} catch (readError) {
			return; // Do nothing
		}
	}

	static async deleteProduct(id, productPrice) {
		let cart;

		// Fetch the current cart
		try {
			const fileContent = await fs.readFile(Cart.ROOTPATH, 'utf-8');

			cart = JSON.parse(fileContent); // Parse existing cart products
			console.log(cart);
		} catch (readError) {
			return; // Do nothing
		}

		// Update the cart
		const updatedCart = { ...cart };
		const deletedProductIndex = updatedCart.products.findIndex((product) => product.id === id);

		let deletedProductQty;

		if (deletedProductIndex !== -1) {
			deletedProductQty = updatedCart.products[deletedProductIndex].qty;
			updatedCart.products.splice(deletedProductIndex, 1);
			updatedCart.totalPrice = updatedCart.totalPrice - Number(productPrice) * deletedProductQty;

			// Write the new cart to file
			try {
				await fs.writeFile(Cart.ROOTPATH, JSON.stringify(updatedCart), 'utf-8');
				console.log('New cart saved to file');
				return; // Prevent further execution
			} catch (writeError) {
				console.error('Error writing file:', writeError.message);
				throw writeError;
			}
		} else return;
	}

	static async addProduct(id, productPrice) {
		let cart = { products: [], totalPrice: 0 };
		let updatedProduct;

		try {
			// Try reading the file
			try {
				// Fetch the previous cart if there is any
				const fileContent = await fs.readFile(Cart.ROOTPATH, 'utf-8');
				try {
					cart = JSON.parse(fileContent); // Parse existing cart products
					if (!cart.products || !cart.totalPrice) throw new Error('Invalid cart structure');
				} catch (parseError) {
					console.warn('Error parsing cart.json. Initializing a new cart.');
					cart = { products: [], totalPrice: 0 };
				}
			} catch (readError) {
				// If the file does not exist, initialize a new cart
				if (readError.code === 'ENOENT') {
					console.warn('Cart file not found. Initializing a new cart.');
					// Create the new product if doesn't exist and insert into the cart
					cart = { products: [{ id: id, qty: 1 }], totalPrice: productPrice };
					return;
				} else {
					throw readError; // Re-throw unexpected errors
				}
			}

			// Analyze the cart
			// Find existing product or add a new one
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
			// Create the new product if doesn't exist in the existing cart
			else {
				updatedProduct = { id: id, qty: 1 };
				// Insert into the cart products array
				cart.products = [...cart.products, updatedProduct];
			}
			// Adjust the new totalPrice
			cart.totalPrice = Number(cart.totalPrice) + Number(productPrice);

			try {
				await fs.writeFile(Cart.ROOTPATH, JSON.stringify(cart), 'utf-8');
				console.log('Cart saved to file');
				return; // Prevent further execution
			} catch (writeError) {
				console.error('Error writing file:', writeError.message);
				throw writeError;
			}
		} catch (error) {
			// General fallback for unexpected errors
			console.error('An Unexpected error occured:', error.message);
		}
	}
};
