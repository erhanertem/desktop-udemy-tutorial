// > Basic Types
let apples: number = 5;
// apples = 'string';
let apples_ = 5;
let speed: string = 'fasting';
let hasID: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// > Buil-in JS objects
let now: Date = new Date();

// > Array
let colors: string[];
colors = ['1', ' 2', '3'];
let myNums: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// > Classes
class Car {}
let car: Car = new Car();

// > Object Literal
let point: { x: number; y: number } = {
	x: 10,
	y: 5,
};

// > Function
const logNumber_: Function = (i: number): void => {
	console.log(i);
};
const logNumber: (i: number) => void = (i) => {
	console.log(i);
};

// > When to use annotations
// -> #1 Function that returns the any type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// -> #2 When we declare a variable on one line and intialize it later
let words = ['red', 'blue', 'green'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// -> #3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
