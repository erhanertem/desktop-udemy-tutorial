const fs = require('fs').promises; // Promises extension leverages readfile use async
const path = require('path');
const pathRoot = require('../util/path');
const Cart = require('../models/cart');

module.exports = class Product {
	constructor(id, title, imageUrl, description, price) {
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	static ROOTPATH = path.join(pathRoot, 'data', 'products.json');

	static async deleteById(productId) {
		try {
			let products = [];

			// Try reading the file
			try {
				const fileContent = await fs.readFile(Product.ROOTPATH, 'utf-8');
				products = JSON.parse(fileContent); // Parse existing products
			} catch (readError) {
				console.error('Error reading file:', readError.message);
				throw readError; // Re-throw if not a "file not found" error}
			}

			// Remove the ID product from the list of products
			const product = products.find((product) => product.id === productId);
			products = products.filter((product) => product.id !== productId);

			// Write the updated products back to the file
			try {
				await fs.writeFile(Product.ROOTPATH, JSON.stringify(products), 'utf-8');
				console.log('Product saved to file');
			} catch (writeError) {
				if (error.code === 'EACCES') {
					console.error('Write permission denied:', err.path);
				} else if (err.code === 'ENOSPC') {
					console.error('No space left on device');
				}
				console.error('Error writing file:', writeError);
				throw writeError;
			}

			// Remove the deleted item from the cart
			console.log(`I am deleting ${productId} + price: ${product.price}`);
			await Cart.deleteProduct(productId, product.price);
		} catch (error) {
			// General fallback for unexpected errors
			console.error('An Unexpected error occured:', error.message);
		}
	}

	async save() {
		try {
			let products = [];

			// Try reading the file
			try {
				const fileContent = await fs.readFile(Product.ROOTPATH, 'utf-8');
				products = JSON.parse(fileContent); // Parse existing products
			} catch (readError) {
				// If file does not exist, create a new array to store products
				if (readError.code === 'ENOENT') {
					console.warn('File not found, creating a new one...');
					products = [this];
					try {
						await fs.writeFile(Product.ROOTPATH, JSON.stringify(products), 'utf-8');
						console.log('Product saved to new file');
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

			// If editing the product and saving it, use the existing provided id...
			if (this.id) {
				const existingProductIndex = products.findIndex((product) => product.id === this.id);
				products[existingProductIndex] = this;
			} else {
				// If its a newly created product assign a brand new id
				this.id = Math.random().toString();
				// Add new product to the list
				products.push(this);
			}

			// Write the updated products back to the file
			try {
				await fs.writeFile(Product.ROOTPATH, JSON.stringify(products), 'utf-8');
				console.log('Product saved to file');
			} catch (writeError) {
				if (error.code === 'EACCES') {
					console.error('Write permission denied:', err.path);
				} else if (err.code === 'ENOSPC') {
					console.error('No space left on device');
				}
				console.error('Error writing file:', writeError);
				throw writeError;
			}
		} catch (error) {
			// General fallback for unexpected errors
			console.error('An Unexpected error occured:', error.message);
		}
	}

	static async findById(productId) {
		const products = await this.fetchAll();
		const product = products.find((product) => product.id === productId);
		return product;
	}

	static async fetchAll() {
		try {
			const fileContent = await fs.readFile(Product.ROOTPATH, 'utf-8');
			return JSON.parse(fileContent);
		} catch (error) {
			if (error.code === 'ENOENT') {
				console.warn('File not found, returning empty array...');
				return [];
			}
			console.error('Error reading file:', error.message);
			return [];
		}
	}
};
