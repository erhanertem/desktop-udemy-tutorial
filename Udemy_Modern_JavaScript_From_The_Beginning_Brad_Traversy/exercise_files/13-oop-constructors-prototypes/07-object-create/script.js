const rectanlePrototypes = {
	area() {
		return this.width * this.height;
	},
	perimeter() {
		return (this.width + this.height) * 2;
	},
	isSquare() {
		return this.width === this.height;
	},
};

function createRectangle(height, width) {
	return Object.create(rectanlePrototypes, {
		height: { value: height },
		width: { value: width },
	});
}

const rect = createRectangle(10, 10);
console.log(rect);
console.log(rect.area());
