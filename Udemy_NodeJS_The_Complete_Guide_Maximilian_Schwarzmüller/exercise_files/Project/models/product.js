const { db } = require('../util/nosqldatabase');
// const { getDb } = require('../util/nosqldatabase');

class Product {
	constructor(title, price, description, imageUrl) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	// Save the product to the database
	save() {
		// const db = getDb();
		const productCollection = db().collection('products');
		return productCollection
			.insertOne(this)
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	}
}

module.exports = Product;
