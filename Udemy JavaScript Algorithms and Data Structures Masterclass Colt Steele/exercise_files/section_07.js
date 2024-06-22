// LESSON 7 - RECURSION

// CALL STACK EXAMPLE
function takeShower() {
	return 'Showering!';
}

function eatBreakfast() {
	let meal = cookFood();
	return `Eating ${meal}`;
}

function cookFood() {
	let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
	return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log('Ok ready to go to work!');
}
// wakeUp();

// 1ST RECURSIVE FUNCTION
// Recursive Version
function countDown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	} //Base case - escape hatch
	console.log(num);
	num--;
	countDown(num); //Recursive call
}
// countDown(3);
// Iterative Version
function countDown_I(num) {
	for (var i = num; i > 0; i--) {
		console.log(i);
	}
	console.log('All done!');
}

// 2ND RECURSIVE FUNCTION
function sumRange(num) {
	if (num === 1) return 1; // Base case - escape hatch
	return num + sumRange(num - 1); //Recursive call
}
// sumRange(4);

// FACTORIAL
// Iterative Version
function factorial_I(num) {
	let total = 1;
	for (let i = num; i > 1; i--) {
		total *= i;
	}
	return total;
}
// factorial_I(4);

//Recursive Version
function factorial(num) {
	// Base case - escape hatch
	if (num === 1) {
		return 1;
	}
	// Recursive call
	return num * factorial(num - 1);
}

// factorial(4);
console.log('factorial(4) :', factorial(4));

// HELPER METHOD RECURSION VERSION
function collectOddValues(arr) {
	let result = []; // variable to return/keep track of

	// *****************RECURSIVE LOGIC*******
	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}
	// ***************************************
	helper(arr); //CALL THE RECURSIVE LOGIC

	return result; // return the variable/result
}

// console.log('collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]); :', collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// PURE RECURSION VERSION
function collectOddValues_P(arr) {
	let result = []; // variable to return/keep track of

	// BASE CASE - escape hatch
	if (helperInput.length === 0) {
		return result;
	}

	// INLINE RECURSIVE CALL
	if (arr[0] % 2 !== 0) {
		result.push(arr[0]);
	}
	result = result.concat(collectOddValues(arr.slice(1)));

	return result; // return the variable/result
}
