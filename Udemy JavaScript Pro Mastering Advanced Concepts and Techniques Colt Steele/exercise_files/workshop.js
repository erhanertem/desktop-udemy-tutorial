// // SECTION 02
// class BankAccount {
//   constructor(accountNumber, accountHolder, balance = 0) {
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amt) {
//     if (amt > 0) {
//       this.balance += amt;
//       console.log(`You deposited $${amt}.  New balance is: $${this.balance}`);
//     } else {
//       console.log("Can't deposit a negative amount");
//     }
//   }

//   withdraw(amt) {
//     if (amt > this.balance) {
//       console.log("You can't withdraw that much!");
//     } else {
//       this.balance -= amt;
//       console.log(`You withdrew $${amt}.  New balance is: $${this.balance}`);
//     }
//   }
// }

// class Triangle {
//   constructor(a, b) {
//     if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

//     if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

//     this.a = a;
//     this.b = b;
//   }
//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }

//   sayHi() {
//     return 'HELLO FROM A TRIANGLE!!';
//   }
// }

// class ShyTriangle extends Triangle {
//   describe() {
//     return '(runs and hides)';
//   }

//   beShy() {
//     return 'I AM SHY!!!';
//   }
// }

// class Triangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }

//   describe() {
//     return `Area is ${this.getArea()}.`;
//   }
// }

// class ColorTriangle extends Triangle {
//   constructor(a, b, color) {
//     super(a, b);
//     this.color = color;
//   }
// }

// class ColorMoodTriangle extends ColorTriangle {
//   constructor(a, b, color, mood) {
//     super(a, b, color);
//     this.mood = mood;
//   }
// }

// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   static meow() {
//     console.log('THIS IS: ', this);
//   }

//   static species = 'felis catus';
// }

// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   static registerStray() {
//     const names = [
//       'Muffin',
//       'Biscuit',
//       'Sleepy',
//       'Dodo',
//       'Princess Butterface',
//     ];
//     const name = choice(names);
//     return new Cat(name, 'unknown');
//   }
//   meow() {
//     return `${this.name} says meow`;
//   }
// }

// function choice(arr) {
//   const randIdx = Math.floor(Math.random() * arr.length);
//   return arr[randIdx];
// }

// // SECTION 03
// class Circle {
//   static allowedColors = new Set(['red', 'green', 'blue']);

//   constructor(radius, color) {
//     this._radius = radius;
//     this.setColor(color);
//   }

//   setColor(newColor) {
//     if (Circle.allowedColors.has(newColor)) {
//       this._color = newColor;
//     } else {
//       throw new Error('That color is not allowed');
//     }
//   }

//   get radius() {
//     return this._radius;
//   }

//   // Setter for the radius
//   set radius(value) {
//     if (value < 0) {
//       throw new Error('Radius cannot be negative!');
//     } else {
//       this._radius = value;
//     }
//   }

//   get color() {
//     return this._color;
//   }

//   set color(newColor) {
//     this.setColor(newColor);
//   }
// }

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(newName) {
//     const [first, last] = newName.split(' ');
//     this.firstName = first;
//     this.lastName = last;
//   }
// }

// // SECTION 04
// const nums = [1, 5, 3, 2, 99, 199];
// console.log(Math.max.apply(null, nums));
// console.log(Math.max(...nums));

// const butters = {
//   firstName: 'Butters',
//   lastName: 'Cluckly',
//   greet: function () {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//   },
// };

// const fluffy = {
//   firstName: 'Fluffy',
//   lastName: 'Meowson',
// };

// function greetFluffy() {
//   return butters.greet.call(fluffy);
// }

// greetFluffy();

// class Timer {
//   constructor() {
//     this.tick = 0;
//     this.timerId = null;
//   }
//   start() {
//     // this.timerId = setInterval(() => {
//     //   console.log(this.tick++);
//     //   if (this.tick > 4) this.stop();
//     // }, 1000);
//     this.timerId = setInterval(() => {
//       if (this.tick === 5) {
//         this.stop();
//       } else console.log(this.tick++);
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.timerId);
//     console.log('Timer stopped');
//   }
// }

// const a = new Timer();
// a.start();

// // SECTION 05

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof`;
//   }
//   sleep() {
//     return `${this.name} is sleeping`;
//   }
// }
// class GuideDog extends Dog {
//   constructor(name, breed, owner) {
//     super(name, breed);
//     this.owner = owner;
//   }
//   alert() {
//     return `${this.name} alerts youto danger. Good dog!`;
//   }
// }

// const chaco = new GuideDog('Chaco', 'Lab', 'Maggie');

// const elton = new Dog('elton', 'Aussie');
// elton.bark();

// // Constructor function - factory function with prototypal functions
// function Dog(name, breed) {
//   console.log('THIS IS:', this);
//   this.name = name;
//   this.breed = breed;
// }

// Dog.prototype.bark = function () {
//   return `${this.name} says woof`;
// };
// Dog.prototype.sleep = function () {
//   return `${this.name} is sleeping`;
// };

// const elton = new Dog('elton', 'Aussie');

// // Prototypal chain
// const grandparent = {
//   greet() {
//     return 'HI THERE!!!!!';
//   },
// };

// const parent = {
//   color: 'purple',
//   sing() {
//     return 'LA LA LA';
//   },
//   __proto__: grandparent,
// };

// const child = {
//   nums: 2,
//   __proto__: parent,
// };

// child.greet();

// SECTION 06
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log("RESPONSE 2", res2);
//         fetch(`${BASE_URL}/3`)
//           .then((res3) => {
//             console.log("RESPONSE 3", res3);
//             fetch(`${BASE_URL}/4`)
//               .then((res4) => {
//                 console.log("RESPONSE 4", res4);
//               })
//               .catch((err) => console.log("ERR!", err));
//           })
//           .catch((err) => console.log("ERR!", err));
//       })
//       .catch((err) => console.log("ERR!", err));
//   })
//   .catch((err) => console.log("ERR!", err));

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res2) => {
//     console.log("RESPONSE 2 ", res2);
//     return fetch(`http://nope.nope`);
//   })
//   .then((res3) => {
//     console.log("RESPONSE 3 ", res3);
//     return fetch(`${BASE_URL}/4`);
//   })
//   .then((res4) => {
//     console.log("RESPONSE 4 ", res4);
//   })
//   .catch((err) => {
//     console.log("IN THE CATCH! Error: ", err);
//   });

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make request to pokemon/4

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFourPokemon() {
//   try {
//     const res1 = await fetch(`${BASE_URL}/1`);
//     console.log(res1);

//     const res2 = await fetch(`${BASE_URL}/2`);
//     console.log(res2);

//     const res3 = await fetch(`http://nope.nope`);
//     console.log(res3);

//     const res4 = await fetch(`${BASE_URL}/4`);
//     console.log(res4);
//   } catch (e) {
//     console.log('FETCH WENT WRONG!');
//     console.log(e);
//   }
// }

// async function fetchFakeWebsite() {
//   try {
//     const res1 = await fetch(`http://nope.nope`);
//     console.log(res1);
//   } catch (e) {
//     console.log("SOMETHING WENT WRONG...");
//     console.log(e);
//   }
// }

// const results = [];
// fetch(`${BASE_URL}/1`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// });

// fetch(`${BASE_URL}/2`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// });

// fetch(`${BASE_URL}/3`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// });

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// const results = [];
// async function getPokemon1() {
//   const res = await fetch(`${BASE_URL}/1`);
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// }

// async function getPokemon2() {
//   const res = await fetch(`${BASE_URL}/2`);
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// }

// async function getPokemon3() {
//   const res = await fetch(`${BASE_URL}/3`);
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// }

// getPokemon1();
// getPokemon2();
// getPokemon3();

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// const results = [];
// async function getPokemon(num) {
//   const res = await fetch(`${BASE_URL}/${num}`);
//   results.push(res);
//   console.log(`REQUEST ${num} FINISHED!`);
// }

// getPokemon(1);
// getPokemon(2);
// getPokemon(3);

// const lotsOfFetchCalls = [
//   fetch(`${BASE_URL}/1`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.all(lotsOfFetchCalls)
//   .then((results) => {
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   });

