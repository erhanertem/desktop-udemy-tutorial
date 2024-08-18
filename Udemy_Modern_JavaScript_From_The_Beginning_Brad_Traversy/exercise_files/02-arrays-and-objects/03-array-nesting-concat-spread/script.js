let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// NESTING ARRAYS
// fruits.push(berries);
// x = fruits[3][1];

const allFruits = [fruits, berries];
x = allFruits[1][0];

// ADDING ARRAYS - VIA CONCAT
x = fruits.concat(berries);
// ADDING ARRAYS - VIA SPREAD OPERATOR
x = [...fruits, ...berries];

// FLATTEN ARRAYS
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// STATIC METHODS ON ARRAY OBJECTS
x = Array.isArray(fruits);
x = Array.isArray('Hello');

x = Array.from('12345');
const a = 1,
	b = 2,
	c = 3;
x = Array.of(a, b, c);

console.log(x);
