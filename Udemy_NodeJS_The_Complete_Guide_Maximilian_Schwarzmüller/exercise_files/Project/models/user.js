const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
			message: 'Please enter a valid email address.',
		},
	},
	cart: {
		items: [
			{
				productId: {
					// type: Schema.Types.ObjectId, // Alt#1
					type: ObjectId, //Alt#2
					ref: 'Product',
					required: true,
				},
				quantity: { type: Number, required: true },
			},
		],
	},
});

// Custom Model Functions via methods property
userSchema.methods.addToCart = function (product) {
	// NOTE: 'this' signifies the document/product collection passed in
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
	this.cart = { items: updatedCartItems };
	return this.save();
};

// Create a user model based on userSchema template
module.exports = model('User', userSchema);

// const { ObjectId } = require('mongodb');
// const { db } = require('../util/nosqldatabase');
// class User {
// 	constructor(username, email, cart, id) {
// 		this.name = username;
// 		this.email = email;
// 		this.cart = cart; // { items: [] } is the presumed structure of the cart - embedded data to User model
// 		this._id = id;
// 	}
// 	saveUser() {
// 		let dbOperation;
// 		if (this._id) {
// 			dbOperation = db().collection('users').updateOne({ _id: this._id }, { $set: this });
// 		} else {
// 			dbOperation = db().collection('users').insertOne(this);
// 		}
// 		return dbOperation
// 			.then((result) => {
// 				console.log('User saved');
// 			})
// 			.catch((err) => console.log(err));
// 	}

// 	deleteItemFromCart(productId) {
// 		// Get the cart items
// 		const updatedCartItems = [...this.cart.items];
// 		// Find the product in the cart
// 		const productIndex = updatedCartItems.findIndex((item) => {
// 			console.log('🅰️', item);
// 			return item.productId.toString() === productId.toString();
// 		});
// 		//  Guard clause for non-existing cart item search
// 		if (productIndex === -1) {
// 			throw new Error('Product not found in cart');
// 		}
// 		// Access the product for updating its cart quantity
// 		const product = updatedCartItems[productIndex];
// 		// Decrement quantity of the item if there is more than 1
// 		if (product.quantity > 1) {
// 			updatedCartItems[productIndex].quantity -= 1;
// 		} else {
// 			// Remove the item from the cart if the quantity is 1
// 			updatedCartItems.splice(productIndex, 1);
// 		}
// 		// Update the cart with the new cart items
// 		const updatedCart = { items: updatedCartItems };
// 		// Update the current user's cart with the new one
// 		return db()
// 			.collection('users')
// 			.updateOne({ _id: this._id }, { $set: { cart: updatedCart } })
// 			.catch((err) => {
// 				console.error('Error while updating cart: ', err);
// 				throw err; // Propagate the error
// 			});
// 	}
// 	addOrder() {
// 		return this.getCart().then((products) => {
// 			// Create order data for submission
// 			const order = {
// 				items: products,
// 				user: {
// 					_id: this._id,
// 					name: this.name,
// 				},
// 			};
// 			return (
// 				db()
// 					.collection('orders')
// 					// Register the cart to the order collection
// 					.insertOne(order)
// 					// Reset the user cart value
// 					.then((result) => {
// 						return db()
// 							.collection('users')
// 							.updateOne({ _id: this._id }, { $set: { cart: { items: [] } } });
// 					})
// 			);
// 		});
// 	}
// 	getOrders() {
// 		return db().collection('orders').find({ 'user._id': this._id }).toArray();
// 	}
// 	static findUserById(userId) {
// 		const userCollection = db().collection('users');
// 		const objectId = ObjectId.createFromHexString(userId);
// 		return userCollection.findOne({ _id: objectId });
// 	}
// }
// module.exports = User;
