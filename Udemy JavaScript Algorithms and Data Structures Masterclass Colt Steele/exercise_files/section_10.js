// LESSON 10 - SEARCHING ALGORITHMS
// > LIENAR SEARCH
function linearSearch_(arr, value) {
	if (arr.includes(value)) {
		return arr.indexOf(value);
	} else {
		return -1;
	}
}

function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
}

// linearSearch([10, 15, 20, 25, 30], 15); // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
// linearSearch([100], 100); // 0
// linearSearch([1, 2, 3, 4, 5], 6); // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
// linearSearch([100], 200); // -1
// console.log('linearSearch([100], 200) :', linearSearch([100], 200));

// > BINARY SEARCH
function binarySearch_(arr, target) {
	let leftPtr = 0;
	let rightPtr = arr.length - 1;

	while (leftPtr <= rightPtr) {
		let middlePtr = leftPtr + (rightPtr - leftPtr) / 2;
		if (arr[middlePtr] === target) {
			return middlePtr;
		} else if (arr[middlePtr] < target) {
			leftPtr = middlePtr + 1;
		} else rightPtr = middlePtr - 1;
	}

	return -1;
}

function binarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.ceil((start + end) / 2);
	while (arr[middle] !== target && start <= end) {
		if (target < arr[middle]) {
			end = middle - 1;
		} else start = middle + 1;
		middle = Math.ceil((start + end) / 2);
	}
	return arr[middle] === target ? middle : -1;
}

// console.log('binarySearch([1, 2, 3, 4, 5], 2) :', binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log('binarySearch([1,2,3,4,5],3) :', binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log('binarySearch([1,2,3,4,5],5) :', binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log('binarySearch([1,2,3,4,5],6) :', binarySearch([1, 2, 3, 4, 5], 6)); // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

// > STRING SEARCH
function naiveSearch(str, targetStr) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < targetStr.length; j++) {
			if (targetStr[j] !== str[i + j]) {
				break;
			}
			if (j === targetStr.length - 1) {
				console.log('FOUND MATCH!!');
				count++;
			}
		}
	}
	return console.log('count :', count);
}
naiveSearch('lorie loled', 'lol');
