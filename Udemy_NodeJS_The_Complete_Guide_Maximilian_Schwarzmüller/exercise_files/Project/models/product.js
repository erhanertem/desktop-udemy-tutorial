const { db } = require('../util/nosqldatabase');
// const { getDb } = require('../util/nosqldatabase');

class Product {
	constructor(title, price, description, imageUrl) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	// Save the product to the database - Note: its not a static method because it needs to be called onto a product instance prodyct.save()... not Product.save()...
	save() {
		// const db = getDb();
		const productCollection = db().collection('products');
		return productCollection
			.insertOne(this)
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	}

	// Fetch all products from the database
	static fetchAll() {
		// const db = getDb();
		const productCollection = db().collection('products');
		return productCollection
			.find()
			.toArray() // Returns all products w/ no pagination - be cautious
			.then((products) => {
				console.log(products);
				return products;
			})
			.catch((err) => console.log(err));
	}
}

module.exports = Product;
