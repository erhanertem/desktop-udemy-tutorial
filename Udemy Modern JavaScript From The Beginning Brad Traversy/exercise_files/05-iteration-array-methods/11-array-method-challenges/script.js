// Challenge 1

const people = [
	{
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@gmail.com',
		phone: '111-111-1111',
		age: 30,
	},
	{
		firstName: 'Jane',
		lastName: 'Poe',
		email: 'jane@gmail.com',
		phone: '222-222-2222',
		age: 25,
	},
	{
		firstName: 'Bob',
		lastName: 'Foe',
		email: 'bob@gmail.com',
		phone: '333-333-3333',
		age: 45,
	},
	{
		firstName: 'Sara',
		lastName: 'Soe',
		email: 'Sara@gmail.com',
		phone: '444-444-4444',
		age: 19,
	},
	{
		firstName: 'Jose',
		lastName: 'Koe',
		email: 'jose@gmail.com',
		phone: '555-555-5555',
		age: 23,
	},
];

const youngPeople = people
	.filter((person) => person.age <= 25)
	.map((person) => ({
		firstName: person.firstName,
		lastName: person.lastName,
		email: person.email,
	}));
console.log(youngPeople);

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers.reduce((acc, curr) => {
	if (curr > 0) {
		return (acc += curr);
	} else return acc;
}, 0);
const positiveSum2 = numbers.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum);
console.log(positiveSum2);

// Challange 3
const words = ['coder', 'programmer', 'developer'];

const capitilizedWords = words.map((name) => {
	return name[0].toUpperCase() + name.slice(1);
});

console.log(capitilizedWords);
