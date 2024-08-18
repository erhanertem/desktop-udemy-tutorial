'use strict';

//LESSON 128 DEFAULT PARAMETERS

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1, //ES6 way of declaring defaults
//   price = 199 * numPassengers //ES6 way of declaring parameterized defaults
// ) {
//   // numPassengers = numPassengers || 1; //set the default if not entered in ES5
//   // price = price || 199

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// console.log(createBooking('LH123'));
// console.log(createBooking('LH123', 2, 800));
// console.log(createBooking('LH123', 2));
// console.log(createBooking('LH123', 5));
// console.log(createBooking('LH123', undefined, 500)); //IMPORTANT can skip by declaring undefined for the argument so it defaults to 1 for numPassengers

//LESSON 129 HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

// const flight = 'LH234';
// const erhan = {
//   name: 'Erhan ERTEM',
//   passport: 2342424261,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; //IMPORTANT this does not effect the flight variabkle outside the function
//   passenger.name = 'Mr.' + passenger.name; //IMPORTANT BE CAREFULL! this mutates the object which enters as argument of the function AS object is refwerenced in the heap.
//   if (passenger.passport === 2342424261) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, erhan);

// console.log(flight);
// console.log(erhan);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(erhan);

// console.log(erhan);

// checkIn(flight, erhan);

//LESSON 131 FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //HIGHER ORDER FUNCTION
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); //IMPORTANT NAME OF THE FUNCTION BEING CALLED AS AN ARGUMENT OF TRANSFORMER
// };
// //Calling the function
// transformer('Javascript is the best!', upperFirstWord); //upperFirstWord is called a call-back function
// transformer('Javascript is the best!', oneWord); //oneWord is called a call-back function

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5); //high5 is the call-back function and addEventListener is the higherorder function

// ['Jonas', 'Martha', 'Adam'].forEach(high5); // call-back function inside a n array method/function

//LESSON 132 FUNCTIONS RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// //#1. CALLING INDIRECTLY BY ASSIGNING IT TO A VALUE
// const greeterHey = greet('Hey');
// greeterHey('Jonas!');
// greeterHey('Matilda!');
// //#2. CALLING DIRECTLY
// greet('Hey')('Jonas!'); //like a chained function
// //#3. ARROW FUNCTION REWRITE
// const greetArrow = greeting => name =>
//   console.log(console.log(`${greeting} ${name}`));

//LESSON 133 THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Erhan ERTEM');
// lufthansa.book(635, 'Dennis TURNER');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// //IMPORTANT MANUALLY POINTING THIS KEYWORD OFF THE OBJECT BLOCK
// const book = lufthansa.book;
// // book(23, 'Sarah Williams'); //IMPORTANT DOES NOT WORK!!!! Returns undefined as this keyword is no longer referring to lufthansa. It is simply off the block. In order to point JS the this keyword we use apply/call methods.

// //NOTE #1. CALL METHOD
// book.call(eurowings, 23, 'Sarah Williams'); //IMPORTANT CALL POINTS THE OBJECT OF THIS KEYWORD THEN THE PERTINENT FUNCTIONS USUAL ARGUMENTS
// console.log(eurowings);
// book.call(lufthansa, 24, 'Demi Moore');
// console.log(lufthansa);
// book.call(swiss, 583, 'Mary Banioa');
// console.log(swiss);

// //NOTE #2. APPLY METHOD (NOT MODERN)
// //APPLY DO NOT TAKE A LIST OF ARGUMENTS AFTER THE THIS KEYWORD OBJECT BUT AN ARRAY OF ARGUMENTS
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); //IMPORTANT  APPLY POINTS THE OBJECT OF THIS KEYWORD AND THEN INSERTS THE FUNCTION ARGUMENTS AS AN ARRAY
// book.call(swiss, ...flightData); //IMPORTANT REWRITE IN A MORE MODERN WAY WITH THE SPREAD OPERATOR

//LESSON 134 THE BIND METHOD

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// //#1. //NOTE: FULL FUNCTION BINDING
// const bookEW = lufthansa.book.bind(eurowings);
// const bookLH = lufthansa.book.bind(lufthansa);
// const bookSX = lufthansa.book.bind(swiss);
// bookEW(23, 'Steven SPIELBERG');

// //#2. //NOTE: PARTIAL-PRESET FUNCTION BINDING
// const bookEW23 = lufthansa.book.bind(eurowings, 23); //IMPORTANT partial preset function binding
// bookEW23('Jonas Schmedtmann');
// bookEW23('Erhan ERTEM');

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// //A. binding a partial preset
// const addVAT = addTax.bind(null, 0.23); //this : null as we dont care about it, 0.23 : rate
// console.log(addVAT(100)); // 100: value - the remaining argument for the function to return value

// //B. Similar to A, but with function returning a function style
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// //calling a preset assigned to a function
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// //#3. //NOTE: WITH EVENT LISTENERS
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // VERY IMPORTANT:  IN EVENT HANDLER FUNCTIONS THE THIS KEYWORD POINTS TO BUY QUERYSELECTOR. SO WE NEED A BIND METHOD THAST POINTS TO THE FUNCTION OF LUFTHANSA OBJECT

//CODING CHALLENGE #1
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀

*/

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   //#1
//   registerNewAnswer() {
//     const input = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (
//       typeof input === 'number' &&
//       input >= 0 &&
//       input < this.answers.length
//     ) {
//       this.answers[input]++;
//       // console.log(this.answers);
//     } else {
//       console.log('Please enter a correct response');
//     }

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'string') {
//       console.log(`Poll results are as follows: ${this.answers.join(', ')}`);
//     } else if (type === 'array') {
//       console.log(this.answers);
//     }
//   },
// };
// //#2
// // document.body
// //   .querySelector('.poll')
// //   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: data1 }); //set this to answers: to our external dataset, then the function argument of "string"
// // poll.displayResults.call({ answers: data2 }, 'string') //set this to answers: to our external dataset, then the function argument of "string"

//LESSON 136 IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// //THIS TYPE OF FUNCTION IS ESPECIALLY USEFULL IN ASYNC/AWAIT FUNCTIONS

// const runOnce = function () {
//   console.log('This will never run again.');
// };
// runOnce(); // NOT A IIFE

// //REGULAR FUNCTION IIFE
// (function () {
//   console.log('This will never run again.');
//   const isPrivate = 23;
// })(); //IIFE EXAMPLE - A FUNCTION CALLING ITSELF THE MOMENT CREATED
// console.log(isPrivate); //Throws Error
// //ARROW FUNCTION IIFE
// (() => console.log('This will never run again.'))();

//LESSON 137 CLOSURES

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//LESSON 138 MORE CLOSURE EXAMPLES

// //EXAMPLE

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g(); //FIRST RUN THIS FUNCTION TO PROCURE/CREATE F FUNCTION
// f(); //ONCE G IS EXECUTED AND F IS CREATED, WE CAN CALL F FUNCTION.

// h();
// f(); //f function is different this time as h() mutates f() and its belonging block variables

// //EXAMPLE

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

//CODING CHALLENGE #2
// /*
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
// GOOD LUCK 😀
// */

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('clicked', function () {
//     header.style.color = 'blue';
//   });
// })();
