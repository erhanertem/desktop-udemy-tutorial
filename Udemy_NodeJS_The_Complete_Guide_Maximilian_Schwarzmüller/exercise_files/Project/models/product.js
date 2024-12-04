const fs = require('fs').promises; // Promises extension leverages readfile use async
const path = require('path');
const pathRoot = require('../util/path');

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	static ROOTPATH = path.join(pathRoot, 'data', 'products.json');

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
						await fs.writeFile(Product.ROOTPATH, JSON.stringify([this]), 'utf-8');
						console.log('Product saved to new file');
						return; // Prevent further execution
					} catch (writeError) {
						console.error('Error writing file:', writeError.message);
						throw readError; // Re-throw if not a "file not found" error
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
				console.log(Product.ROOTPATH);
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
			console.error('An Unexpected error occured:', err.message);
		}
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
