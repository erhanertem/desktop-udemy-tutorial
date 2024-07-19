function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
}

Rectangle.prototype.area = function () {
	return this.width * this.height;
};
Rectangle.prototype.isSquare = function () {
	return this.width === this.height;
};
Rectangle.prototype.assignNewName = function (newName) {
	return this.width === newName;
};

const rect = new Rectangle('Rect', 10, 10);

console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());
