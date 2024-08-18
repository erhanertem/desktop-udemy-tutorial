let x;
const person = {
	name: 'Joe Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main St',
		city: 'Boston',
		state: 'MA',
	},
	hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;
person.hasChildren = true;

person.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
};
person.greet();

x = person;

const person2 = {
	'first name': 'Brad',
	'last name': 'Traversy',
};
x = person2['first name'];

console.log(x);
