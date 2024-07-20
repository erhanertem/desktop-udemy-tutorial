const sym1 = Symbol();
const sym2 = Symbol('foo');
// const sym3 = Symbol('bar');
// console.log(sym1, sym2, sym3);
// console.log(typeof sym1);
// console.log(sym1.description);
// console.log(Symbol('sym') === Symbol('sym'));

// ACCESSING SYMBOLS
const idSymbol = Symbol('id');
const user = {
	// id: 1,
	[idSymbol]: 1, // Symbols are guaranteed to be unique
	name: 'John Doe',
	email: 'john@gmail.com',
};
// console.log(user[idSymbol]);
// ACCESSING SYMBOLS
const user2 = {
	// id: 1,
	[Symbol('id')]: 10, // Symbols are guaranteed to be unique
	name: 'John Doe',
	email: 'john@gmail.com',
};
// Retrieve the symbol property
const idSymbol2 = Object.getOwnPropertySymbols(user2);
// console.log(user2[idSymbol2[0]]);

// Symbols are not enumerable
// console.log(Object.keys(user));
// console.log(Object.values(user));

// Symbol.for
const sym3 = Symbol('bar');

const sym4 = Symbol.for('foo');
const sym5 = Symbol.for('foo');
console.log(sym4 === sym5);
console.log(Symbol.keyFor(sym3)); //undefined
console.log(Symbol.keyFor(sym4)); // 'foo'
