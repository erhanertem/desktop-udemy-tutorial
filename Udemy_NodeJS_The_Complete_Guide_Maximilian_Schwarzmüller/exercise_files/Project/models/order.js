const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const orderSchema = new Schema({
	userId: { type: ObjectId, ref: 'User', required: true },
	products: [
		{
			product: { type: Object, ref: 'Product', required: true },
			quantity: { type: Number, required: true },
		},
	],
	orderDate: { type: Date, default: Date.now },
});

module.exports = model('Order', orderSchema);
