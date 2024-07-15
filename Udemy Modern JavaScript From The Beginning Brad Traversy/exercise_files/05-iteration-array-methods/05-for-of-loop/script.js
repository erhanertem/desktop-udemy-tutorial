// Loop over []
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Jenny' }, { name: 'Temmy' }];

// for (let i = 0; i < items.length; i++) {
// 	console.log(items[i]);
// }

for (const item of items) {
	console.log(item);
}
for (const user of users) {
	console.log(user.name);
}

// Loop over strings
const str = 'Hello World';
for (const letter of str) {
	console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'John');
map.set(20, 30);
console.log(map);
for (const [key, value] of map) {
	console.log(key, value);
}

// Loop over object entries - array of [[k,v]]
const object1 = {
	a: 'somestring',
	b: 42,
};
let x = Object.entries(object1);
console.log(x);
for (const [key, value] of Object.entries(object1)) {
	console.log(key, value);
}
