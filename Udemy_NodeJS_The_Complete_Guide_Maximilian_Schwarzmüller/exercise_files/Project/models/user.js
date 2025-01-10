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

// Create a user model based on userSchema template
module.exports = model('User', userSchema);
