// // > DECORATORS
// // --> CLASS DECORATORS
// // -> PLAIN DECORATOR FUNCTION
// function Logger(constructor: Function) {
// 	console.log('Logging...');
// 	console.log(constructor);
// }
// // function Logger(name: string) {
// // 	console.log('Logging...');
// // 	console.log(name);
// // }

// @Logger
// class Person {
// 	name = 'Max';

// 	constructor() {
// 		console.log('Creating person object...');
// 	}
// }

// const person = new Person();
// console.log(person);

// // -> DECORATOR FACTORY FUNCTION

// function Logger(logString: string) {
// 	return function (constructor: Function) {
// 		console.log(logString);
// 		console.log(constructor);
// 	};
// }

// function WithTemplate(template: string, hookId: string) {
// 	return function <T extends { new (...args: any[]): { name: string } }>(
// 		originalConstructor: T
// 	) {
// 		return class extends originalConstructor {
// 			constructor(..._args: any[]) {
// 				super();
// 				console.log('Rendering Template');
// 				const hookEl = document.getElementById(hookId);
// 				if (hookEl) {
// 					hookEl.innerHTML = template;
// 					hookEl.querySelector('h1')!.textContent = this.name;
// 				}
// 			}
// 		};
// 	};
// }

// @Logger('LOGGING-PERSON')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
// 	name = 'Max';

// 	constructor() {
// 		console.log('Creating person object...');
// 	}
// }

// const person = new Person();
// console.log(person);

// // // --> CLASS PROPERTY DECORATORS

// function Log(target: any, propertyName: string | Symbol) {
// 	console.log('Property decorator!');
// 	console.log(target);
// 	console.log(propertyName);
// }

// // -> Accessor decorator
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
// 	console.log('Accessor decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(descriptor);
// }
// // -> Returning Accessor decorator
// function Log2(
// 	target: any,
// 	name: string,
// 	descriptor: PropertyDescriptor
// ): PropertyDescriptor {
// 	console.log('Returning Accessor decorator!');
// 	console.log(target);
// 	console.log(name);
//    console.log(descriptor);
//    return {enumerable...}
// }

// function Log3(
// 	target: any,
// 	name: string | Symbol,
// 	descriptor: PropertyDescriptor
// ) {
// 	console.log('Function decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
// 	console.log('Parameter  decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(position);
// }

// class Product {
// 	// @Log
// 	title: string;

// 	private _price: number;

// 	// @Log2
// 	set Price(val: number) {
// 		if (val > 0) {
// 			this._price = val;
// 		} else throw new Error('Invalid price - should be positive!');
// 	}

// 	constructor(t: string, p: number) {
// 		this.title = t;
// 		this._price = p;
// 	}

// 	@Log3
// 	getPriceWithTax(@Log4 tax: number) {
// 		return this._price * (1 + tax);
// 	}
// }

// // -> RETURNING FUNCTION DECORATOR
// // Without Function Decorator
// class Printer {
// 	message = 'This works!';

// 	showMessage() {
// 		console.log(this.message);
// 	}
// }
// const p = new Printer();
// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));

// function AutoBind(
// 	_target: any,
// 	_methodName: string | Symbol,
// 	descriptor: PropertyDescriptor
// ) {
// 	// Get a hold of the method we are applying this decorator onto
// 	const originalMethod = descriptor.value;
// 	// Have the method inside the PropertyDescriptor applied bind(this)
// 	const adjDescriptor: PropertyDescriptor = {
// 		configurable: true,
// 		enumerable: false,
// 		get() {
// 			const boundFn = originalMethod.bind(this);
// 			return boundFn;
// 		},
// 	};
// 	return adjDescriptor;
// }

// // With Function Decorator
// class Printer1 {
// 	message = 'This works! ✳️';

// 	@AutoBind
// 	showMessage() {
// 		console.log(this.message);
// 	}
// }
// const p1 = new Printer1();
// const button1 = document.querySelector('button')!;
// button1.addEventListener('click', p1.showMessage);

// -> VALIDATOR DECORATORS
// Decorators
interface ValidatorConfig {
	// Dynamic assignment of object key/value pairs
	[prop: string]: { [validatableProp: string]: string[] }; // list: ['required', 'postive']
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	// console.log(target); // target.constructor.name corresponds to Course as target yields class where this decorator is called from
	// Projected structure => registeredValidators : {  Course: {'postive', 'required'} }
	registeredValidators[target.constructor.name] = {
		// Keep already registered items and overwrite as necessary w/ the next index assigment
		...registeredValidators[target.constructor.name],
		// Dynamic assignment of object key/value pairs
		[propName]: [
			// Extracts all additional validators - does not check repitative validators
			...(registeredValidators[target.constructor.name]?.[propName] ?? []),
			'required',
		],
	};
}
function PositiveNumber(target: any, propName: string) {
	// console.log(target); // target.constructor.name corresponds to Course as target yields class where this decorator is called from
	// Projected structure => registeredValidators : {  Course: {'postive', 'required'} }
	registeredValidators[target.constructor.name] = {
		// Keep already registered items and overwrite as necessary w/ the next index assigment
		...registeredValidators[target.constructor.name],
		// Dynamic assignment of object key/value pairs
		[propName]: [
			// Extracts all additional validators - does not check repitative validators
			...(registeredValidators[target.constructor.name]?.[propName] ?? []),
			'positive',
		],
	};
}
function validate(obj: any) {
	// Take in object as argument, Object's name is Course.
	// Lookup Course index inside registeredValidators object.
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	console.log('⚠️objValidatorConfig :', objValidatorConfig);
	if (!objValidatorConfig) {
		return true;
	}
	// Common truhty check bridging variable
	let isValid = true;
	// Look up every property
	for (const prop in objValidatorConfig) {
		console.log('$$', prop);
		// Look up every validator inside the validagtor list provided for the property
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop]; //test truthiness
					console.log('!!obj[prop] :', !!obj[prop]);
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					console.log('obj[prop] > 0 :', obj[prop] > 0);
					break;
				default:
					console.log('There is no such validator');
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const titleEl = document.getElementById('title') as HTMLInputElement;
	const priceEl = document.getElementById('price') as HTMLInputElement;

	const title = titleEl.value;
	const price = Number(priceEl.value);

	const createdCourse = new Course(title, price);

	if (!validate(createdCourse)) {
		alert('Invalid input, please try again!');
		return;
	} else {
		console.log(createdCourse);
	}
});
