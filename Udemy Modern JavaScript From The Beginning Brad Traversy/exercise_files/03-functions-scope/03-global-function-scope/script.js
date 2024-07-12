console.log(innerWidth);
console.log(window.innerWidth);
// window.alert('Hello');
// alert('Hello');

const x = 100;
console.log(x, 'in global');

function run() {
	console.log(window.innerHeight);
	console.log(x, 'in function');
}
run();

function add() {
	const y = 50;
	const x = 10;
	console.log(x + y);
}
add();
