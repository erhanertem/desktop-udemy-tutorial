import 'reflect-metadata';

// const plane = {
// 	color: 'red',
// };

// // > Create a metadata entry onto an object
// Reflect.defineMetadata('note', 'hi there', plane); // Create a metadata with key named 'note' and value as 'hi there' inside 'plane' object
// Reflect.defineMetadata('height', 10, plane);
// // console.log(plane);
// // > Retrieve a metadata entry from an object
// const note = Reflect.getMetadata('note', plane); // Retrieve a metadata w/ key 'note' from 'plane' object.
// const height = Reflect.getMetadata('height', plane);
// // console.log(note);
// // console.log(height);

// // > Create a metadata entry onto an object property
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// Reflect.defineMetadata('height', 10, plane, 'color');
// console.log(plane);
// // > Retrieve a metadata entry from an object property
// const note = Reflect.getMetadata('note', plane, 'color'); // Retrieve a metadata w/ key 'note' from 'plane' object.
// const height = Reflect.getMetadata('height', plane, 'color');
// console.log(note);
// console.log(height);

@PrintMetadata
class Plane {
	color: string = 'red';

	@MarkFunctionFactory('Hi there')
	fly(): void {
		console.log('vrrrrrrrrrr');
	}
}

// // > Standard Decorator Version
// function MarkFunction(target: Plane, key: string) {
// 	Reflect.defineMetadata('secret', 123, target, key);
// }
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

// > Factory Decorator Version
function MarkFunctionFactory(secretInfo: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata('secret', secretInfo, target, key);
	};
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

// typeof Plane targets the class constructor
function PrintMetadata(target: typeof Plane) {
	for (let key in target.prototype) {
		const secret = Reflect.getMetadata('secret', target.prototype, key);
		console.log(secret);
	}
}
