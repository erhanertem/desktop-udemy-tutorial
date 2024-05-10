// // > UNIONS
// function combine(input1: number | string, input2: number | string) {
// 	let result;
// 	if (typeof input1 === 'number' && typeof input2 === 'number') {
// 		result = input1 + input2;
// 	} else {
// 		result = input1.toString() + ' ' + input2.toString();
// 	}
// 	return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

// // UNIONS @ ARRAYS
// const stuff: any[] = [1, 2, 3, 4, true, 'asad', { x: 1, y: true }];
// const mixed: (number | string)[] = [1, 2, 3, 4, 'das'];
// const mixed1: number | string[] = ['das', 'this'];
// const mixed2: number[] | string[] = [1, 2, 3, 4];
// type Point = { x: number; y: number };
// type Loc = { lat: number; long: number };
// const coords: (Point | Loc)[] = [];
// coords.push({ lat: 123.121, long: 23.123 });
// coords.push({ x: 123.121, y: 23.123 });

// // > LITERAL TYPES
// function combine(
// 	input1: number | string,
// 	input2: number | string,
// 	// resultConversion: string
// 	resultConversion: 'as-number' | 'as-text'
// ) {
// 	let result;
// 	if (
// 		(typeof input1 === 'number' && typeof input2 === 'number') ||
// 		resultConversion === 'as-number'
// 	) {
// 		result = +input1 + +input2;
// 	} else {
// 		result =
// 			input1.toString() +
// 			' ' +
// 			// (resultConversion === 'as-number' ? '' : ' ') +
// 			input2.toString();
// 	}
// 	// if (resultConversion === 'as-number') {
// 	// 	return +result;
// 	// } else {
// 	// 	return result.toString();
// 	// }
// 	return result;
// }
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

// type DayOfWeek =
// 	| 'Monday'
// 	| 'Tuesday'
// 	| 'Wednesday'
// 	| 'Thursday'
// 	| 'Friday'
// 	| 'Saturday'
// 	| 'Sunday';
// let today: DayOfWeek = 'Sunday';

// // > TYPE ALIASES
// function combine(
// 	input1: number | string,
// 	input2: number | string,
// 	resultConversion: 'as-number' | 'as-text'
// ) {
// 	//...
// }

// type Combinable = number | string;
// type ConversionType = 'as-number' | 'as-text';
// function combine(
// 	input1: Combinable,
// 	input2: Combinable,
// 	resultConversion: ConversionType
// ) {
// 	// ..
// }
