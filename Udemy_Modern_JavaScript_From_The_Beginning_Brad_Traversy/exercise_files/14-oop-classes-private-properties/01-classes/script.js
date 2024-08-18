class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
	}

	area() {
		return this.height * this.width;
	}
	perimeter() {
		return 2 * (this.height + this.width);
	}
	isSquare() {
		return this.height === this.width;
	}
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(square.area());
