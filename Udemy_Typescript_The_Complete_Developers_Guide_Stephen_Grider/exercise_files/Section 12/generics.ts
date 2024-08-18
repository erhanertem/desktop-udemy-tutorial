// > Generics @ classes
class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}
new ArrayOfAnything<string>(['a', 'b', 'c']); //Annotated generics
const arr = new ArrayOfAnything(['a', 'b', 'c']); //TS inference

// > Generics @ functions
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything<string>(['a', 'b', 'c']); //Annotated generics
printAnything(['a', 'b', 'c']); //TS inference

// > Generic Contraints
class Car {
	print() {
		console.log("I'm a car");
	}
}
class House {
	print() {
		console.log("I'm a house");
	}
}

interface Printable {
	print(): void;
}
function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars([new House(), new Car()]);
