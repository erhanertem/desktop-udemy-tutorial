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
	// Update the cart with the new cart items
	this.cart = { items: updatedCartItems };
	// Save the user instance
	return this.save();
};

userSchema.methods.deleteCart = function () {
	this.cart = { items: [] };
	return this.save();
};

userSchema.methods.deleteItemFromCart = function (productId) {
	// Get the cart items
	const updatedCartItems = [...this.cart.items];
	// Find the product in the cart
	const productIndex = updatedCartItems.findIndex((item) => {
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
	this.cart = { items: updatedCartItems };
	// Save the user instance
	return this.save();
};

// Create a user model based on userSchema template
module.exports = model('User', userSchema);

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
