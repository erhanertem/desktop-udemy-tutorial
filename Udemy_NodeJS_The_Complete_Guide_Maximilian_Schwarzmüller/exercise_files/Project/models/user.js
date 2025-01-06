const { ObjectId } = require('mongodb');
const { db } = require('../util/nosqldatabase');

class User {
	constructor(username, email, cart, id) {
		this.name = username;
		this.email = email;
		this.cart = cart; // { items: [] } is the presumed structure of the cart - embedded data to User model
		this._id = id;
	}

	saveUser() {
		let dbOperation;
		if (this._id) {
			dbOperation = db().collection('users').updateOne({ _id: this._id }, { $set: this });
		} else {
			dbOperation = db().collection('users').insertOne(this);
		}
		return dbOperation
			.then((result) => {
				console.log('User saved');
			})
			.catch((err) => console.log(err));
	}

	getCart() {
		const productIds = this.cart.items.map((item) => item.productId);
		const cart = db()
			.collection('products')
			.find({ _id: { $in: productIds } })
			.toArray()
			.then((products) =>
				products.map((product) => {
					return {
						...product,
						quantity: this.cart.items.find((item) => item.productId.toString() === product._id.toString()).quantity,
					};
				})
			);
		return cart;
	}

	addToCart(product) {
		// TEMP - ADDING ONLY ONE CART ITEM AT A TIME - LATER WILL BE CHANGED TO MULTIPLE ITEM STORING
		// Check if the product already exists in the cart
		// const cartProductIndex = this.cart.items.findIndex((el) => el.productId == product._id);
		const cartProductIndex = this.cart.items.findIndex((el) => el.productId.toString() === product._id.toString());

		let newQuantity = 1;
		const updatedCartItems = [...this.cart.items];
		// If the product exists in the cart, increment the quantity
		if (cartProductIndex >= 0) {
			newQuantity = this.cart.items[cartProductIndex].quantity + 1;
			updatedCartItems[cartProductIndex].quantity = newQuantity;
		} else {
			// If the product does not exist in the cart, add it
			updatedCartItems.push({ productId: product._id, quantity: newQuantity });
		}

		const updatedCart = { items: updatedCartItems };
		return db()
			.collection('users')
			.updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
	}

	static findUserById(userId) {
		const userCollection = db().collection('users');
		const objectId = ObjectId.createFromHexString(userId);
		return userCollection.findOne({ _id: objectId });
	}
}

module.exports = User;
