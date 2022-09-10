'use strict';

// // DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

//LESSON 170 CONVERTING AND CHECKING NUMBERS

// console.log(23 === 23.0);
// //Base 10 - 0 to 9
// //Binary base 2 - 0 to 1
// console.log(0.1 + 0.2);

// //IMPORTANT STRING TO NUMBER Conversion
// console.log(Number('23'));
// console.log(+'23'); //turns string into number similar to Number() method

// //IMPORTANT Parsing INT / FLOAT
// console.log(Number.parseInt('30px')); //parseInt requires the string to start withg a number
// console.log(Number.parseInt('30.5px', 10)); //base 10 number
// console.log(Number.parseInt('e30')); //NaN

// console.log(Number.parseInt(' 2.5rem   ')); //returns Int
// console.log(Number.parseFloat(' 2.5rem   ')); //returns Float

// //IMPORTANT (isNaN) - boolean result IS ONLY USED TO CHECK IF VALUE IS NAN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 10));
// console.log(Number.isNaN(23 / 0)); //IMPORTANT isNaN ignores Infinity

// //IMPORTANT BETTER WAY OF CHECKING IF AN ENTRY IS A NUMBER INCLUDING INFINITY
// console.log(Number.isFinite(20)); //NUMBER
// console.log(Number.isFinite('20')); //NAN
// console.log(Number.isFinite(+'20')); //NUMBER
// console.log(Number.isFinite(+'20x')); //NAN
// console.log(Number.isFinite(23 / 10)); //NUMBER

// //IMPORTANT  CHECK IF THE NUMBER IS AN INTEGER

// console.log(Number.isInteger(23)); //true
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23.5)); //false

//LESSON 171 MATH AND ROUNDING

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.min(5, 18, 23, 11, 2));
// console.log(Math.max('5', 18, 23, '11', 2));
// console.log(Math.min('5', 18, 23, '11', 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// //RANDOM NUMBERS
// //IMPORTANT MATH.FLOOR IS BETTER AS IT ALSO DEALS BETTER WITH NEGATIVE NUMBERS
// console.log(Math.floor(Math.random() * 6) + 1); // random between 1<=...<=6
// console.log(Math.trunc(Math.random() * 6) + 1); // random between 1<=...<=6

// //IMPORTANT INCLUSIVE MIN TO MAX NORMALLY DISTRIBUTED FLOAT RANDOM NUMBER
// const randomInt = (min, max) =>
//   Math.floor(
//     Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
//   );
// //IMPORTANT INCLUSIVE MIN TO MAX NORMALLY DISTRIBUTED INTEGER RANDOM NUMBER
// const randomInt2 = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// console.table(randomInt(10, 30), randomInt2(10, 30)); //random between 10<=...<=30

// //ROUNDING INTEGERS
// console.log('******MATH.TRUNC******');
// console.log(Math.trunc(-23.3));
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(-23.9));
// console.log(Math.trunc(23.9));
// console.log('******MATH.ROUND******');
// console.log(Math.round(-23.3));
// console.log(Math.round(23.3));
// console.log(Math.round(-23.9));
// console.log(Math.round(23.9));
// console.log('******MATH.CEIL******');
// console.log(Math.ceil(-23.3));
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(-23.9));
// console.log(Math.ceil(23.9));
// console.log('******MATH.FLOOR******');
// console.log(Math.floor(-23.3));
// console.log(Math.floor(23.3));
// console.log(Math.floor(-23.9));
// console.log(Math.floor(23.9));

// //ROUNDING DECIMALS
// console.log('******to.fixed() METHOD******');
// //RETURNS STRING
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

//LESSON 172 REMAINDER OPERATOR

// console.log(5 % 2); //5=2*2+1
// console.log(8 % 3); //8=2*3+2

// const isEven = n => n % 2 === 0; //IMPORTANT LET US CHECK IF THE NUMBER IS EVEN
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(412));

//LESSON 173 NUMERIC SEPARATORS

// // 287,460,000,000
// //SIMILARLY NUMERIC SEPARATORS ALLOWS US TO DO THIS KIND OF NON DESTRUCTIVE HUMAN FRIENDLY SEPARATORS
// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee = 15_00; //same number
// const transferFee2 = 1_500; //same number

// const PI = 3.141_15;
// // const PI = 3_.14115; //illegal near non numerics characters
// // const PI = 3._14115; //illegal near non numerics characters
// console.log(PI);

// console.log(Number('230000'));
// console.log(Number('230_000')); //IMPORTANT NaN - nonrelevant usecase

// console.log(parseInt('230_00')); //230 --> IMPORTANT: parseint and _ ignores the right hand side
// console.log(parseInt('2_30_00')); //2

