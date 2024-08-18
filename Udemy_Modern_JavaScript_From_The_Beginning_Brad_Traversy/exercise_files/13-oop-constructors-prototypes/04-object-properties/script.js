function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.area = function () {
		return this.width * this.height;
	};
}

const rect1 = new Rectangle('Rect1', 20, 20);
const rect2 = new Rectangle('Rect2', 10, 30);

console.log(rect1.name, rect2.name);
console.log(rect1['width']);

// Add Property
rect1.color = 'red';
rect2.perimeter = function () {
	return 2 * (this.width + this.height);
};

console.log(rect2.perimeter());

// Delete Property
delete rect2.perimeter;

// Check Property
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

// Get Keys
console.log('Object.keys(rect1) :', Object.keys(rect1));
// Get Values
console.log('Object.values(rect1) :', Object.values(rect1));
// Get Entries
console.log('Object.entries(rect1) :', Object.entries(rect1));

console.log(rect1, rect2);
