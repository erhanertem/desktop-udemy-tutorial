const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
	firstName,
	lastName,
	age,
};

// console.log(person.age);

// Destructuring
const todo = {
	id: 1,
	title: 'Take out trash',
	user: {
		name: 'John',
	},
};

const {
	id: todoId,
	title,
	user: { name },
} = todo;

console.log(todoId);

// Destructure Arrays
const numbers = [23, 57, 45, 21];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
