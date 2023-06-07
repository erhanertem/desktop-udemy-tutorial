// // LESSON 2 - BIG O NOTATION

// // NOTE BIG-O NOTATION IS USED TO ANALYZE THE PERFORMANCE OF AN ALGORITHM. BIG-O NOTATION GIVES US A HIGH LEVEL UNDERSTANDING OF THE TIME OR SPACE COMPLEXITY OF AN ALGORITHM.

// function addUpTo1(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// // console.log('🚀 | file: script.js:12 | addUpTo(6):', addUpTo1(6));
// var t1 = performance.now();
// addUpTo1(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${t2 - t1} mlseconds.`);

// function addUpTo2(n) {
//   return (n * (n + 1)) / 2;
// }

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
//  * 3. ACCESSIGN ELEMENTS IN AN ARRAY VIA INDEX OR OBJECTS VIA KEYS ARE CONSTANT TIME
//  * 4. LOOPS ARE N COMPLEXITY TIME
//  * 5. CASCADED LOOPS ARE N * WHATEVER INNER LOOPS COMPLEXITY TIME
//  * /
// //->SPACE COMPLEXITY
// // Auxillary space complexity is the space required by the algorithm, exclusive of the space taken up by the inputs.
// /** NOTES
//  * 1. BOOLEANS, NMUMBERS,UNDEFINMED,NULL ARE CONSTANT SPACE
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

// let instructor = {
//   firstName: 'Temmy',
//   isInstructor: true,
//   favoriteNumbers: [1, 2, 3, 4, 5],
// };

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

// LESSON 4 - PROBLEM SOLVING APPROACH

/**
 * ALGORITHM IS A PROCESS OR SET OF STEPS TO ACCOMPLISH A CERTAIN TASK
 * 1.DEVISE A PLAN FOR SOLVING PROBLEMS
 * 2.MASTER COMMON PROBLEM SOLVING PATTERNS
 *
 * PROBLEM SOLVING:
 * 1.UNDERSTAND THE PROBLEM
 *
 * What are the expected inputs?
 * What are the expected outputs?
 * Can I derive an output just from the provided inputs, do I have enough information to solve the problem?
 * How should I label the importnat pieces of data that are part of the problem?
 *
 * 2.EXPLORE CONRETE EXAMPLES
 *
 * Try to make examples of different inputs, edge cases to make the solution fool-proof.
 *
 * 3.BREAKE IT DOWN
 *
 * List actual steps to approach the problem.
 *
 * 4.SOLVE/SIMPLIFY
 *
 * Break down the solutions into several consequtive solutions
 * Find the core difficulty in what you're trying to do
 * Temporarily ignore that difficulty
 * Write a simplified solution
 * Then incorporate that difficulty back in
 *
 * 5.LOOK BACK AND REFACTOR
 *
 * Can you check the result?
 * Can you derive the result differently?
 * Can you understand the code @ first glance?
 * Can you imprive the performance of the code?
 * Can you apply the method to another problem?
 * Can you think other ways of refactor?
 * How others solved the same or similar problem even in a different language setting?
 *
 */

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

charCount('yelloqqqw');
console.log(
  "🚀 | file: script.js:141 | charCount('yelloqqqw')",
  charCount('yelloqqqw')
);

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

charCount2('yelloqqqw');
console.log(
  "🚀 | file: script.js:141 | charCount('yelloqqqw')",
  charCount2('yelloqqqw')
);
