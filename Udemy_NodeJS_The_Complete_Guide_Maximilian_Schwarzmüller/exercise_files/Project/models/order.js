const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const orderSchema = new Schema({
	user: {
		email: { type: String, required: true },
		userId: { type: ObjectId, ref: 'User', required: true },
	},
	products: [
		{
			product: { type: Object, ref: 'Product', required: true },
			quantity: { type: Number, required: true },
		},
	],
	orderDate: { type: Date, default: Date.now },
});

module.exports = model('Order', orderSchema);
