'use strict';

// LESSON 3 - ANALYZE PERFORMANCE OF ARRAYS AND OBJECTS
//-> OBJECTS
/**
Use Objects:
1. When you don't need order
2. When you need fast access/insertion/removal

 * INSERTION O(1)
 * REMOVAL O(1)
 * SEARCHING O(N)
 * ACCESS O(1)
 */

let instructor = {
	firstName: 'Temmy',
	isInstructor: true,
	favoriteNumbers: [1, 2, 3, 4, 5],
};

console.log('Object.entries(instructor) :', Object.entries(instructor));
console.log('Object.keys(instructor) :', Object.keys(instructor));
console.log('Object.values(instructor); :', Object.values(instructor));
console.log("instructor.hasOwnProperty('firstName'); :", instructor.hasOwnProperty('firstName'));

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
