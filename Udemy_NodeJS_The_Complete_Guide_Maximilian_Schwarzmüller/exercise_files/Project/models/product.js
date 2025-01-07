// const { ObjectId } = require('mongodb');
// const { db } = require('../util/nosqldatabase');
// // const { getDb } = require('../util/nosqldatabase');

// class Product {
// 	constructor(title, price, description, imageUrl, id, userId) {
// 		this.title = title;
// 		this.imageUrl = imageUrl;
// 		this.description = description;
// 		this.price = price;
// 		this._id = id ? ObjectId.createFromHexString(id) : null; // ObjectId.createFromHexString() throws error if id by default is given null. So, we need to check if id is null or not
// 		this.userId = userId; // Identify the product submitter
// 	}

// 	// Save the product to the database - Note: its not a static method because it needs to be called onto a product instance prodyct.save()... not Product.save()...
// 	saveProduct() {
// 		// const db = getDb();
// 		let dbOperation;
// 		if (this._id) {
// 			// Update the product with given Id
// 			dbOperation = db().collection('products').updateOne({ _id: this._id }, { $set: this });
// 		} else {
// 			// Create a new product
// 			dbOperation = db().collection('products').insertOne(this);
// 		}

// 		return dbOperation;
// 	}

// 	// Fetch all products from the database
// 	static fetchAllProducts() {
// 		// const db = getDb();
// 		const productCollection = db().collection('products');
// 		return productCollection.find().toArray(); // Returns all products w/ no pagination - be cautious
// 	}

// 	static findProductById(productId) {
// 		// const db = getDb();
// 		const productCollection = db().collection('products');
// 		// Convert productId to ObjectId - The _id field in MongoDB is not a plain string; it is a special type called ObjectId. So, we need to convert the string ID to an ObjectId before we can use it in a query.
// 		const objectId = ObjectId.createFromHexString(productId);

// 		return productCollection.findOne({ _id: objectId });
// 	}

// 	static deleteById(productId) {
// 		// const db = getDb();
// 		const productCollection = db().collection('products');
// 		const objectId = ObjectId.createFromHexString(productId);
// 		console.log('objectId :', objectId);

// 		return productCollection.deleteOne({ _id: objectId });
// 	}
// }

// module.exports = Product;
