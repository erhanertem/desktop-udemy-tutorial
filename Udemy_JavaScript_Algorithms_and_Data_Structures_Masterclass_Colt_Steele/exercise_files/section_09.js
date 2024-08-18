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
function capitalizeFirst(arr, newArr = []) {
	// BASE CASE
	if (!arr.length) {
		return newArr;
	}
	// RECURSIVE
	newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
	return capitalizeFirst(arr.slice(1), newArr);
}
// console.log("capitalizeFirst(['car', 'taco', 'banana']) :", capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// > EXERCISE #20
function nestedEvenSum(obj, sum = 0) {
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

// console.log('nestedEvenSum(obj1) :', nestedEvenSum(obj1)); // 6
// console.log('nestedEvenSum(obj2) :', nestedEvenSum(obj2)); // 10

// > EXERCISE #21
function capitalizeWords(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWords(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}
let words = ['i', 'am', 'learning', 'recursion'];
// console.log('capitalizeWords(words) :', capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// > EXERCISE #22
function stringifyNumbers(obj) {
	var newObj = {};
	for (const key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
// > EXERCISE #23
function collectStrings_(obj) {
	var stringsArr = [];

	function gatherStrings(o) {
		for (const key in o) {
			if (typeof o[key] === 'string') {
				stringsArr.push(o[key]);
			} else if (typeof o[key] === 'object') {
				return gatherStrings(o[key]);
			}
		}
	}

	gatherStrings(obj);

	return stringsArr;
}
function collectStrings(obj) {
	var stringsArr = [];
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			stringsArr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			stringsArr = stringsArr.concat(collectStrings(obj[key]));
		}
	}

	return stringsArr;
}
const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz',
					},
				},
			},
		},
	},
};

collectStrings(obj); // ["foo", "bar", "baz"])
