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

	addToCart(product) {
		// TEMP - ADDING ONLY ONE CART ITEM AT A TIME - LATER WILL BE CHANGED TO MULTIPLE ITEM STORING
		// Check if the product already exists in the cart
		// const cartProduct = this.cart.items.findIndex((el) => el._id === product._id);
		// // If the product exists in the cart, increment the quantity
		// if (cartProduct >= 0) {
		// }
		// If the product does not exist in the cart, add the product to the cart
		// if (cartProduct === -1) {
		// Create the new cart item
		const updatedCart = { items: [{ productId: product._id, quantity: 1 }] };
		return db()
			.collection('users')
			.updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
		// }
	}

	static findUserById(userId) {
		const userCollection = db().collection('users');
		const objectId = ObjectId.createFromHexString(userId);
		return userCollection.findOne({ _id: objectId });
	}
}

module.exports = User;
