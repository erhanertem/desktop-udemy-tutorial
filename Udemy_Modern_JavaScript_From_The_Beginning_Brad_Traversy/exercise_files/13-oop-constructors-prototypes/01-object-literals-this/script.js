const rectangle = {
	name: 'Rect 1',
	width: 10,
	height: 10,
	area() {
		return true;
	},
};

console.log(Object.keys(rectangle));
console.log('rectangle.area() :', rectangle.area());
console.log(this);
