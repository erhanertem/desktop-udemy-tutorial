// LESSON 9 - RECURSION PROBLEM SET 2

// --> PART 1
// > EXERCISE #15
function reverse(str) {
	// BASE CASE
	if (reverse.length > str.length) {
		return '';
	}
	return str[str.length - 1] + reverse(str.slice(0, -1));
}

// console.log(" reverse('awesome') :", reverse('awesome')); // 'emosewa'
// console.log("reverse('rithmschool') :", reverse('rithmschool')); // 'loohcsmhtir'

// > EXERCISE #16

function isPalindrome(str) {
	// BASE CASE - escape hatch
	if (str.length === 0 || str.length === 1) {
		return true;
	}

	if (str.slice(-1) === str[0]) {
		// 	if (str.at(-1) === str.at(0)) {
		return isPalindrome(str.slice(1, -1));
	} else {
		return false;
	}
}

function isPalindrome_(str) {
	if (str.length === 1 || str.length === 0) {
		return true;
	}

	return str[0] === str.slice(-1) && isPalindrome(str.substring(1, str.length - 1));
}

// console.log("isPalindrome('atacocatq') :", isPalindrome('atacocatq')); // false
// console.log("isPalindrome('tacocatq') :", isPalindrome('tacocatq')); // false
// console.log("isPalindrome('awesome') :", isPalindrome('awesome')); // false
// console.log("isPalindrome('foobar') :", isPalindrome('foobar')); // false
// console.log("isPalindrome('tacocat') :", isPalindrome('tacocat')); // true
// console.log("isPalindrome('tacocat') :", isPalindrome('tacoocat')); // true
// console.log("isPalindrome('amanaplanacanalpanama') :", isPalindrome('amanaplanacanalpanama')); // true
// console.log("isPalindrome('amanaplanacanalpandemonium') :", isPalindrome('amanaplanacanalpandemonium')); // false

// > EXERCISE #17
const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, cb) {
	console.log(arr);
	// Base case
	if (arr.length === 0) {
		return false;
	}

	if (cb(arr[0])) {
		return true;
	} else return someRecursive(arr.slice(1), cb);
}

// console.log('someRecursive([1, 2, 3, 4], isOdd) :', someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(' someRecursive([4,6,8,9], isOdd) :', someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log('someRecursive([4,6,8], isOdd) :', someRecursive([4, 6, 8], isOdd)); // false
// console.log(
// 	'someRecursive([4, 6, 8], (val) => val > 10) :',
// 	someRecursive([4, 6, 8], (val) => val > 10)
// ); // false

// > EXERCISE #18
function flatten(arr, flat = []) {
	function helper(arr) {
		// BASE CASE
		if (!arr.length) {
			return;
		}

		// CONDITIONAL RECURSIVE
		if (!Array.isArray(arr[0])) {
			flat = [...flat, ...arr.slice(0, 1)];
			arr.splice(0, 1);
			return helper(arr);
		}
		if (Array.isArray(arr[0])) {
			return helper([...arr[0], ...arr.slice(1)]);
		}
	}
	helper(arr);

	return flat;
}

function flatten_(arr, newArr = []) {
	// BASE CASE
	if (!arr.length) return newArr;

	// RECURSIVE
	if (Array.isArray(arr[0])) flatten(arr[0], newArr);
	else newArr.push(arr[0]);
	return flatten(arr.slice(1), newArr);
}

// console.log('flatten([1, 2, 3, [4, 5]]) :', flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log('flatten([1, [2, [3, 4], [[5]]]]) :', flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log('flatten([[1],[2],[3]]) :', flatten([[1], [2], [3]])); // [1,2,3]
// console.log('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) :', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// --> PART 2
// > EXERCISE #19

// > EXERCISE #20

// > EXERCISE #21

// > EXERCISE #22

// > EXERCISE #23
