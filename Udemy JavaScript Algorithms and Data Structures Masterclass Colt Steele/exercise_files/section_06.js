// LESSON 6 - OPTIONAL CHALLANGES
// CODING CHALLENGE #3
// O(N) TC
function sameFrequency(n1, n2) {
	const arr1 = Array.from(n1.toString());
	const arr2 = Array.from(n2.toString());

	// GUARD CLAUSE
	if (arr1.length !== arr2.length) {
		return console.log('They do not have equal number of digits');
	}

	let arr1_obj = {};
	let arr2_obj = {};

	for (const el of arr1) {
		arr1_obj[el] ? (arr1_obj[el] += 1) : (arr1_obj[el] = 1);
	}
	for (const el of arr2) {
		arr2_obj[el] ? (arr2_obj[el] += 1) : (arr2_obj[el] = 1);
	}

	for (const key of arr2) {
		if (arr2_obj[key] !== arr1_obj[key]) {
			return console.log(false);
		}
		return console.log(true);
	}
}

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false

// O(N2) TC
function sameFrequency_2(n1, n2) {
	const str1 = n1.toString();
	const str2 = n2.toString();

	// GUARD CLAUSE
	if (str1.length !== str2.length) {
		return console.log('They do not have equal number of digits');
	}

	const arr1 = Array.from(str1);
	const arr2 = Array.from(str2);
	for (const el of arr1) {
		if (arr2.includes(el)) {
			const index = arr2.indexOf(el);
			arr2.splice(index, 1);
		}
	}
	if (arr2.length === 0) {
		return console.log(true);
	} else return console.log(false);
}

// sameFrequency_2(182, 281); // true
// sameFrequency_2(34, 14); // false
// sameFrequency_2(3589578, 5879385); // true
// sameFrequency_2(22, 222); // false

// CODING CHALLENGE #4
function areThereDuplicates(...args) {
	let arr = [...args].sort();

	console.log(arr);
	// INITIAL POINTER INDICES
	let leftPtr = 0;
	let rightPtr = 1;

	while (rightPtr < arr.length) {
		if (arr[leftPtr] !== arr[rightPtr]) {
			leftPtr++;
			rightPtr++;
			arr[leftPtr] = arr[rightPtr - 1];
		} else {
			rightPtr++;
		}
	}
	if (arr.length - 1 !== leftPtr) {
		console.log('There are dups in this array - truthy');
	} else console.log('The serial has no dups - falsy');
}

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

function areThereDuplicates2(...args) {
	const arr = [...args].sort();
	if (new Set(arr).size !== arr.length) {
		console.log('There are dups in this array - truthy');
	} else console.log('The serial has no dups - falsy');
}

// areThereDuplicates2(1, 2, 3); // false
// areThereDuplicates2(1, 2, 2); // true
// areThereDuplicates2('a', 'b', 'c', 'a'); // true

function areThereDuplicates3(...args) {
	const arr = [...args].sort();

	let arrFreq = {};
	for (let key in arr) {
		arrFreq[key] ? (arrFreq[key] += 1) : (arrFreq[key] = 1);
	}
	console.log(arrFreq);
	for (let key in arrFreq) {
		if (arrFreq[key] > 1) {
			return console.log('There are dups in this array - truthy');
		}
	}
	return console.log('The serial has no dups - falsy');
}

// areThereDuplicates3(1, 2, 3); // false
// areThereDuplicates3(1, 2, 2); // true
// areThereDuplicates3('a', 'b', 'c', 'a'); // true

// CODING CHALLENGE #5

function averagePair1(sortedArr, targetAverage) {
	let head = 0;
	let tail = sortedArr.length - 1;
	let count = 0;
	// GUARD CLAUSE - min 2 elements for array
	if (tail < 2) {
		return console.log(false);
	}

	while (head < tail) {
		let avg = (sortedArr[head] + sortedArr[tail]) / 2;

		if (avg === targetAverage) {
			count++;
			tail--;
		} else if (avg < targetAverage) {
			head++;
		} else {
			tail--;
		}
	}

	if (count === 0) return console.log(false);
	else return console.log(true);
}

// averagePair1([1, 2, 3], 2.5); // true
// averagePair1([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair1([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair1([], 4); // false

// CODING CHALLENGE #6
function isSubsequence(str1, str2) {
	// GUARD CLAUSE
	if (str1.length > str2.length || !str1.length) {
		console.log('Please provide proper strings for comparison');
	}

	let str1Ptr = 0;
	let str2Ptr = 0;
	while (str1Ptr < str1.length) {
		if (str2Ptr > str2.length) {
			return console.log(false);
		}
		if (str1[str1Ptr] === str2[str2Ptr]) {
			str1Ptr++;
			str2Ptr++;
		}
		if (str1[str1Ptr] !== str2[str2Ptr]) {
			str2Ptr++;
		}
	}

	if (str1Ptr === str1.length) {
		return console.log(true);
	} else {
		return console.log(false);
	}
}
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence2(str1, str2) {
	let i = 0;
	let j = 0;
	if (!str1) return console.log(true);
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return console.log(true);
		j++;
	}
	return console.log(false);
}
// isSubsequence2('hello', 'hello world'); // true
// isSubsequence2('sing', 'sting'); // true
// isSubsequence2('abc', 'abracadabra'); // true
// isSubsequence2('abc', 'acb'); // false (order matters)

// CODING CHALLENGE #7
// O(N) TC
function maxSubarraySum_cc(arr, arrLength) {
	// GUARD CLAUSE
	if (arr.length < arrLength) {
		return console.log('Provided array is not permissable');
	}

	let tailIndex = arrLength;
	let maxSum;
	let tempSum = 0;

	// CALCULATE THE INTIIAL ARRAY SUM VALUE
	for (let i = 0; i < arrLength; i++) {
		tempSum += arr[i];
	}
	maxSum = tempSum;

	while (tailIndex < arr.length) {
		tempSum = tempSum + arr[tailIndex] - arr[tailIndex - arrLength];
		maxSum = Math.max(tempSum, maxSum);
		tailIndex++;
	}

	return console.log(maxSum);
}

// maxSubarraySum_cc([100, 200, 300, 400], 2); // 700
// maxSubarraySum_cc([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum_cc([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum_cc([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubarraySum_cc([2, 3], 3); // null

// CODING CHALLENGE #8
function minSubArrayLen(arr, int) {
	let total = 0;
	let leftPtr = 0;
	let rightPtr = 0;
	let minLength = Infinity;

	while (leftPtr < arr.length) {
		//if current window doesn't add up to the given sum then move the window to the right
		if (total < int && rightPtr < arr.length) {
			total += arr[rightPtr];
			rightPtr++;
		}
		//if current window adds up to at least the sum given then we can shrink the window
		else if (total >= int) {
			minLength = Math.min(minLength, rightPtr - leftPtr);
			total -= arr[leftPtr];
			leftPtr++;
		}
		//Current total less than required total but we reach the end, need this or else we will be in an infinite loop.
		else {
			break;
		}
	}

	return minLength === Infinity ? console.log(0) : console.log(minLength);
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

// CODING CHALLENGE #9

function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
			// console.log(start);
		}
		longest = Math.max(longest, i - start + 1);
		seen[char] = i + 1;
		// console.log(seen);
	}
	return console.log(longest);
}

// findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6
