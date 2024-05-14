// // > INTERSECTION TYPES
// type Admin = {
// 	name: string;
// 	privileges: string[];
// };
// type Employee = {
// 	name: string;
// 	startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;

// interface Admin_ {
// 	name: string;
// 	privileges: string[];
// }
// interface Employee_ {
// 	name: string;
// 	startDate: Date;
// }
// interface ElevatedEmployee_ extends Employee, Admin {}

// const e1: ElevatedEmployee = {
// 	name: 'Erhan',
// 	privileges: ['create-server'],
// 	startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric; // That's number only resolution - Gets the intersection of both unions.

// // > TYPE GUARDS
// // -> Typeof check
// type Combinable = string | number;
// function add(a: Combinable, b: Combinable) {
// 	//   TYPE GUARD
// 	if (typeof a === 'string' || typeof b === 'string')
// 		return a.toString() + b.toString();
// 	return a + b;
// }

// // -> in keyword Check
// type Admin = {
// 	name: string;
// 	privileges: string[];
// };
// type Employee = {
// 	name: string;
// 	startDate: Date;
// };
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log(`Name: ${emp.name}`);
// 	// THE IN CHECK
// 	if ('privileges' in emp) {
// 		console.log(`Priveleges: ${emp.privileges}`);
// 	}
// }
// const e1: UnknownEmployee = {
// 	name: 'Erhan',
// 	privileges: ['create-server'],
// 	startDate: new Date(),
// };
// printEmployeeInformation(e1);
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// // -> instanceof Check
// class Car {
// 	drive() {
// 		console.log('Driving...');
// 	}
// }
// class Truck {
// 	drive() {
// 		console.log('Driving a truck...');
// 	}
// 	loadCargo(amount: number) {
// 		console.log(`Loading cargo... ${amount}`);
// 	}
// }
// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();
// 	// if ('loadCargo' in vehicle) {
// 	if (vehicle instanceof Truck) {
// 		vehicle.loadCargo(1000);
// 	}
// }

// useVehicle(v1);
// useVehicle(v2);

// function printFullDate(date: string | Date) {
// 	if (date instanceof Date) {
// 		console.log(date.toUTCString);
// 	} else {
// 		console.log(new Date(date).toUTCString());
// 	}
// }

// // -> Discriminated Unions

// interface Bird {
// 	type: 'bird';
// 	flyingSpeed: number;
// }
// interface Horse {
// 	type: 'horse';
// 	runningSpeed: number;
// }
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case 'bird':
// 			speed = animal.flyingSpeed;
// 			break;
// 		case 'horse':
// 			speed = animal.runningSpeed;
// 			break;
// 		default:
// 			console.log(
// 				'No such type definition is available. Please check your type'
// 			);
// 			const exhaustivecheck: never = animal;
// 			return exhaustivecheck;
// 	}
// 	console.log(
// 		`${
// 			animal.type.charAt(0).toUpperCase() + animal.type.slice(1)
// 		} moving with speed: ${speed}`
// 	);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // > Type Casting
// // Not React Friendly Type Casting
// const userInputElement = <HTMLInputElement>(
// 	document.getElementById('user-input')!
// );
// userInputElement.value = 'Hi there!';
// // React Friendly Type Casting
// const userInputElement_ = document.getElementById(
// 	'user-input'
// )! as HTMLInputElement;
// userInputElement_.value = 'Hi there!';
// // Alternate to above code:
// const userInputElement__ = document.getElementById('user-input');
// if (userInputElement__) {
// 	(userInputElement__ as HTMLInputElement).value = 'Hi there!';
// }

// // > Index Properties

// interface ErrorContainer {
// 	// {email:'Not a valid email', username:'Must start with A'}
// 	[prop: string]: string;
// 	// Every object entered into this object have string type keys(properties)  and string type value pairs
// }

// const errorBag: ErrorContainer = {
// 	email: 'Not a valid email',
// 	1: '1', // Numeric property entry is regarded as string!!
// };

// // > Function Overloads
// type Combinable = string | number;
// // -> Function overloading - Combination permutations
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// // -> Function decleration
// function add(a: Combinable, b: Combinable) {
// 	if (typeof a === 'string' || typeof b === 'string') {
// 		return a.toString() + b.toString();
// 	}
// 	return a + b;
// }
// const result = add(1, 5);
// console.log('result :', result);
// const result_ = add('Marx', 'Luther');
// console.log('result_ :', result_);
// const result__ = add('Marx', 1);
// console.log('result__ :', result__);

// // > Optional Chaining
// type Job = {
// 	title: string;
// 	description: string;
// };

// type UserData = {
// 	id: string;
// 	name: string;
// 	job?: Job;
// };

// const fetchedUserData: UserData = {
// 	id: 'u1',
// 	name: 'Max',
// 	// job: { title: 'CEO', description: 'My own company' },
// };
// console.log(fetchedUserData?.job?.title);

// // > Nullish Coalescing
// const userInput = '';
// const storedData = userInput || 'DEFAULT VALUE';
// console.log(storedData);

// const userInput = '';
// const storedData = userInput ?? 'DEFAULT VALUE';
// console.log(storedData);
