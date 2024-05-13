// // > INTERFACE @ OBJECTS
// // interface Person {
// // 	name: string = 'Max'; // NOTE No initializers
// // 	age: number;

// // 	greet?(phrase: string): void;
// // }
// interface Person {
// 	name: string;
// 	age: number;

// 	greet?(phrase: string): void;
// }

// let user1: Person;

// user1 = {
// 	name: 'Max',
// 	age: 15,
// 	greet(phrase) {
// 		console.log(phrase + ' ' + this.name);
// 	},
// };
// user1.greet!('Hi there!');

// // > INTERFACE @ CLASSES
// interface Named {
// 	readonly name: string;
// }

// // interface Greetable {
// // interface Greetable extends Named, AnotherInterface {
// interface Greetable extends Named {
// 	// readonly name: string;
// 	greet(phrase: string): void;
// }

// // interface Greetable {
// // 	age: number;
// // }
// // interface AnotherInterface {
// // 	age: number;
// // }

// // class Person implements Greetable, AnotherInterface {
// // class Person implements Greetable, Named {
// class Person implements Greetable {
// 	readonly name: string;
// 	age = 30;

// 	constructor(n: string) {
// 		this.name = n;
// 	}
// 	greet(phrase: string) {
// 		console.log(`${phrase} ${this.name}`);
// 	}
// }
// let user1: Person;
// user1 = new Person('Max');
// // user1.name = 'Mathew';
// user1.greet('Hi there - I am ');

// // > INTERFACE @ FUNCTIONS
// // // Type Alias for a function
// // type AddFn = (a: number, b: number) => number;
// // Interface for a function
// interface AddFn {
// 	(a: number, b: number): number;
// }
// let add: AddFn;
// add = (n1, n2) => {
// 	return n1 + n2;
// };

// > OPTIONAL PARAMETERS & PROPERTIES
interface Named {
	readonly name?: string;
	outputName?: string;
}
interface Greetable extends Named {
	greet(phase: string): void;
}

class Person implements Greetable {
	readonly name?: string;
	age = 30;
	constructor(n?: string) {
		if (n) {
			this.name = n;
		}
	}
	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name);
		} else {
			console.log('Hi!');
		}
	}
}

let user1: Person;
// user1 = new Person();
user1 = new Person('Travis');
user1.greet('Hello  Molly');
