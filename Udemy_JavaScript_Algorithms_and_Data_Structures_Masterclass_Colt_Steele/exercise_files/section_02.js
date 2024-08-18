'use strict';

// LESSON 2 - BIG O NOTATION
// //->TIME COMPLEXITY
// // Instead of counting seconds whic vary even for the same task repetitevly on the same machine with no changes, one might chose to count the number of simple operations that the computer has to perform.
// /** NOTES
//  * 1. ARITHMETIC OPERATIONS ARE CONSTANT TIME
//  * 2. VARIABLE ASSIGNMENTS ARE CONSTANT TIME
//  * 3. ACCESSING ELEMENTS IN AN ARRAY VIA INDEX OR OBJECTS VIA KEYS ARE CONSTANT TIME
//  * 4. LOOPS ARE N COMPLEXITY TIME
//  * 5. CASCADED LOOPS ARE N * WHATEVER INNER LOOPS COMPLEXITY TIME
//  * /

// NOTE BIG-O NOTATION IS USED TO ANALYZE THE PERFORMANCE OF AN ALGORITHM. BIG-O NOTATION GIVES US A HIGH LEVEL UNDERSTANDING OF THE TIME OR SPACE COMPLEXITY OF AN ALGORITHM.

//BIG-O : O(n) time complexity
function addUpTo1(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// > PERFORMANCE CHECKING
let t1_1 = performance.now();
console.log(addUpTo1(100_000_000));
let t2_1 = performance.now();
console.log(`Time elapsed: ${(t2_1 - t1_1) / 1000} seconds`);

//BIG-O : O(1) time complexity
function addUpTo2(n) {
	return (n * (n + 1)) / 2;
}
// > PERFORMANCE CHECKING
let t1_2 = performance.now();
console.log(addUpTo2(100_000_000));
let t2_2 = performance.now();
console.log(`Time elapsed: ${(t2_2 - t1_2) / 1000} seconds`);

//BIG-O : O(n) time complexity
function countUpAndDown(n) {
	//BIG-O : O(n) time complexity
	console.log('Going up☝️');
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	//BIG-O : O(n) time complexity
	console.log('At the top! Goung down👇');
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log('Back down. Bye!');
}

//BIG-O : O(n2) time complexity
function printAllPairs(n) {
	//BIG-O : O(n) time complexity
	for (let i = 0; i < n; i++) {
		//BIG-O : O(n) time complexity
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

//BIG-O : O(n) time complexity
function logAtLeast5(n) {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

//BIG-O : O(1) time complexity
function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

// //->SPACE COMPLEXITY
// // Auxillary space complexity is the space required by the algorithm, exclusive of the space taken up by the inputs.
// /** NOTES
//  * 1. BOOLEANS,NUMBERS,UNDEFINED,NULL ARE CONSTANT SPACE
//  * 2. STRINGS REQUIRE O(N) SPACE
//  * 3. REFERENCE TYPES LIKE ELEMENTS IN AN ARRAY VIA INDEX OR OBJECTS VIA KEYS REQUIRE O(N) SPACE
//  */

// O(1) SPACE
function sum(arr) {
	// O(1) SPACE
	let total = 0;
	for (
		// O(1) SPACE
		let i = 0;
		i < arr.length;
		i++
	) {
		total += arr[i];
	}
	return total;
}

// O(n) SPACE
function double(arr) {
	// O(n) SPACE
	let newArr = [];
	for (
		// O(1) SPACE
		let i = 0;
		i < arr.length;
		i++
	) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
}
