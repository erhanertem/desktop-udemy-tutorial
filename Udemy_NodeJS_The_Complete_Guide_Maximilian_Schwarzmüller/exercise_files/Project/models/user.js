const { ObjectId } = require('mongodb');
const { db } = require('../util/nosqldatabase');

class User {
	constructor(username, email, cart) {
		this.name = username;
		this.email = email;
		this.cart = cart; // { items: [] } is the presumed structure of the cart
		this._id = id ? ObjectId.createFromHexString(id) : null;
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

	static findUserById(userId) {
		const userCollection = db().collection('users');
		const objectId = ObjectId.createFromHexString(userId);
		return userCollection
			.findOne({ _id: objectId })
			.then((user) => {
				if (user) {
					console.log('Found user');
					return user;
				} else {
					throw new Error('User not found');
				}
			})
			.catch((err) => console.log(err));
	}

	addToUserCart(product) {
		const cartProduct = this.cart.items.find();
	}
}

module.exports = User;
