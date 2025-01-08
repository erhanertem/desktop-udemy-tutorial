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
	// TEMP - DISABLED
	// userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // 'User' is the name of the model we created in user.js file. ref: 'User' refers to the User model
});

module.exports = model('Product', productSchema); // 'Product' name for the product schema is internal to mongoose for handling DB and can be arbitrarily called via different name when being imported. 'Product' translates to products collection name in mongoDB which is taken care of behind the scene via mongoose.
