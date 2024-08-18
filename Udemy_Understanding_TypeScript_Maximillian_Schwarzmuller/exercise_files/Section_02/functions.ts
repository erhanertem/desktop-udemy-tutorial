// // > FUNCTIONS
// // -> Explicit Type
// function add(n1: number, n2: number): number {
// 	return n1 + n2;
// }
// // -> Inferred Type
// function add(n1: number, n2: number) {
// 	return n1 + n2;
// }
// function printResult(num: number) {
// 	console.log('Result: ' + num);
// }
// function printResult_(num: number): undefined {
// 	console.log('Result: ' + num);
// 	return;
// }
// function printResult_(num: number): void {
// 	console.log('Result: ' + num);
// 	return;
// }
// printResult(add(5, 12));

// // let combineValues: Function;
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// // combineValues = printResult;
// function add(n1: number, n2: number) {
// 	return n1 + n2;
// }
// function addAndHandle(n1: number, n2: number, callback: (a: number) => void) {
// 	const result = n1 + n2;
// 	callback(result);
// }
// function printResult(num: number) {
// 	console.log('Result: ' + num);
// }
// console.log(combineValues(8, 8));
