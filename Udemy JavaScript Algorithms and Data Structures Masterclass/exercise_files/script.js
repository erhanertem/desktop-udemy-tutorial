'use strict';

// // LESSON 2 - BIG O NOTATION

// // NOTE BIG-O NOTATION IS USED TO ANALYZE THE PERFORMANCE OF AN ALGORITHM. BIG-O NOTATION GIVES US A HIGH LEVEL UNDERSTANDING OF THE TIME OR SPACE COMPLEXITY OF AN ALGORITHM.

function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// // console.log('🚀 | file: script.js:12 | addUpTo(6):', addUpTo1(6));
// var t1 = performance.now();
// addUpTo1(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${t2 - t1} mlseconds.`);

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// // console.log('🚀 | file: script.js:12 | addUpTo(6):', addUpTo2(6));
// var t1 = performance.now();
// addUpTo2(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${t2 - t1} mlseconds.`);

// //->TIME COMPLEXITY
// // Instead of counting seconds whic vary even for the same task repetitevly on the same machine with no changes, one might chose to count the number of simple operations that the computer has to perform.
// /** NOTES
//  * 1. ARITHMETIC OPERATIONS ARE CONSTANT TIME
//  * 2. VARIABLE ASSIGNMENTS ARE CONSTANT TIME
//  * 3. ACCESSING ELEMENTS IN AN ARRAY VIA INDEX OR OBJECTS VIA KEYS ARE CONSTANT TIME
//  * 4. LOOPS ARE N COMPLEXITY TIME
//  * 5. CASCADED LOOPS ARE N * WHATEVER INNER LOOPS COMPLEXITY TIME
//  * /
// //->SPACE COMPLEXITY
// // Auxillary space complexity is the space required by the algorithm, exclusive of the space taken up by the inputs.
// /** NOTES
//  * 1. BOOLEANS,NUMBERS,UNDEFINED,NULL ARE CONSTANT SPACE
//  * 2. STRINGS REQUIRE O(N) SPACE
//  * 3. REFERENCE TYPES LIKE ELEMENTS IN AN ARRAY VIA INDEX OR OBJECTS VIA KEYS REQUIRE O(N) SPACE
//  */

// // LESSON 3 - ANALYZING PERFORMANCE OF ARRAYS AND OBJECTS
// //-> OBJECTS
// /**
//  * INSERTION O(1)
//  * REMOVAL O(1)
//  * SEARCHING O(N)
//  * ACCESS O(1)
//  */

let instructor = {
  firstName: 'Temmy',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4, 5],
};

// console.log('🚀 | file: script.js:62 ', Object.entries(instructor)); //O(N)
// console.log('🚀 | file: script.js:62 ', Object.keys(instructor)); //O(N)
// console.log('🚀 | file: script.js:62 ', Object.values(instructor)); //O(N)
// console.log('🚀 | file: script.js:62 ', instructor.hasOwnProperty('firstName')); //O(1)

// //-> ARRAYS
// /**
//  * INSERTION O(1) @ END ? O(N) @BEGINNING
//  * REMOVAL O(1) @ END ? O(N) @ BEGINNING
//  * SEARCHING O(N)
//  * ACCESS O(1)
//  */

// /**
//  * push - O(1)
//  * pop - O(1)
//  * shift - O(N)
//  * unshift - O(N)
//  * concat - O(N)
//  * slice - O(N)
//  * splice - O(N)
//  * sort -O(N*LOGN)
//  * forEach/map/filter/reduce/... - O(N)
//  */

// // LESSON 4 - PROBLEM SOLVING APPROACH

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
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
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

// LESSON 5 - PROBLEM SOLVING PATTERNS

// -->FREQUENCY COUNTER PATTERN

function same(arr, chkArr) {
  const termArr = [...chkArr];
  if (arr.length !== termArr.length) {
    console.log('arr lenghts do not match!');
    return;
  }
  for (const element of arr) {
    const valueSeek = Math.pow(element, 2);
    if (termArr.includes(valueSeek)) {
      const index = termArr.indexOf(valueSeek);
      termArr.splice(index, 1);
    }
  }
  if (termArr.length === 0) {
    console.log('All checks!');
  } else {
    console.log('Not a perfect match');
  }
}

// same([1, 2, 3], [1, 9]);
// same([1, 2, 3], [4, 1, 9]);
// same2([1, 2, 3, 2], [4, 1, 4, 9]);

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
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

// Anagram Challange
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return console.log('Letter count mismatch!!!');
  }
  let countStr1 = {};
  let countStr2 = {};
  for (let letter of str1.toLowerCase()) {
    countStr1[letter] = ++countStr1[letter] || 1;
  }
  for (let letter of str2.toLowerCase()) {
    countStr2[letter] = ++countStr2[letter] || 1;
  }
  console.log(countStr1);
  console.log(countStr2);
  for (let key in countStr1) {
    if (!(key in countStr2)) {
      return false;
    }
    if (countStr1[key] !== countStr2[key]) {
      return false;
    }
  }
  return console.log('Anagram is 100% match');
}
// validAnagram('zaz', 'zza');

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return console.log('Letter count mismatch!!!');
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
  return console.log('Anagram is 100% match');
}
// validAnagram2('za', 'zza');