// async function getLotsOfPokemon() {
//   try {
//     const results = await Promise.all(lotsOfFetchCalls);
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   } catch (e) {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   }
// }

// async function allSettledDemo() {
//   const GITHUB_BASE_URL = "https://api.github.com";

//   let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

//   let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

//   let badUrl = fetch("http://definitelynotarealsite.com");

//   let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

//   let anotherbadUrl = fetch("http://definitelynotarealsite.com");

//   let results = await Promise.allSettled([
//     elieP,
//     joelP,
//     badUrl,
//     coltP,
//     anotherbadUrl,
//   ]);

//   console.log(results);
//   const fulfilled = results.filter((r) => r.status === "fulfilled");
//   const rejected = results.filter((r) => r.status === "rejected");
//   console.log(fulfilled);
//   console.log(rejected);
// }

// const lotsOfFetchCalls = [
//   fetch(`http://nope.nope`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.race(lotsOfFetchCalls)
//   .then((winner) => {
//     console.log(winner);
//   })
//   .catch((err) => console.log(err));

// function wait(duration) {
//   const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("this is the resolved value!");
//     }, duration);
//   });
//   return p;
// }

// function randomRejectResolve() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve("Pickles");
//       } else {
//         reject("Error!!!!!");
//       }
//     }, 2000);
//   });
// }

