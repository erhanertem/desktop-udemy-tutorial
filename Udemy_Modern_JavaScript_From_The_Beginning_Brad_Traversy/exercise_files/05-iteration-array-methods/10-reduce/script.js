const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur, index) => acc + cur * (index + 1), 0);
console.log(sum);

const cart = [
	{ id: 1, name: 'Product 1', price: 130 },
	{ id: 2, name: 'Product 2', price: 150 },
	{ id: 3, name: 'Product 3', price: 160 },
];
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);
