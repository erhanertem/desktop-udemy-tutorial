// // > BUILT-IN GENERICS
// // -> Array Generic Type
// // This is an Array main type which would yield string type
// const names1: Array<string> = [];
// // This is an Array main type which would yield string or number type
// const names2: Array<string | number> = [];
// // const names: string[] = ['Max', 'Emmanuel'];
// // -> Promise Generic Type
// // This is a Promise main type which would yield string type
// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is done!');
// 	}, 2000);
// });
// promise.then((data) => {
// 	data.split(' ');
// });

// // -> Generic Functions
// // #1 solution -> Type casting
// function merge(objA: object, objB: object) {
// 	return Object.assign(objA, objB);
// }
// // const mergedObj = merge({ name: 'Max' }, { age: 23 });
// // mergedObj.name; // Problem accessing the property in TS
// const mergedObj = merge({ name: 'Max' }, { age: 23 }) as {
//    name: string;
// 	age: number;
// };
// mergedObj.name;
// #2 solution -> Custom Generics
// // NOTE : for this to work set "strictNullChecks": false
// function merge<T, U>(objA: T, objB: U) {
// 	return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: 'Max' }, { age: 23 });
// console.log('mergedObj.name :', mergedObj.name);

// // -> Constraints @ Custom Generics
// function merge<T extends object, U extends object>(objA: T, objB: U) {
// 	return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: 'Max' }, { age: 23 });
// console.log('mergedObj.name :', mergedObj.name);

// interface Lengthy {
// 	length: number;
// }
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
// 	let descriptionText = 'Got no value.';
// 	if (element.length === 1) {
// 		descriptionText = 'Got 1 elements';
// 	} else if (element.length > 1) {
// 		descriptionText = `Got ${element.length} elements`;
// 	}
// 	return [element, descriptionText];
// }
// console.log(countAndDescribe('Hi there'));
// console.log(countAndDescribe(['Hi there', 'My Dear']));

// // -> keyof Constraint
// function extractAndConvert<T extends object, U extends keyof T>(
// 	obj: T,
// 	key: U
// ) {
// 	return 'Value' + obj[key];
// }
// extractAndConvert({ name: 'Max' }, 'name');

// // -> Custom Generic Types @ Classes
// class DataStorage<T extends string | number | object> {
// 	private data: T[] = [];

// 	addItem(item: T) {
// 		this.data.push(item);
// 	}

// 	removeItem(item: T) {
// 		// GUARD CLAUSE
// 		if (this.data.indexOf(item) === -1) {
// 			return;
// 		}
// 		// CORE LOGIC
// 		this.data.splice(this.data.indexOf(item), 1);
// 	}

// 	getItems() {
// 		return [...this.data];
// 	}
// }

// // const textStorage = new DataStorage<string>();
// // textStorage.addItem('Max');
// // textStorage.addItem('Manu');
// // textStorage.removeItem('Max');
// // console.log('textStorage :', textStorage);

// // const numberStorage = new DataStorage<number>();
// // numberStorage.addItem(1);
// // numberStorage.addItem(2);
// // numberStorage.removeItem(1);
// // console.log('textStorage :', numberStorage);

// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// const manuObj = { name: 'Manu' };
// objectStorage.addItem(maxObj);
// objectStorage.addItem(manuObj);
// objectStorage.removeItem(maxObj);
// console.log(objectStorage.getItems());

// // -> GENERIC UTILITY TYPES
// // -> Partial generic utility type
// interface CourseGoal {
// 	title: string;
// 	description: string;
// 	completeUntil: Date;
// }

// function createCourseGoal(
// 	title: string,
// 	description: string,
// 	date: Date
// ): CourseGoal {
// 	let courseGoal: Partial<CourseGoal> = {};
// 	courseGoal.title = title;
// 	courseGoal.description = description;
// 	courseGoal.completeUntil = date;
// 	return courseGoal as CourseGoal;
// }
// // -> Rreadonly generic utility type
// const names: Readonly<string[]> = ['Max', 'Manu'];
// names.push('Anna');
// names.pop('Max');

// // -> Generic Types vs Union Types
// class DataStorage {
// 	private data: string[] | number[] | object[] = [];

// 	addItem(item: string | number | object) {
// 		this.data.push(item);
// 	}

// 	removeItem(item: string | number | object) {
// 		// GUARD CLAUSE
// 		if (this.data.indexOf(item) === -1) {
// 			return;
// 		}
// 		// CORE LOGIC
// 		this.data.splice(this.data.indexOf(item), 1);
// 	}

// 	getItems() {
// 		return [...this.data];
// 	}
// }
