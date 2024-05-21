// // > UNKNOWN
// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Max';
// if (typeof userInput === 'string') {
// 	userName = userInput;
// }

// // > NEVER
// function generateError(message: string, code: number): never {
// 	throw { message: message, errorCode: code };
// }
// generateError('An error occured!', 500);

// let error = (): never => {
// 	throw Error('oopppss');
// };
// error();
