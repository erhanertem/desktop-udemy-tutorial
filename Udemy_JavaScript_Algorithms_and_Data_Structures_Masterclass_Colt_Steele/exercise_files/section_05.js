'use strict';

// LESSON 5 - PROBLEM SOLVING PATTERNS

// --> FREQUENCY COUNTER PATTERN

// O(N^2) TIME COMPLEXITY
function same(arr1, arr2) {
	// GUARD CLAUSE - If length of arrays do not match, return false
	if (arr1.length !== arr2.length) {
		console.log('⚠️Array lengths do not match!');
		return false;
	}

	const copyArr2 = [...arr2];

	for (let element of arr1) {
		const checkValue = Math.pow(element, 2);
		if (copyArr2.includes(checkValue)) {
			copyArr2.splice(copyArr2.indexOf(checkValue), 1);
		}
	}

	if (!copyArr2.length) {
		console.log('✅All match');
	} else {
		console.log('⛔Not a match');
	}
}

// same([1, 2, 3], [1, 9]);
// same([1, 2, 3], [4, 1, 9]);
// same([2, 2, 3, 2], [4, 1, 4, 9]);

// O(N^2) TIME COMPLEXITY
function same_2(arr1, arr2) {
	// GUARD CLAUSE - If length of arrays do not match, return false
	if (arr1.length !== arr2.length) {
		console.log('⚠️Array lengths do not match!');
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			console.log('⛔Not a match');
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	console.log('✅All match');
	return true;
}

// same_2([1, 2, 3], [1, 9]);
// same_2([1, 2, 3], [4, 1, 9]);
// same_2([2, 2, 3, 2], [4, 1, 4, 9]);

// O(N) TIME COMPLEXITY
function same_3(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		console.log('⚠️Array lengths do not match!');
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let element of arr1) {
		frequencyCounter1[element] = ++frequencyCounter1[element] || 1;
	}
	for (let element of arr2) {
		frequencyCounter2[element] = ++frequencyCounter2[element] || 1;
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

// same_3([1, 2, 3], [1, 9]);
// same_3([1, 2, 3, 3], [4, 1, 9, 9]);
// same_3([2, 2, 3, 2], [4, 1, 4, 9]);

// CODING CHALLENGE
// Anagram Challange
// O(N) TIME COMPLEXITY
function validAnagram(str1, str2) {
	// GUARD CLAUSE
	if (str1.length !== str2.length) {
		console.log('⚠️Letter count mismatch!!!');
		return false;
	}
	let frequencyStr1 = {};
	let frequencyStr2 = {};
	for (let element of str1) {
		frequencyStr1[element] = ++frequencyStr1[element] || 1;
	}
	for (let element of str2) {
		frequencyStr2[element] = ++frequencyStr2[element] || 1;
	}
	for (let key in frequencyStr1) {
		if (!(key in frequencyStr2)) {
			console.log('⛔⛔Key mismatch');
			return false;
		}
		if (frequencyStr2[key] !== frequencyStr1[key]) {
			console.log('⛔⛔Freq mismatch');
			return false;
		}
	}
	console.log('✅Anagram is 100% match');
	return true;
}

// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true
// validAnagram('rat', 'car'); // false)
// validAnagram('awesome', 'awesom'); // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
// validAnagram('qwerty', 'qeywrt'); // true
// validAnagram('texttwisttime', 'timetwisttext'); // true

console.log('---------------------------------');

function validAnagram_2(str1, str2) {
	if (str1.length !== str2.length) {
		console.log('⚠️Letter count mismatch!!!');
		return false;
	}

	const lookup = {};
	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	console.log('✅Anagram is 100% match');
	return true;
}

// validAnagram_2('', ''); // true
// validAnagram_2('aaz', 'zza'); // false
// validAnagram_2('anagram', 'nagaram'); // true
// validAnagram_2('rat', 'car'); // false)
// validAnagram_2('awesome', 'awesom'); // false
// validAnagram_2('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
// validAnagram_2('qwerty', 'qeywrt'); // true
// validAnagram_2('texttwisttime', 'timetwisttext'); // true

// -->MULTIPLE POINTERS PATTERN

// NAIVE SOLUTION - O(N^2) TIME COMPLEXITY
const result = [];
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				result.push([arr[i], arr[j]]);
				break;
			}
		}
	}
}
// sumZero([-4, -3, -2, -1, 0, 1, 1, 2, 2, 5, 10]);
// console.log(result);

console.log('---------------------------------');

