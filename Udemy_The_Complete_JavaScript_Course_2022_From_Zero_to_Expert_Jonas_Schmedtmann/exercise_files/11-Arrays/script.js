'use strict';

//LESSON 142 SIMPLE ARRRAY METHODS

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE METHOD - //IMPORTANT DOES NOT MUTATE THE ARRAY
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, -1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice()); //IMPORTANT CREATES A SHALLOW COPY OF AN ARRAY
// console.log([...arr]); //IMPORTANT CREATES A SHALLOW COPY OF AN ARRAY

// //SPLICE METHOD - //IMPORTANT MUTATES THE ARRAY
// // console.log(arr.splice(2)); //literally chops off the array
// // console.log(arr.splice(-1)); //literally chops off the array
// // console.log(arr.splice(1, 2)); //literally chops off the array
// console.log(arr); //mutated array

// let a = [1, 2, 3, 4, 5];
// // a.splice(2, 0, 'a', 'b'); // [1,2,'a','b',3,4,5] inserts @ index 2 in between the elements
// a.splice(2, 2, [1, 2], 3); // [1,2,[1,2],3,5] takes out @ index2 for 2 elements and replace them with the ones provided

// //REVERSE METHOD - //IMPORTANT MUTATES THE ARRAY
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());
// console.log(arr2); //mutated array

// //CONCAT METHOD - //IMPORTANT DOES NOT MUTATE THE ARRAY
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// const letters = arr.concat(arr2);
// console.log([...arr, ...arr2]); //alternate way
// console.log(letters);

// //JOIN METHOD - //IMPORTANT CREATES A STRING
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// const letters = arr.concat(arr2);
// console.log(letters.join('-'));

//LESSON 143 THE NEW AT METHOD

// //AT METHOD
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); //IMPORTANT AT METHOD for taking the firstt element of the array

// console.log(arr[arr.length - 1]); //take the last element of the array
// console.log(arr.slice(-1)[0]); //take the last element of the array
// console.log(arr.at(-1)); //IMPORTANT AT METHOD for taking the last element of the array
// console.log('jonas'.at(-1)); //IMPORTANT AT METHOD for taking the last element of the STRINGS

