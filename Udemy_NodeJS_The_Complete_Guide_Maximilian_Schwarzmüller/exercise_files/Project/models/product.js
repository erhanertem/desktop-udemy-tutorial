// -> #2. Data model for Sequelize+mysql2
const Sequelize = require('sequelize');

const sequelize = require('../util/sqldatabase');

// Define 'product' data model
const Product = sequelize.define(
	'product', // Name of the data model
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		imageUrl: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		price: {
			type: Sequelize.DOUBLE,
			allowNull: false,
		},
	} // Define the nature of data
);

module.exports = Product;

// -> #1. Data model for Mysql2
// const db = require('../util/sqldatabase');

// const path = require('path');
// const pathRoot = require('../util/path');
// const Cart = require('../models/cart');

// module.exports = class Product {
// 	constructor(id, title, imageUrl, description, price) {
// 		this.id = id;
// 		this.title = title;
// 		this.imageUrl = imageUrl;
// 		this.description = description;
// 		this.price = price;
// 	}

// 	static async deleteById(productId) {}

// 	// IN ORDER TO ESCAPE SQL INJECTION PATTERNS, WE PROVIDE ESCAPE VALUES (?,?,?,?) FOR EACH FIELD AND FILL IN THOSE WITH THE PRIOVIDED IN THE ARRAY
// 	async save() {
// 		try {
// 			await db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ? , ? ,?)', [
// 				this.title,
// 				this.price,
// 				this.description,
// 				this.imageUrl,
// 			]);
// 		} catch (err) {
// 			console.log('Error registering to DB:', err.message);
// 			throw err; // Re-throw the error so the caller is aware
// 		}
// 	}

// 	static async findById(productId) {
// 		try {
// 			const [product] = await db.execute('SELECT * FROM products WHERE products.id=?', [productId]);
// 			return product[0]; // Return the rows for further processing
// 		} catch (err) {
// 			console.error('Error accessing DB:', err.message);
// 			throw err; // Re-throw the error so the caller is aware
// 		}
// 	}

// 	static async fetchAll() {
// 		try {
// 			return await db.execute('SELECT * FROM products');
// 		} catch (err) {
// 			console.error('Error accessing DB:', err.message);
// 			throw err; // Re-throw the error so the caller is aware
// 		}
// 	}
// };
