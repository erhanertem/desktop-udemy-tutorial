// GROUP TEST VERSION
const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
	// TEST IF ITS A FUNCTION
	// it('Should be a function', () => expect(typeof fizzBuzz === 'function'));
	it('Should be a function', () => expect(typeof fizzBuzz).toEqual('function'));
	// TEST FOR NOT MEETING BOTH CONDITIONS
	it('Should return the number if not divisible by 3 or 5', () => {
		expect(fizzBuzz(1)).toEqual(1);
		expect(fizzBuzz(13)).toEqual(13);
		expect(fizzBuzz(17)).toEqual(17);
	});
	it('Should return Fizz if divisible by 3', () => {
		expect(fizzBuzz(3)).toEqual('Fizz');
		expect(fizzBuzz(6)).toEqual('Fizz');
		expect(fizzBuzz(3)).toEqual('Fizz');
	});
	it('Should return Fizz if divisible by 5', () => {
		expect(fizzBuzz(5)).toEqual('Buzz');
		expect(fizzBuzz(10)).toEqual('Buzz');
		expect(fizzBuzz(20)).toEqual('Buzz');
	});
	it('Should return FizzBuzz if divisible by 3 & 5', () => {
		expect(fizzBuzz(15)).toEqual('FizzBuzz');
		expect(fizzBuzz(30)).toEqual('FizzBuzz');
		expect(fizzBuzz(45)).toEqual('FizzBuzz');
	});
});

// // SINGLE TEST VERSION
// const fizzBuzz = require('./fizzBuzz'); // Assuming the file is named fizzBuzz.js

// test('returns FizzBuzz for multiples of 15', () => {
// 	expect(fizzBuzz(15)).toBe('FizzBuzz');
// 	expect(fizzBuzz(30)).toBe('FizzBuzz');
// 	expect(fizzBuzz(45)).toBe('FizzBuzz');
// });

// test('returns Fizz for multiples of 3', () => {
// 	expect(fizzBuzz(3)).toBe('Fizz');
// 	expect(fizzBuzz(6)).toBe('Fizz');
// 	expect(fizzBuzz(9)).toBe('Fizz');
// });

// test('returns Buzz for multiples of 5', () => {
// 	expect(fizzBuzz(5)).toBe('Buzz');
// 	expect(fizzBuzz(10)).toBe('Buzz');
// 	expect(fizzBuzz(20)).toBe('Buzz');
// });

// test('returns the number itself for non-multiples of 3 or 5', () => {
// 	expect(fizzBuzz(1)).toBe(1);
// 	expect(fizzBuzz(2)).toBe(2);
// 	expect(fizzBuzz(4)).toBe(4);
// 	expect(fizzBuzz(7)).toBe(7);
// 	expect(fizzBuzz(8)).toBe(8);
// });

// test('returns the number itself for negative numbers', () => {
// 	expect(fizzBuzz(-1)).toBe(-1);
// 	expect(fizzBuzz(-2)).toBe(-2);
// 	expect(fizzBuzz(-4)).toBe(-4);
// });
