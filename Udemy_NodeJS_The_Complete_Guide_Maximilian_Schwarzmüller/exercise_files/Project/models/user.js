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

	deleteItemFromCart(productId) {
		// Get the cart items
		const updatedCartItems = [...this.cart.items];
		// Find the product in the cart
		const productIndex = updatedCartItems.findIndex((item) => {
			console.log('🅰️', item);
			return item.productId.toString() === productId.toString();
		});
		//  Guard clause for non-existing cart item search
		if (productIndex === -1) {
			throw new Error('Product not found in cart');
		}
		// Access the product for updating its cart quantity
		const product = updatedCartItems[productIndex];
		// Decrement quantity of the item if there is more than 1
		if (product.quantity > 1) {
			updatedCartItems[productIndex].quantity -= 1;
		} else {
			// Remove the item from the cart if the quantity is 1
			updatedCartItems.splice(productIndex, 1);
		}

		// Update the cart with the new cart items
		const updatedCart = { items: updatedCartItems };
		// Update the current user's cart with the new one
		return db()
			.collection('users')
			.updateOne({ _id: this._id }, { $set: { cart: updatedCart } })
			.catch((err) => {
				console.error('Error while updating cart: ', err);
				throw err; // Propagate the error
			});
	}

	addOrder() {
		return this.getCart().then((products) => {
			// Create order data for submission
			const order = {
				items: products,
				user: {
					_id: this._id,
					name: this.name,
				},
			};

			return (
				db()
					.collection('orders')
					// Register the cart to the order collection
					.insertOne(order)
					// Reset the user cart value
					.then((result) => {
						return db()
							.collection('users')
							.updateOne({ _id: this._id }, { $set: { cart: { items: [] } } });
					})
			);
		});
	}

	getOrders() {
		return db().collection('orders').find({ 'user._id': this._id }).toArray();
	}

	static findUserById(userId) {
		const userCollection = db().collection('users');
		const objectId = ObjectId.createFromHexString(userId);
		return userCollection.findOne({ _id: objectId });
	}
}

module.exports = User;
