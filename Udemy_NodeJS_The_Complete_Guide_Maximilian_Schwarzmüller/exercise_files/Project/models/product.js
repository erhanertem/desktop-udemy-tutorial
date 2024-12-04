const products = [];

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		// Save product to database
		products.push(this);
		console.log('Product saved: ', this.title);
	}
	static fetchAll() {
		// Fetch all products from database
		return products;
	}
};
