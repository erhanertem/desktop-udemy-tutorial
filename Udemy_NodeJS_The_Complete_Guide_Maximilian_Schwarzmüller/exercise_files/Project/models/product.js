// // Alt#1
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// module.exports = mongoose.model('Product');

// Alt#2
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // 'User' is the name of the model we created in user.js file. ref: 'User' refers to the User model
});

module.exports = model('Product', productSchema); // Export the model with a name called 'Product' w/ a schema design as established by productSchema
