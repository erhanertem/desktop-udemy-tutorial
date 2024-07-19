function Shape(name) {
	this.name = name;
}
// Create a prototype for Shape constructor function
Shape.prototype.logName = function () {
	console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, height, width) {
	Shape.call(this, name);

	this.height = height;
	this.width = width;
}
// Inherit shape prototype to Rectangle constructor functions
Rectangle.prototype = Object.create(Shape.prototype);
// Set Prototype constructor point to correct object after protypal inheritance
Rectangle.prototype.constructor = Rectangle;

function Circle(name, radius) {
	Shape.call(this, name);

	this.radius = radius;
}

const rect = new Rectangle('Rectangle 1', 20, 30);
const circ = new Circle('Circle 1', 5, 30);
console.log(rect);
console.log(circ);
// rect.logName();
