// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName, age);

var age = 30;
console.log(age);

//Re-assigning variables
age = 32;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
	score += 1;
}
console.log(score);

// const x = 100;
// x = 200;
// console.log(x);

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
	name: 'Brad',
};
person.name = 'John';
console.log(person);
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
	e = 'Ernie',
	f = 120;

console.log(a); //undefined