//LESSON 174 WORKING WITH BIGINT

// //the biggest number JS can represent in 64bit
// console.log(2 ** 53 - 1);
// //similarly
// console.log(Number.MAX_SAFE_INTEGER);

// //IMPORTANT BIGINT - n transforms the number into bigint number
// console.log(4884848844085088494645646464692929993854n);

// //BIGINT OPERATIONS
// console.log(100000n + 100000n);
// console.log(10002623636363666362772022739827438249629840n * 122112200000n);
// //IMPORTANT CANT MIX BIGINT WITH REGUALR NUMBER
// const huge = 191929292929939943944646466464646646377373n;
// const num = 23;
// // console.log(huge * num); //illegal
// console.log(huge * BigInt(num)); //first change regular number to bigint()

//LESSON 175 CREATING DATES

// //Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2005'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0300
// console.log(new Date(2037, 10, 31)); //Tue Dec 01 2037 00:00:00 GMT+0300

// console.log(new Date(0)); //unix date
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //unix date in miliseconds

// //Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// //RETRIEVE THE PARTICULAR DATE DATA
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //internationalized string not local
// console.log(future.getTime()); //gets it in miliseconds
// console.log(new Date(2142246180000)); //gets you the full date stamp from miliseconds
// //SET THE PARTICULAR DATE DATA
// future.setFullYear(2040);
// console.log(future);

//LESSON 177 OPERATIONS WITH DATES

// const future = new Date(2037, 10, 19, 15, 23); //IMPORTANT string output
// console.log(future); //string output
// console.log(+future); //IMPORTANT chages to number in miliseconds! so that we can make modifications
// const calcDaysPassed = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); // turn into days from miliseconds after substraction of dates

// const days1 = calcDaysPassed(
//   new Date(2037, 3, 14),
//   new Date(2037, 3, 24, 10, 8)
// );
// console.log(days1);

//LESSON 178 INTERNATIONALIZING DATES (INTL)

// setInterval(function () {
//   const now = new Intl.DateTimeFormat('tr-TR', {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   }).format(new Date());
//   console.log(now);
// }, 1000);

//LESSON 179 INTERNATIONALIZING NUMBERS (INTL)

// const num = 3888848484.23;
// const options = {
//   style: 'currency',
//   // unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log(
//   'US***********',
//   new Intl.NumberFormat('en-US', options).format(num)
// );
// console.log(
//   'TR***********',
//   new Intl.NumberFormat('tr-TR', options).format(num)
// );
// console.log(
//   'SY***********',
//   new Intl.NumberFormat('ar-SY', options).format(num)
// );
// console.log(navigator.language); //IMPORTANT: SOLICIT BROWSER LANGUAGE
// console.log(new Intl.NumberFormat(navigator.language, options).format(num)); // FORMAT NUMBER WITH RESPECT TO NAVIGATOR LANGIAGE PREFERENCE

//LESSON 180 TIMERS: SETTIMEOUT/CLEARTIMEOUT AND SETINTERVAL

// //NOTE we delay calling the function for certain amount of time
// //#1. SETTIMEOUT() WITHOUT ARGUMENTS
// setTimeout(() => console.log('Here is your pizza 🍕'), 1000); //settimeout function with a call back function in 1000 ms
// console.log('Waiting...'); //waiting appears on the screen and after 1000ms settimeout calls the function - ASYNC javascript in a nutshell
// //#2. SETTIMEOUT() WITH ARGUMENTS INTERNALLY TYPED- //VERY IMPORTANT
// const pizzaTimer1 = setTimeout(
//   (ing1, ing2) => console.log(`Here is your ${ing1} and ${ing2} pizza 🍕`),
//   3000,
//   'olives', //arguments listed after timeout declaration
//   'spinach'
// ); //settimeout function with a call back function in 3000 ms with arguments
// //#3. SETTIMEOUT() WITH AERGUMENTS EXTERNALLY TYPED - //VERY IMPORTANT
// const ingredients = ['shrimp', 'spinach'];
// const pizzaTimer2 = setTimeout(
//   (ing1, ing2) => console.log(`Here is your ${ing1} and ${ing2} pizza 🍕`),
//   5000,
//   ...ingredients // spread operator takes out the arguments from the array
// );
// //CLEARTIMEOUT
// //IMPORTANT: CLEARTIMEOUT - this disallows pizzaTimer2 to be run as the condition is met!
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer2);
// //SETINTERVAL()
// setInterval(function () {
//   const now = new Intl.DateTimeFormat('tr-TR', {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   }).format(new Date());
//   console.log(now);
// }, 1000);