//->TWO POINTER PATTERN - LEFT->RIGHT-LEFT<-RIGHT
// O(N) TIME COMPLEXITY
const result2 = [];
function sumZero2(arr) {
	// Locate left pointer
	let leftPtr = 0;
	// Locate right pointer
	let rightPtr = arr.length - 1;
	// As long as pointers do not point the same
	while (leftPtr < rightPtr) {
		console.log('Value:', arr[leftPtr], 'Index:', leftPtr, '|', 'Value:', arr[rightPtr], 'Index:', rightPtr);
		// Sum the pointed values
		let sum = arr[leftPtr] + arr[rightPtr];
		// If the sum is zero, record the pointer values & move left pointer to right
		if (sum === 0) {
			result2.push([arr[leftPtr], arr[rightPtr]]);
			leftPtr++;
			// If sum is greater, move the right pointer to left for 0 convergence
		} else if (sum > 0) {
			rightPtr--;
			// If sum is negative, move the left pointer to right for 0 convergence
		} else {
			leftPtr++;
		}
	}
}

// sumZero2([-4, -3, -2, -1, 0, 1, 1, 2, 2, 5, 10]);
// console.log(result2);

console.log('---------------------------------');

const result3 = [];
function sumZero3(arr) {
	// Locate right pointer
	let rightPtr = arr.length - 1;
	// Locate left pointer
	for (let leftPtr = 0; leftPtr < rightPtr; ) {
		// Sum the pointed values
		let currentSum = arr[leftPtr] + arr[rightPtr];
		// If the sum is zero, record the pointer values

		if (currentSum === 0) {
			result3.push([arr[leftPtr], arr[rightPtr]]);
			leftPtr++;
		} else if (currentSum < 0) {
			leftPtr++;
		} else {
			rightPtr--;
		}
	}
}

// sumZero3([-4, -3, -2, -1, 0, 1, 1, 2, 2, 5, 10]);
// console.log(result3);

//-> TWO POINTER PATTERN - LEFT-LEFT->RIGHT
// CODING CHALLENGE
// COUNT UNIQUE VALUES CHALLANGE
function countUniqueValues(arr) {
	let i = 0;
	let j = 1;
	while (j < arr.length) {
		if (arr[j] === arr[i]) {
			j++;
		} else {
			i++;
			arr[i] = arr[j];
		}
	}
	return console.log(i + 1);
}

// countUniqueValues([1, 1, 1, 2]);
// countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]);
// countUniqueValues([]);
// countUniqueValues([-2, -1, -1, 0, 1]);

// const newUnique = [...new Set([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])].length;
// console.log(newUnique);

// -->SLIDING WINDOW PATTERN

// NAIVE SOLUTION
// O(N2) TIME COMPLEXITY
function maxSubarraySum(arr, numberofelements) {
	// GUARD CLAUSE - Array group can't be more than the length of the priovided array
	if (numberofelements > arr.length) {
		return null;
	}

	// Initial Max Value assuming all array elements are negative
	let max = -Infinity;
	for (let i = 0; i < arr.length - numberofelements + 1; i++) {
		let tempSum = 0;
		for (let j = 0; j < numberofelements; j++) {
			tempSum += arr[i + j];
		}
		if (tempSum > max) {
			max = tempSum;
		}
	}
	return console.log(max);
}
// maxSubarraySum([1, 2, 5, 6, 7, 8], 2);

console.log('---------------------------------');

// O(N) TIME COMPLEXITY
function maxSubarraySum2(arr, numberofelements) {
	let maxSum = 0;
	let tempSum = 0;
	// GUARD CLAUSE - Array group can't be more than the length of the priovided array
	if (arr.length < numberofelements) return null;
	// GET THE INITIAL ARRAY
	for (let i = 0; i < numberofelements; i++) {
		maxSum += arr[i];
	}
	// ASSIGN FIRST SUM FROM THE INITIAL ARRAY TO TEMPSUM
	tempSum = maxSum;
	// STARTING AFTER THE 1ST ARAY GROUP ONWARDS
	for (let i = numberofelements; i < arr.length; i++) {
		// ADD THE N+1TH ELEMENT AND DROP THE FIRST ELEMENT
		tempSum = tempSum - arr[i - numberofelements] + arr[i];
		// KEEP THE MAX ONE AS MAXSUM
		maxSum = Math.max(maxSum, tempSum);
	}
	return console.log(maxSum);
}
// maxSubarraySum2([1, 2, 5, 6, 7, 8], 2);

// -->DIVIDE & CONQUER PATTERN

function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	// LOOP THRU THE ARRAY OF SORTED NUMBERS
	while (min <= max) {
		// GET A HOLD OF THE LEAST MIDDLE ELEMENT OF THE CURRENT ARRAY
		let middle = Math.floor((min + max) / 2);
		let currEl = arr[middle];

		// IF THE TARGET VALUE IS BIGGER THAN THE MIDDLE VALUE, NARRROW DOWN THE ARRAY FROM MIDDLE-UP
		if (currEl < val) {
			min = middle + 1;
			// IF THE TARGET VALUE IS LESSER THAN THE MIDDLE VALUE, NARRWO DOWN THE ARRAY FROM MIDDLE-DOWN
		} else if (currEl > val) {
			max = middle - 1;
			// IF BOTH EQUAL RETURN THE INDEX
		} else {
			return middle;
		}
	}
	return -1;
}

// console.log('search :', search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 333], 99));
