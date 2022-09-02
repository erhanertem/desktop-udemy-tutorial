'use strict';

// LESSON: 93 SCOPING IN PRACTICE

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   console.log(firstName); //can access global scope variable
//   // console.log(lastName); //ref error

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven'; // current scope variable with the same name overrides the one outside the block scope chain
//       const str = `Oh you are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!'; // can manipulate the parent scope var if no let/const is used
//     } // can access outer scope vars
//     console.log(millenial); // can access innerscope block with vars
//     // add(2, 3); //function @ innerscope can not be accessed with 'strict' mode on.
//     // console.log(str); // error - cant access innerscope block

//     console.log(output);
//   }
//   printAge(); // can acess outerscope vars - parent and global scope variables
//   // console.log(age); // can access global vars

//   return age;
// }

// const firstName = 'Erhan';
// calcAge(1991);
// // console.log(age); // cant acess variable inside a function scope

// LESSON: 95 HOISTING AND TDZ IN PRACTICE

// //HOISTING WITH VARS
// console.log(me); // hoisted as undefined
// // console.log(job); //err
// // console.log(year); //err

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //HOISTING WITH FUNCTIONS

// console.log(addDecl(2, 3)); // hoisted - not need to be declared before
// console.log(addExpr(2, 3)); // not hoisted - cant call before declaring it
// console.log(addArrow(2, 3)); // not hoisted - cant call before declaring it

// //declaration function
// function addDecl(a, b) {
//   return a + b;
// }

// //expression function
// const addExpr = function (a, b) {
//   return a + b;
// };

// //arrow function
// const addArrow = (a, b) => a + b;

// //EXAMPLE
// if (!numProducts) deleteShoppingCart();
// // var numProducts = 10; // hoisted as undefined trnaslates to falsy which leads to calling deleteShoppingCart()
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// // NOTE: declare vars @ the top and do not use var

// //EXAMPLE
// var x = 1; // NOTE: creates property on window object
// let y = 2;
// const z = 3;
// console.log(x === window.x); //truthy
// console.log(y === window.y); //falsy
// console.log(z === window.z); //falsy

// LESSON: 97 THE THIS KEYWORD

// console.log(this); //refers to window object @ global enviroment
// //this in declaration function
// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1991); //this-undefined - nonexisting parent
// //this in expression function
// const calcAge2 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge2(1991); //gets its own this-undefined - nonexisting parent
// //this in arrow function
// const calcAge3 = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge3(1991); //arrow functions doesnt own this- existing parent - global window object

// // METHOD BORROWING
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //points out to accomodating object - jonas
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); //46

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // TRANSFERS calcAge() to matilda object - method borrowing
// matilda.calcAge(); // this points to matilda not jonas!

// const f = jonas.calcAge;
// // f(); //throws error - as there is no owner for the this keyword.

// LESSON: 98 THIS KEYWORD PITFALLS - REGULAR FUNCTIONS VS ARROW FUNCTIONS

// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   //regular func
//   calcAge: function () {
//     console.log(2037 - this.year);

//     // //#1. this inside the subfunction refersto itself. which is undefined.
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // //#2. In order to solve reference issue with jonas <this>, this has to be brought inside the sub-function as variable. PRE ES6 SOLUTION
//     // const carryonthis = this;
//     // const isMillenial = function () {
//     //   console.log(carryonthis);
//     //   console.log(carryonthis.year >= 1981 && carryonthis.year <= 1996);
//     // };
//     //#3. In order to to solve reference issue with jonas <this> AS ES6 SOLUTION, we transform the sub function to arrow function to have its parents this value as arrow functions do not bear their own this value.
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   // // arrow func
//   // greet: () => {
//   //   console.log(this); // this refers to window object
//   //   console.log(`Hey ${this.firstName}`);
//   // },
// };

// // jonas.greet();
// // NOTE: arrow function do not have its own this and refers to global this which is window object that has this undefined. As long as firstName variable is defined at global level, it would return log. Therefore do not ever use an arrow function inside an object calling for <this> keyword
// jonas.calcAge();

// /*
// IMPORTANT:

// OBJECT > ARROW FUNCTION RETURNS A THIS VALUE OF WINDOWS OBJECT - UNDEFINED.
// object = {
//   f = () => {this: undefined
//   }
// }

// OBJECT > REGULAR FUNCTION > REGULAR FUNCTION RETURNS A THIS VALUE OF UNDEFINED.
// object = {
// f(){this: object
//   fs(){this: undefined
//   }
// }

// OBJECT > REGULAR FUNCTION > ARROW FUNCTION RETURNS A THIS VALUE OF THE PARENT FUNCTION.
// object = {
// f(){this: object
//   f = () => {this: object
//   }
// }
// */

// //ARGUMENTS keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// let mi;
// mi = addExpr(2, 5);
// console.log(mi);
// mi = addExpr(2, 5, 8, 12);
// console.log(mi);

// LESSON: 99 PRIMITIVES VS OBJECTS

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

// LESSON: 100 PRIMITIVES VS OBJECTS IN PRACTICE

// //#1. Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);
// //#2. Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);
// //NOTE:  They reference the same memory adress in the heap.
// // marriedJessica = {} //creates a new memory adress in the heap but requires let not const in this case
// //#3. SHALLOW COPY A REFERENCE TYPE
// const marriedJessicaCopy = Object.assign({}, jessica);
// marriedJessicaCopy.lastName = 'ERTEM';
// marriedJessicaCopy.family.push('Mary');
// marriedJessicaCopy.family.push('John');
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessicaCopy);
// //IMPORTANT: Deep clone needs to be practiced to distinct between jessica and marriedJessicaCopy.
