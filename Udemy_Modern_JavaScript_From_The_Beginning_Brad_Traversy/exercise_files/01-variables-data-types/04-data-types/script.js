// Primitive Types - stored @ Stack
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference Types - stored @ Heap, accessed by ref
// arrays, functions, objects

// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.98;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
let score;
score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 90071999993983983983n;

// Reference Types
const numbers = [1, 2, 3, 4, 5, 6];
const person = { name: 'Brad' };

function sayHello() {
	console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);