// -->MULTIPLE POINTERS PATTERN

const result = [];
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
}
// sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 10]);
// console.log(result);

const result2 = [];
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      result2.push([arr[left], arr[right]]);
      sum > 0 ? right-- : left++;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// sumZero2([-4, -3, -2, -1, 0, 1, 2, 5, 10]);
// console.log(result2);

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
  return console.log(arr.splice(0, i + 1).length);
}

// countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
// countUniqueValues([]);

// const newUnique = [...new Set([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])].length;
// console.log(newUnique);

// -->SLIDING WINDOW PATTERN

function maxSubarraySum(arr, groupof) {
  if (groupof > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - groupof + 1; i++) {
    tempSum = 0;
    for (let j = 0; j < groupof; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) {
      max = tempSum;
    }
  }
  return console.log(max);
}
// maxSubarraySum([1, 2, 5, 6, 7, 8], 2);

function maxSubarraySum2(arr, groupof) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < groupof) return null;
  for (let i = 0; i < groupof; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = groupof; i < arr.length; i++) {
    tempSum = tempSum - arr[i - groupof] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// maxSubarraySum2([1, 2, 5, 6, 7, 8], 2);
// console.log(
//   '🚀 | file: script.js:366 | maxSubarraySum2([1, 2, 5, 6, 7, 8], 2)',
//   maxSubarraySum2([1, 2, 5, 6, 7, 8], 2)
// );

// -->DIVIDE & CONQUER PATTERN
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currEl = arr[middle];

    if (currEl < val) {
      min = middle + 1;
    } else if (currEl > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// search([4, 1, 1, 2, 23, 42, 1], 1);
// console.log(
//   '🚀 | file: script.js:392 | search([4, 1, 1, 2, 23, 42, 1], 1)',
//   search([4, 1, 1, 2, 23, 42, 1], 1)
// );

// LESSON 6 - OPTIONAL CHALLANGES

// ->Challange #3
function sameFrequency(n1, n2) {
  const str1 = n1.toString();
  const str2 = n2.toString();

  if (str1.length !== str2.length) {
    return false;
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
    return true;
  } else return false;
}

// const res = sameFrequency(82, 281);
// console.log('🚀 | file: script.js:426 | res', res);

function sameFrequency2(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    count2[str2[j]] = (count2[str2[j]] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}

// ->Challange #4
// A.Frequency Counter Solution
function areThereDuplicates(...arg) {
  const count = {};
  const arr = [...arg];

  for (const el of arr) {
    count[el] = ++count[el] || 1;
  }

  for (const key in count) {
    if (count[key] > 1) {
      return true;
    }
  }
  return false;
}

// B.Multiple Pointer Solution
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// const res = areThereDuplicates2(1, 3, 2, 1);
// console.log(res);

// ->Challange #5
function averagePair(arr, targetAvg) {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    console.log(arr[left], arr[right], avg);
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else right--;
  }
  return false;
}

// const res = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// console.log(res);

// ->Challange #6
function isSubsequence(str1, str2) {
  if (str1.length > str2.length || !str2) {
    return false;
  }
  if (!str1) return true;

  let start1 = 0;
  let start2 = 0;

  while (start1 < str1.length) {
    if (start2 > str2.length) {
      return false;
    }
    if (str1[start1] === str2[start2]) {
      start1++;
      start2++;
    } else {
      start2++;
    }
  }
  return true;
}

function isSubsequence2(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// const res = isSubsequence2('hee hee', 'hee  hee');
// console.log(res);

// ->Challange #7

function maxSubarraySum3(arr, groupof) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < groupof) return null;
  for (let i = 0; i < groupof; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = groupof; i < arr.length; i++) {
    tempSum = tempSum - arr[i - groupof] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// const res = maxSubarraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
// console.log(res);

// ->Challange #8

function minSubarrayLen(arr, targetSum) {
  let total = 0;
  let startIndex = 0;
  let endIndex = 0;
  let minLength = Infinity;

  while (startIndex < arr.length) {
    //if current window doesn't add up to the given sum then move the window to the right
    if (total < targetSum && endIndex < arr.length) {
      total += arr[endIndex];
      endIndex++;
    }
    //if current window adds up to at least the sum given then we can shrink the window
    else if (total >= targetSum) {
      minLength = Math.min(minLength, endIndex - startIndex);
      total -= arr[startIndex];
      startIndex++;
    }
    //Current total less than required total but we reach the end, need this or else we will be in an infinite loop.
    else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// const res = minSubarrayLen([2, 1, 6, 5, 4], 9);
// console.log(res);

// ->Challange #8

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
    console.log(seen);
  }
  return longest;
}

const res = findLongestSubstring('thisisawesome');
console.log(res);
