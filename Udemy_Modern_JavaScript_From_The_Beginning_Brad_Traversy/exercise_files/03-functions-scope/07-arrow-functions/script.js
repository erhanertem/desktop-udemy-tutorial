function add(a, b) {
	return a + b;
}

const add2 = (a, b) => {
	return a + b;
};

const add3 = (a, b) => a + b;

const createObj = () => {
	return { id: 2, name: 'brad' };
};
const createObj2 = () => ({ id: 2, name: 'brad' });

console.log(add3(1, 2));
console.log(createObj());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (n) {
	console.log(n);
});
numbers.forEach((n) => console.log(n));
