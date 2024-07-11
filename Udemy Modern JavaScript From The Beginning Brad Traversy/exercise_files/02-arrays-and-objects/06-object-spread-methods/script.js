let x;
// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
	address: {
		coords: {
			lat: 12.99292,
			lng: -71.9292,
		},
	},
};

x = person.address.coords.lng;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 };
const obj5 = Object.assign({}, obj1, obj2);

const todos = [
	{ id: 1, name: 'Buy Milk' },
	{ id: 2, name: 'Pick kids' },
	{ id: 3, name: 'Take out trash' },
];

x = obj5;
x = todos[0].name;

x = Object.keys(todo);
x = Object.values(todo);
x = Object.keys(todo).length;
x = Object.entries(todo);
x = todo.hasOwnProperty('age');
x = todo.hasOwnProperty('id');

console.log(x);
