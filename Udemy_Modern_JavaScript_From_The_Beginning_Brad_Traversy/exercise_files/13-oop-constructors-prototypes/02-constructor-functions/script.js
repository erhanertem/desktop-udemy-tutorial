// const now = new Date();

function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.area = function () {
		return this.height * this.width;
	};
}

const rect1 = new Rectangle('Reccy', 3, 4);

console.log(rect1.name);
console.log(rect1.area());