//LESSON 144 LOOPING ARRAYS: FOR EACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //IMPORTANT FOROF LOOPS CAN TAKE BREAK/CONTINUE STATEMENTS
// //REGULAR FOROF LOOP
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// //INDEXED FOROF LOOP
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`${index + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// //IMPORTANT FOREACH LOOPS CANT TAKE BREAK/CONTINUE STATEMENTS
// //REGULAR FOREACH
// movements.forEach(function (movement) {
//   movement > 0
//     ? console.log(`You deposited ${movement}`)
//     : console.log(`You withdrew ${Math.abs(movement)}`);
// });
// //INDEXED FOREACH
// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(`${index + 1} You deposited ${movement}`)
//     : console.log(`${index + 1} You withdrew ${Math.abs(movement)}`);
// });

//LESSON 145 FOREACH WITH MAPS AND SETS

// // FOREACH WITH MAPS

// const currencies = new Map([
//   ['USD', 'United States dollar'], //KEY,VALUE PAIRS
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// //FOREACH WITH SETS

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   //key and map are nonefunctional for sets. They are just there for consistency of application across object types
//   console.log(`${value}: ${value}`);
// });

//CODING CHALLENGE #1
// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀
// */

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   let revisedDogsJulia = [...dogsJulia]; //shallow copy of julia dog data
//   revisedDogsJulia.splice(0, 1);
//   revisedDogsJulia.splice(-2);
//   // console.log(revisedDogsJulia);
//   const compoundedArr = [...revisedDogsJulia, ...dogsKate];
//   // console.log(compoundedArr);
//   compoundedArr.forEach(function (value, index, arr) {
//     value >= 3
//       ? console.log(
//           `Dog number ${index + 1} is an adult, and is ${value} years old`
//         )
//       : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//   });
// };

// console.log('*******TEST DATA 1********');
// checkDogs(dogsJulia, dogsKate);
// console.log('*******TEST DATA 2********');
// checkDogs(dogsJulia2, dogsKate2);

//LESSON 150 DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //MAP METHOD
// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return Math.trunc(mov * eurToUsd);
// // });
// const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd)); //similar cide with arrow function
// console.log(movements);
// console.log(movementsUSD);

//LESSON 152 THE FILTER METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //FOROF LOOP
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);
// //FILTER METHOD WITH FUNCTION EXPRESSION
// const deposits = movements.filter(function (mov) {
//   return mov > 0; //only allow movements higher than 0 - boolean logic condition
// });
// console.log(deposits);
// //FILTER METHOD WITH ARROW FUNCTION
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//LESSON 153 THE REDUCE METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //REDUCE AS ACCUMULATOR
// //FOROF LOOP
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
// //REDUCE METHOD
// const balance = movements.reduce(function (
//   accumulator,
//   currentvalue,
//   index,
//   arr
// ) {
//   console.log(`Iteration${index}: ${accumulator}`);
//   return accumulator + currentvalue;
// },
// 100); //starting accumulator value of 100
// console.log(balance);

// //REDUCE AS MAXIMUM VALUE
// const max = movements.reduce((acc, mov, i) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//CODING CHALLENGE #2
// /*
// Let's go back to Julia and Kate's study about dogs.This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀
// */

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (testData) {
//   const newAgeData = testData
//     .map(
//       //   function (dogAge) {
//       //   if (dogAge <= 2) {
//       //     return 2 * dogAge;
//       //   } else {
//       //     return 16 + dogAge * 4;
//       //   }
//       // } //LONGER VERSION
//       dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4) //ARROW FUNCTION VERSION
//     )
//     .filter(age => age >= 18);
//   const avgAdultAge =
//     newAgeData.reduce(function (sum, item, i, arr) {
//       return (sum + item);
//     }, 0) / newAgeData.length;
//   console.log(newAgeData, avgAdultAge);
//   return Math.trunc(avgAdultAge);
// };

// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));

//LESSON 155 THE MAGIC OF CHAINING METHODS

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUSD = 1.1;

// //CHAINING METHODS
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr); //for inspection purposes
//     return mov * eurToUSD;
//   })
//   .reduce((acc, mov, i, arr) => {
//     console.log(arr); //for inspection purposes
//     return acc + mov, 0;
//   });
// console.log(totalDepositsUSD);

// CODING CHALLENGE #3
// /*
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀
// */
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (testData) {
//   const newAgeData = testData
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(age => age >= 18)
//     .reduce((sum, item, i, arr) => (sum + item) / arr.length, 0);
//   return Math.trunc(newAgeData);
// };

// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));

//LESSON 157 THE FIND METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const negative = movements.find(mov => mov < 0);
// console.log(negative); //returns the first matching element not an array

// //NOTE FIND METHOD IS BEST SUITED TO FIND AN OBJECT THAT MATCHES CERTAIN VALUE

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//LESSON 161 SOME AND EVERY METHODS

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //EQUALITY CHECK - SPECIFIC VALUE CHECK
// console.log(movements.includes(-130)); // returns a boolean value matching the element

//FILTER METHOD - VALUES RETURN
// const anyDEposits1 = movements.filter(mov => mov > 0); // returns the actual elements matching the testing condition

// //SOME CONDITION METHOD - boolean return
// const anyDEposits2 = movements.some(mov => mov > 0); //RETURNS A BOOLEAN VALUE MATCHING THE TESTING CONDITION - NOT ALL IS REQUIRED TO MATCH

// //EVERY CONDITION METHOD - boolean return
// const anyDEposits3 = movements.every(mov => mov > 0); //RETURNS A BOOLEAN VALUE MATCHING THE TESTING CONDITION - ALL IS REQUIRED TO MATCH
// console.log(anyDEposits1, anyDEposits2, anyDEposits3);

// //SEPARATE CALLBACK
// const deposit = mov => mov > 0; //testing condition as separate call-back function
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//LESSON 162 FLAT AND FLATMAP METHODS

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]; //1 LEVEL NESTING
// //FLAT METHOD
// console.log(arr.flat()); //1LEVEL NESTING

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]; //2 LEVEL NESTING
// console.log(arrDeep.flat(2)); //2NDLEVEL NESTING

// //FLATMAP METHOD
// //IMPORTANT FLATMAP ONLY WORKS FOR 1 LEVEL NESTING
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };
// const accounts = [account1, account2, account3, account4];

// // const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// // const allMovements = accountMovements.flat();
// // console.log(allMovements);
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);
// const overalBalance = accounts
//   // .map(acc => acc.movements)
//   // .flat()
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//LESSON 163 SORTING ARRAYS

// //SORT METHOD  - //IMPORTANT MUTATES THE ARRAY AND SORTS BASED STRINGS
// // FIRST EVERYTHING IS CONVERTED TO STRINGS AND THEN SORTED
// //STRINGS
// //NOTE WORKS ONLY FOR STRINGS. WITH NUMBERS WE HAVE TO TAKE EXTRA STEPS
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// //NUMBERS - //IMPORTANT Sorting based on string value
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// // console.log(movements.sort()); //IMPORTANT DO NOT MAKES ANY SENSE..ALPHBETICAL SORTING

// // return<0 A,B (keep order) (-1)
// // return>0 B,A (switch order) (1)
// //NOTE ASCENDING ORDER SORTING - WORKS BOTH FOR NUMBERS AND STRINGS
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// //NOTE DESCENDING ORDER SORTING  - WORKS BOTH FOR NUMBERS AND STRINGS
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);

//LESSON 164 MORE WAYS OF CREATING AND FILLING ARRAYS

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //EMPTY ARRAYS + FILL METHOD //IMPORTANT MUTATES THE ARRAY
// const x = new Array(7); //create an array of 7 empty inputs VIA ARRAY PROTOTYPE OBJECT
// // x.fill(0); //fills all with 0
// console.log(x);
// x.fill(0, 2, 4); //fills all with 0 only index 2 upto excluding index 4

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 2, 6);
// console.log(arr);

// //ARRAY.FROM METHOD
// const newArr = Array.from({ length: 7 }, () => 1); //ARRAY PROTOTYPE INCLUDES A PROPERTY OF LENGTH, WE SOLICIT FOR LENGTH TO BE 7 AND USE FROM() METHOD WITH BOTH ARGS.
// console.log(newArr);
// const newArr2 = Array.from({ length: 7 }, (_, index) => index + 1); // _ is used to omit the parameter not being used in the function
// console.log(newArr2);

// //USING HTML NODELIST ARRAY FROM A QUERYSELECTORALL()
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('euro', '$'))
//   );
//   // console.log(movementsUI.map(el => el.textContent.replace('euro', '$')));
//   console.log(movementsUI);
// });
// //Rewriting it with a spread operator and map method...
// const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//   el => el.textContent.replace('euro', '$')
// );

//LESSON 166 ARRAY METHODS PRACTICE

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// //1st exercise - calc the sum of all deposits in the accounts
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(val => val > 0)
//   .reduce((acc, val) => (acc += val), 0);

// //2nd exercise - calc movements > 1000
// const bankDepositSum2 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(val => val >= 1000).length;
// //similar code with reduce() -//IMPORTANT different use case scenario for reduce() method
// const bankDepositSum3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, val) => (val >= 1000 ? count++ : count), 0);
// console.log(bankDepositSum, bankDepositSum2);

// //3rd exercise - //IMPORTANT accumulator as an object in reduce() method to access multiple conditions at the same time
// //CODE #1 - ALTERNATIVE
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   ); // { deposits: 0, withdrawals: 0 } is the accumulator object called sums.
// console.log(sums);
// //CODE #2- ALTERNATIVE
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   ); // { deposits: 0, withdrawals: 0 } is the accumulator object called sums.
// console.log(deposits, withdrawals);
// //CODE #3- ALTERNATIVE
// const sums3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums3);

// //IMPORTANT Exercise
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');

//   return titleCase;
// };
// let x = convertTitleCase('this is a nice title');
// let y = convertTitleCase('this is a LONG title but not too long');
// let z = convertTitleCase('and here is another title with an EXAMPLE');
// console.table([x, y, z]);

//CODING CHALLENGE #4
// /*
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:
// const dogs = [
// { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
// { weight: 8, curFood: 200, owners: ['Matilda'] },
// { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
// { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// GOOD LUCK 😀
// */
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// //#1
// dogs.map(dog => (dog.optimalFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);
// //#2
// const dogSarah = dogs.find(el => el.owners.includes('Sarah'));
// dogSarah.curFood > dogSarah.optimalFood * 1.1
//   ? console.log("Sarah's dog is eating too much")
//   : dogSarah.curFood < dogSarah.optimalFood * 0.9
//   ? console.log("Sarah's dog is eating too little")
//   : console.log("Sarah's dog is eating optimal");
//#3
// //PRELIMINARY CODE
// const { ownersEatTooMuch, ownersEatOptimum, ownersEatTooLittle } = dogs.reduce(
//   (acc, curr) => {
//     if (curr.curFood > curr.optimalFood * 1.1) {
//       acc.ownersEatTooMuch.push(curr.owners.flat());
//       return acc;
//     } else if (curr.curFood < curr.optimalFood * 0.9) {
//       acc.ownersEatTooLittle.push(curr.owners.flat());
//       return acc;
//     } else {
//       acc.ownersEatOptimum.push(curr.owners.flat());
//       return acc;
//     }
//   },
//   {
//     ownersEatTooMuch: [],
//     ownersEatOptimum: [],
//     ownersEatTooLittle: [],
//   }
// );
// console.log(`Eating too much dogs' owners are ${ownersEatTooMuch.join( and ) },
// Optimum eating dogs' owners are ${ownersEatOptimum.join( and )},
// Eating too little dogs' owners are ${ownersEatTooLittle.join( and )}`);
// //REFINED CODE
// const { ownersEatTooMuch, ownersEatOptimum, ownersEatTooLittle } = dogs.reduce(
//   (acc, curr) => {
//     acc[
//       curr.curFood > curr.optimalFood * 1.1
//         ? 'ownersEatTooMuch'
//         : curr.curFood < curr.optimalFood * 0.9
//         ? 'ownersEatTooLittle'
//         : 'ownersEatOptimum'
//     ].push(curr.owners.flat()); // OR ****.push(...curr.owners);
//     return acc;
//   },
//   {
//     ownersEatTooMuch: [],
//     ownersEatOptimum: [],
//     ownersEatTooLittle: [],
//   }
// );
// //#4
// console.log(`Eating too much dogs' owners are ${ownersEatTooMuch},
// Optimum eating dogs' owners are ${ownersEatOptimum},
// Eating too little dogs' owners are ${ownersEatTooLittle}`);
// //#5
// const msg = dogs.some(curr => curr.curFood === curr.optimalFood);
// console.log(msg);
// //#6
// const msg2 = dogs.some(
//   curr =>
//     curr.curFood > curr.optimalFood * 0.9 &&
//     curr.curFood < curr.optimalFood * 1.1
// );
// console.log(msg2);
// //#7
// const okayEatingDogsArr = dogs.filter(
//   curr =>
//     curr.curFood > curr.optimalFood * 0.9 &&
//     curr.curFood < curr.optimalFood * 1.1
// );
// console.log(okayEatingDogsArr);
// //#8
// //ASCENDING ORDER
// const copydogs = dogs.slice().sort((a, b) => a.optimalFood - b.optimalFood);
// console.log(copydogs);
