// Parent Class
class Shape {
	constructor(name) {
		this.name = name;
	}

	logName() {
		console.log('Shape name:' + this.name);
	}
}

// Sub Class
class Rectangle extends Shape {
	constructor(name, width, height) {
		super(name);
		this.width = width;
		this.height = height;
	}
}
class Circle extends Shape {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}
	logName() {
		console.log('Circle name: ' + this.name);
	} //Polymorphism - overriding the parent element function
}

const rect = new Rectangle('Rect 1', 20, 20);
const circ = new Circle('Circ 1', 10);
console.log(rect);
rect.logName();
circ.logName();