// async function demo() {
//   console.log("hi");
//   const val = await wait(2000);
//   console.log("there");
//   console.log(val);
// }

// wait(5000).then((val) => console.log(val));

// randomRejectResolve()
//   .then((val) => {
//     console.log("INSIDE first .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 2nd .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 3rd .then() callback ", val);
//   })
//   .catch((e) => console.log("INSIDE CATCH", e));

// // SECTION 07
// // Optional chaining @ object keys
// const long = user?.address?.coodinates?.long;
// // Optional chaining @ functions inside an object
// user.greet?.();
// //Nullish Coalescing
// const age = user?.age ?? 'IDK THE AGE';
// console.log('AGE IS ', age);
// //Numeric Seperators
// const withSeperators = 1_000_000_000;
// const withoutSeperators = 1000000000;
// // Prototype.at()
// const colors = ['red', 'orange', 'yellow', 'green'];
// colors[0];
// colors.at(1);
// colors.at(-1);
// // Replace All()
// const str =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. cAt CAT cat ccAT.';
// const a = str.replaceAll('cat', 'x');
// console.log(a);
// const b = str.replaceAll(new RegExp('cat', 'gi'), 'x');
// console.log('b :', b);
// console.log(b);
// //||= operator
// const todo = { priority: '', task: 'Finish Editing Course' };
// const a = (todo.priority ||= 'MEDIUM');
// console.log('a :', a);
// // todo.priority || (todo.priority = 'MEDIUM');
// // &&= OPERATOR
// let num = 0;
// num &&= 50;
// let loggedInUser = { username: 'Taco' };
// loggedInUser &&= { ...loggedInUser, colorPreference: 'purple' };
// //??=OPERATOR
// let score = 0;
// score ??= 0;
// score ??= 100;
// function doSomething(options = {}) {
//   options.timeout ??= 5000;
//   options.retries ??= 3;
//   console.log(options);
// }
// doSomething();

// class MyClass {
//   static sharedState;
//   static {
//     this.sharedState = 'Initialized';
//   }
// }

// console.log(MyClass.sharedState);

// // SECTION 08
// function blah() {
//   return { name: 'chickenface' };
// }
// //Generator functions
// function* evens(n) {
//   while (true) {
//     yield n;
//     n += 2;
//   }
// }
// const evenGen = evens(10);
// evenGen.next();

// function* myCats() {
//   yield 'Blue';
//   yield 'Kitty';
//   yield 'Creamy';
//   yield 'Sourcy';
// }
// const catGenerator = myCats();
// catGenerator.next();

// function* fibonacci() {
//   let a = 0,
//     b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// const fibGenerator = fibonacci();
// console.log('fibGenerator.next(); :', fibGenerator.next().value);
// console.log('fibGenerator.next(); :', fibGenerator.next().value);
// console.log('fibGenerator.next(); :', fibGenerator.next().value);
// console.log('fibGenerator.next(); :', fibGenerator.next().value);
// console.log('fibGenerator.next(); :', fibGenerator.next().value);
// console.log('fibGenerator.next(); :', fibGenerator.next().value);

// const allImages = Array.from(
//   { length: 1000 },
//   (_, i) => `https://placeimg.com/640/480/any?image=${i}`
// );
// function* getImageBatch(images, batchSize = 10) {
//   let currIndex = 1;
//   while (currIndex < images.length) {
//     yield images.slice(currIndex, currIndex + batchSize);
//     currIndex += batchSize;
//   }
// }

// const imageGen = getImageBatch(allImages);
// console.log('imageGen.next().value :', imageGen.next().value);

// function parseAndCheck(arr) {
//   let parsedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const parsed = parseFloat(arr[i]);
//     if (Number.isNaN(parsed)) {
//       throw new Error('Invalid Number');
//     }
//     parsedArray[i] = parsed;
//   }
//   return parsedArray;
// }

// // function parseAndCheck(values) {
// //   return values.map(value => {
// //     const parsed = parseFloat(value);
// //     if (Number.isNaN(parsed) === true) {
// //       throw new Error('Invalid Number');
// //     }
// //     return parsed;
// //   });
// // }

// const result = parseAndCheck(['10px', '02px', 'px']);
// console.log('result :', result);

// function decrementArrayElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = --arr[i];
//   }
//   return arr;
// }

// function* rangeGenerator(start, end) {
//   if (start <= end) {
//     for (let i = start; i <= end; i++) {
//       yield i;
//     }
//   } else {
//     for (let i = start; i >= end; i--) {
//       yield i;
//     }
//   }
// }
// const rangeGen = rangeGenerator(1, 5);

// // SECTION 09
