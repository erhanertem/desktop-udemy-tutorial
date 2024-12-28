const { mongoConnect, getDb } = require('../util/nosqldatabase');

class Product {
	constructor(title, price, description, imageUrl) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {}
}
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
	} // Define the structure of product
);

module.exports = Product;
