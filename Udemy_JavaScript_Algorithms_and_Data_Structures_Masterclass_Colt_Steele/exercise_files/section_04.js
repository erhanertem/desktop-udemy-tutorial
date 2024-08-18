'use strict';

// LESSON 4 - PROBLEM SOLVING APPROACH

// /**
//  * ALGORITHM IS A PROCESS OR SET OF STEPS TO ACCOMPLISH A CERTAIN TASK
//  * 1.DEVISE A PLAN FOR SOLVING PROBLEMS
//  * 2.MASTER COMMON PROBLEM SOLVING PATTERNS
//  *
//  * PROBLEM SOLVING:
//  * 1.UNDERSTAND THE PROBLEM
//  *
//  * What are the expected inputs?
//  * What are the expected outputs?
//  * Can I derive an output just from the provided inputs, do I have enough information to solve the problem?
//  * How should I label the importnat pieces of data that are part of the problem?
//  *
//  * 2.EXPLORE CONRETE EXAMPLES
//  *
//  * Try to make examples of different inputs, edge cases to make the solution fool-proof.
//  *
//  * 3.BREAKE IT DOWN
//  *
//  * List actual steps to approach the problem.
//  *
//  * 4.SOLVE/SIMPLIFY
//  *
//  * Break down the solutions into several consequtive solutions
//  * Find the core difficulty in what you're trying to do
//  * Temporarily ignore that difficulty
//  * Write a simplified solution
//  * Then incorporate that difficulty back in
//  *
//  * 5.LOOK BACK AND REFACTOR
//  *
//  * Can you check the result?
//  * Can you derive the result differently?
//  * Can you understand the code @ first glance?
//  * Can you imprive the performance of the code?
//  * Can you apply the method to another problem?
//  * Can you think other ways of refactor?
//  * How others solved the same or similar problem even in a different language setting?
//  *
//  */

function charCount(str) {
	const obj = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// charCount('yelloqqqw');
// console.log(
//   "🚀 | file: script.js:141 | charCount('yelloqqqw')",
//   charCount('yelloqqqw')
// );

function charCount2(str) {
	const obj = {};
	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

function isAlphaNumeric(char) {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // NUMERIC (0-9)
		!(code > 64 && code < 91) && // UPPERCASE ALPHA (A-Z)
		!(code > 96 && code < 123) // LOWERCASE ALPHA (a-z)
	) {
		return false;
	}
	return true;
}

// charCount2('yelloqqqw');
// console.log(
//   "🚀 | file: script.js:141 | charCount('yelloqqqw')",
//   charCount2('yelloqqqw')
// );
