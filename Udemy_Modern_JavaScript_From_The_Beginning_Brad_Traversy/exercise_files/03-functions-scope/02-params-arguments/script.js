// Default Params
function registerUser(user = 'Default User') {
	return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
	return numbers;
}
console.log(sum(1, 2, 3));

// Object as params
function loginUser(user) {
	return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
	id: 1,
	name: 'John',
};

console.log(loginUser(user));

// Arrays as params
function getRandom(...arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);

	const item = arr[randomIndex];
	return console.log(item);
}
getRandom(1, 2, 3, 4, 5, 6, 7, 889, 1, 100);
