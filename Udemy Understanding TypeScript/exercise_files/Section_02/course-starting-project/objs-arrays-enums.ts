// // > OBJECTS
// // -> Generic object type declaration
// const person: object = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// };
// const person: {} = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// };
// -> Custom object type declaration
// const person: { name: string; age: number } = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// };
// // console.log(person.nickname);
// console.log(person.name);
// // > ARRAYS
// // -> Inferred array type
// const person = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// 	hobbies: ['Sports', 'Cooking'],
// };
// console.log(person.name);
// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// 	// console.log(hobby.map());
// }
// // -> Explicitly set array type
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
// // -> Mixed type array - not favaroble!!
// let favoriteActivities__: any[];
// favoriteActivities__ = ['Sports', 1];
// // > TUPLES
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author'],
// };
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
// person.role.push('admin');

// const rgbColor: [number, number, number] = [255, 0, 12];
// const rgbColor1: [number, number, number] = ['Steve, 0, 12];
// const rgbColor2: [number, number, number] = [255, 0, 12, 1];
// const carSpecs: [number, number] = [400, 3354];
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// type Drink = [string, boolean, number];
// const pepsi_: Drink = ['brown', true, 40];

// // > ENUMS
// // -> Why enums
// const person = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: 2,
// };
// if (person.role === 'READ-ONLY-USER') {
// 	// ....
// }
// // -> With vanilla JS
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// const person = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: ADMIN,
// };
// // -> with TS Enum
// enum Role {
// 	ADMIN = 4,
// 	READ_ONLY = 100,
// 	AUTHOR = 'Auth',
// }
// const person = {
// 	name: 'Erhan ERTEM',
// 	age: 46,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: Role.ADMIN,
// };
