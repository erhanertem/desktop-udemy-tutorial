const fs = require('fs').promises; // Promises extension leverages readfile use async
const path = require('path');
const pathRoot = require('../util/path');

module.exports = class Product {
	constructor(title, imageUrl, description, price) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	static ROOTPATH = path.join(pathRoot, 'data', 'products.json');

	async save() {
		this.id = Math.random().toString();

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

			// Add new product to the list
			products.push(this);

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
