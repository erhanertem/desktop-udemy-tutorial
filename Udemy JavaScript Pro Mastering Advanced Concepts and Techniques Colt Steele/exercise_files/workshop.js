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

// // SECTION 06
// const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
// const url = `${BASE_URL}/1`;

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
// //>Optional chaining @ object keys
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
// //>Replace All()
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
// //>&&= OPERATOR
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
// //>Scope with var
// var color = 'red';

// function blah() {
//   console.log(color);
//   var animal = 'Fishy Reptile';
//   console.log(animal);
// }
// blah();

// if (true) {
//   console.log(color);
//   var food = 'chicken Parmesan';
// }

// console.log(food);
// console.log(animal);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('After the loop is over', i);

// //>Scope with let & const
// var color = 'teal';
// let origin = 'Ethiopia';
// console.log('origin :', origin);
// window.origin;
// console.log('window.origin :', window.origin);
// const city = 'Izmir';
// // city = 'Istanbul';
// if (true) {
//   const animal = 'Filthy fish';
//   console.log(animal);
// }
// console.log(animal);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);
// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

// //>Scope Chain
// let age = 10;
// function outher() {
//   //   let age = 'ageless';
//   function inner() {
//     // let age = 'Ethernal';
//     // age = 5;
//     console.log(age);
//   }
//   inner();
// }
// outher();

// //>Static Scope
// let animal = 'Barn Owl';
// function printAnimal() {
//   console.log(animal);
// }
// function alsoPrintAnimal() {
//   let animal = 'Idiot Owl';
//   printAnimal();
//   console.log('printAnimal() :', printAnimal());
// }
// alsoPrintAnimal();

// //>Hoisting
// console.log(food);
// var food = 'pizza';

// //>IIEFs
// (function () {
//   console.log('Hello from IIFE');
// })();

// //>CLOSURES
// function idGenerator() {
//   let count = 1;
//   return function generate() {
//     return count++;
//   };
// }
// const nextId = idGenerator();
// console.log('nextId() :', nextId());
// console.log('nextId() :', nextId());
// console.log('nextId() :', nextId());
// console.log('nextId() :', nextId());

// function counter() {
//   let count = 0;
//   return {
//     increment: function () {
//       return count++;
//     },
//     decrement: function () {
//       return count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }
// const count = counter();

// const count = (function counter() {
//   let count = 0;
//   return {
//     increment: function () {
//       return count++;
//     },
//     decrement: function () {
//       return count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());

// //>CLOSURES AS FACTORY FUNCTIONS
// function createExponentFunction(exp) {
//   return function (val) {
//     return val ** exp;
//   };
// }
// const square = createExponentFunction(2);
// const cube = createExponentFunction(3);
// square(2);
// cube(2);

// function uniqueIdGenerator(prefix) {
//   let id = 0;
//   return function () {
//     id += 1;
//     return `${prefix}${id}`;
//   };
// }
// const getBookId = uniqueIdGenerator('book-');
// const getUserId = uniqueIdGenerator('user_');
// getBookId();
// getUserId();

// //>CLOSURES @ EVENTLISTENERS
// let count = 0;
// document.querySelector('.button').addEventListener('click', function () {
//   count++;
//   console.log(`You clicked me ${count} times`);
// });

// document.querySelector('.button').addEventListener(
//   'click',
//   (function () {
//     let count = 0;
//     return function () {
//       count++;
//       console.log(`You clicked me ${count} times`);
//     };
//   })()
// );

// function createCounterBtn(id) {
//   const btn = document.getElementById(id);
//   let count = 0;
//   btn.addEventListener('click', function () {
//     count++;
//     btn.innerText = `Clicked ${count} times`;
//   });
// }

// createCounterBtn('btn1');
// createCounterBtn('btn2');
// createCounterBtn('btn3');

// //>CLOSURES @ LOOPS
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(++i);
//     console.log('Time is UP!!!');
//   }, 1000);
// }

// function guessingGame() {
//   const secretNumber = Math.random() * 100;
//   let count = 0;
//   let gameOver = false;
//   return function (guess) {
//     if (gameOver) {
//       return 'The game is over, you already won!';
//     }
//     count++;
//     if (guess === secretNumber) {
//       gameOver = true;
//       return `You win! You found ${secretNumber} in ${count} ${
//         count === 1 ? 'guess' : 'guesses'
//       }.`;
//     }
//     if (guess < secretNumber) {
//       return `${guess} is too low!`;
//     }
//     if (guess > secretNumber) {
//       return `${guess} is too high!`;
//     }
//   };
// }

// let game = guessingGame();
// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"

// function specialAdd(total) {
//   if (total === undefined) return 0;
//   return function addNext(num) {
//     if (num === undefined) return total;
//     total += num;
//     return addNext;
//   };
// }

// specialAdd(); // 0
// console.log('specialAdd() :', specialAdd());
// specialAdd(1)(2)(); // 3
// console.log('specialAdd(1)(2)() :', specialAdd(1)(2)());
// specialAdd(2)(8)(5)(1)(); // 16
// console.log('specialAdd(2)(8)(5)(1)() :', specialAdd(2)(8)(5)(1)());

// //SECTION 10
//>TIMERS
// function showNotification(message, duration) {
//   const notification = document.createElement('div');
//   notification.innerText = message;
//   notification.className = 'notification';
//   notification.style.display = 'block';
//   notification.style.backgroundColor = 'green';
//   notification.style.color = 'white';
//   notification.style.width = '3%';
//   notification.style.margin = 'auto';
//   notification.style.padding = '10px';
//   notification.style.textAlign = 'center';
//   document.body.appendChild(notification);

//   setTimeout(() => {
//     notification.remove();
//   }, duration);
// }
// showNotification('Danger', 5000);
// showNotification('Holy', 3000);
// showNotification('Molly', 1000);

// setInterval(() => {
//   console.log('It has been 2 seconds');
// }, 2000);

// function startCountdown(duration) {
//   let timeRemaining = duration;
//   const h1 = document.getElementById('timer');
//   h1.innerText = timeRemaining;
//   timeRemaining--;
//   const intervalId = setInterval(() => {
//     h1.innerText = timeRemaining;
//     timeRemaining--;

//     if (timeRemaining < 0) {
//       clearInterval(intervalId);
//       h1.innerText = 'time is Up!';
//     }
//   }, 100);
// }
// startCountdown(10);

// function greet() {
//   console.log('Hello There!!');
// }
// const timeoutId = setTimeout(greet, 20000);
// clearTimeout(timeoutId); //cancelled timeout prematurely

// const cancelBtn = document.querySelector('#cancel');
// const timeoutId = setTimeout(() => {
//   window.open('http://www.google.com', '_blank');
// }, 5000);
// cancelBtn.addEventListener('click', () => {
//   clearTimeout(timeoutId);
//   alert('Oppsy cancelled!!');
// });

// //>Debouncing - Deliberate Pause
// function queryAPI() {
//   console.log('SEARCHING THE API!');
// }
// const searchInput = document.querySelector('#search');
// let debounceTimeout;
// searchInput.addEventListener('input', () => {
//   clearTimeout(debounceTimeout);
//   debounceTimeout = setTimeout(() => {
//     queryAPI();
//   }, 400);
// });

// function queryAPI(searchTerm, color) {
//   console.log(`SEARCHING THE API! for ${searchTerm}`);
// console.log(`COLOR ARGUMENT IS ${color}`);
// }
// const searchInput = document.querySelector('#search');
// function debounce(callback, delay) {
//   let timeoutId;
//   return (...args) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => callback(...args), delay);
//   };
// }
// searchInput.addEventListener('input', e =>
//   debouncedQueryAPI(e.target.value, 'purple')
// );
// const debouncedQueryAPI = debounce(queryAPI, 400);

// //>Throttling
// function getRandomColor() {
//   const palette = [
//     '#FFADAD',
//     '#FFC3A0',
//     '#FF677D',
//     '#392F5A',
//     '#31A2AC',
//     '#61C0BF',
//     '#6B4226',
//     '#D9BF77',
//     '#ACD8AA',
//     '#FFE156',
//     '#6A0572',
//     '#AB83A1',
//   ];
//   const randomIndex = Math.floor(Math.random() * palette.length);
//   return palette[randomIndex];
// }

// const content = document.getElementById('content');

// function loadMoreItems() {
//   const scrollDistanceToBottom =
//     document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
//   if (scrollDistanceToBottom < 200) {
//     console.log('LOADING DATA FROM AN API!!!');
//     for (let i = 0; i < 10; i++) {
//       const item = document.createElement('div');
//       item.classList.add('item');
//       item.textContent = 'Item ' + (content.children.length + 1);
//       item.style.backgroundColor = getRandomColor();
//       content.appendChild(item);
//     }
//   }
// }

// //SIMPLE THROTTLE
// // let isThrottled = false;
// // window.addEventListener('scroll', () => {
// //   if (!isThrottled) {
// //     loadMoreItems();
// //     isThrottled = true;
// //     setTimeout(() => {
// //       isThrottled = false;
// //     }, 200);
// //   }
// // });
// //ADVANCED THROTTLE
// function throttle(callback, delay = 500) {
//   let isThrottled = false;
//   let savedArgs = null;

//   const executeCallback = () => {
//     if (savedArgs === null) {
//       isThrottled = false;
//     } else {
//       callback(...savedArgs);
//       savedArgs = null;
//       setTimeout(executeCallback, delay);
//     }
//   };

//   return (...args) => {
//     if (isThrottled) {
//       savedArgs = args;
//       return;
//     }
//     callback(...args);
//     isThrottled = true;
//     setTimeout(executeCallback, delay);
//   };
// }
// const throttledLoadItems = throttle(loadMoreItems, 300);

// window.addEventListener('scroll', () => {
//   throttledLoadItems();
// });

// // Initial load
// loadMoreItems();

//>RequestAnimationFrame

// // SECTION 11
// //>FUNCTIONAL PROGRAMMING
// /*
// map, filter, some/every, find/findIndex, reduce
// */
// const func = function greet(person) {
//   console.log(`Hello there ${person}`);
// };
// const func2 = function (person) {
//   console.log(`Hello there ${person}`);
// };
// func('Blue');

// const funcs = [
//   function greet(person) {
//     console.log(`Hello there ${person}`);
//   },
//   function hate(person) {
//     console.log(`I hate you  ${person}`);
//   },
// ];
// funcs[0];

// //>FIRST CLASS FUNCTIONS
// function greet(person) {
//   console.log(`Hello there ${person}`);
// }
// function hate(person) {
//   console.log(`I hate you  ${person}`);
// }
// function callWithBlue(func) {
//   func('Blue');
// }
// callWithBlue(greet);
// callWithBlue(hate);
// callWithBlue(color => {
//   console.log(`${color} is the best color`);
// });

// //>PURE FUNCTIONS
// //IMPURE FUNCTION EXAMPLE
// let value = 2;
// function squareAndUpdateValue(num) {
//   value = num * num;
// }
// //PURE VERSION
// function square(num) {
//   return num * num;
// }

// //IMPURE FUNCTION EXAMPLE
// const colors = ['red', 'orange'];
// function addToArray(arr, value) {
//   return arr.push(value);
// }
// addToArray(colors, 'yellow');
// console.log('colors :', colors);
// //PURE VERSION
// function pureAddToArray(arr, value) {
//   return [...arr, value];
// }

// //>HIGHER ORDER FUNCTIONS
// function doTwice(func) {
//   func();
//   func();
// }
// doTwice(function () {
//   console.log('HELLO XXXXX');
// });

// function multiplyBy(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// const triple = multiplyBy(3);
// const quadruple = multiplyBy(4);

// //>IMMUTABILITY
// const nums = [1, 2, 3, 4];
// function push(arr, val) {
//   // arr.push(val)
//   return [...arr, val];
// }
// function pop(arr) {
//   return arr.slice(0, -1); //make a copy of the array and returns wothout the last item
// }

// const person = { name: 'Teddy' };
// person.age = 4; //MUTATING APPROACH
// console.log(person);
// //IMMUTATING APPROACH
// function addAgeToObject(object) {
//   return { ...object, age: 4 };
// }

//>RECURSION
// //IMPERATIVE VERSION
// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result *= i;
//   }
//   return console.log(result);
// }
// //RECURSIVE VERSION
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } // base case
//   return n * factorial(n - 1); //recurser statement
// }
// console.log('factorial(4) :', factorial(4));

// //>EXERCISE @ https://www.youtube.com/watch?v=lMBVwYrmFZQ
// function countDown(num) {
//   if (num <= 0) {
//     console.log('All done!');
//     return;
//   } //base case
//   console.log(num);
//   num--;
//   countDown(num); //recurser statement
// }
// countDown(4);

// function sumRange(num) {
//   if (num === 1) return 1; //base case
//   return num + sumRange(num - 1); //recurser statement
// }

// console.log('sumRange(5) :', sumRange(5));

// //>Partial Function with BIND
// function greet(greeting, name) {
//   console.log(`${greeting} , ${name}!!!!`);
// }
// const aussieGreet = greet.bind(null, 'GoodDay!!'); //Null = this no t being used / First argument baked in the new form of greet function to variable.
// aussieGreet('Blue');

// function multiply(a, b) {
//   return a * b;
// }
// const double = multiply.bind(null, 2);
// const triple = multiply.bind(null, 3);
// console.log('double(4) :', double(4));
// console.log('triple(4) :', triple(4));

// //>Partial Function
// function multiply(a, b) {
//   return a * b;
// }
// function partial(func, ...fixedArgs) {
//   return function (...remainingArgs) {
//     return func(...fixedArgs, ...remainingArgs);
//   };
// }
// const double = partial(multiply, 2);
// const triple = partial(multiply, 3);
// console.log('double(4) :', double(4));
// console.log('triple(4) :', triple(4));
// console.log('partial(multiply,2)(3) :', partial(multiply, 2)(4));

// function calculateSalesTax(rate, amount) {
//   const total = rate * amount;
//   const rounded = total.toFixed(2);
//   return console.log(Number(rounded));
// }
// function partial(func, ...fixedArgs) {
//   return function (...remainingArgs) {
//     return func(...fixedArgs, ...remainingArgs);
//   };
// }
// const calculateCASalesTax = partial(calculateSalesTax, 0.07);
// const calculateTXSalesTax = partial(calculateSalesTax, 0.05);
// calculateCASalesTax(300);
// calculateTXSalesTax(300);

// //>Function Compositions
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const square = a => a * a;
// const addAndSquare = (a, b) => square(add(a, b));
// add(10, multiply(10, 20));
// add(square(10), multiply(10, 20));

// function compose(fn1, fn2) {
//   return function (value) {
//     return fn1(fn2(value));
//   };
// }
// function repeatTwice(str) {
//   return str.repeat(2);
// }
// function upperCase(str) {
//   return str.toUpperCase();
// }
// const repeatAndUpperCase = compose(repeatTwice, upperCase);

// function flip(fn) {
//   return function (...args) {
//     return fn(...args.reverse());
//   };
// }

// //> Advanced Functional Composition
// function compose(...functions) {
//   //[joinWithDash, splitWords, lowerCaseString]
//   return function (
//     data //'fAncy product fiften'
//   ) {
//     return functions.reduceRight(
//       (accVal, nextFunc) => nextFunc(accVal),
//       data
//       // data === reduce right initial value
//     );
//   };
// }
// function lowerCaseString(str) {
//   return str.toLowerCase();
// }
// function splitWords(str) {
//   return str.split(' ');
// }
// function joinWithDash(array) {
//   return array.join('_');
// }
// const sluggify = compose(joinWithDash, splitWords, lowerCaseString);
// sluggify('fAncy product fiften');

// //>CURRYING BASICS
// f(a, b, c);
// f(a)(b)(c);

//Basic Currying
// function add(a, b, c) {
//   return a + b + c;
// }
// function addCurry(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// addCurry(1)(20)(5);
// console.log('addCurry(1)(20)(5) :', addCurry(1)(20)(5));

// //Advanced Currying
// function add3(x, y, z) {
//   return x + y + z;
// }
// function curry(fn) {
//   return function curried(...args) {
//     //If called function args in one go fn(x,y,z) or fn(x,y) call this function with arguments
//     if (args.length >= fn.length) {
//       console.log(args);
//       return fn.apply(this, args);
//     } else {
//       //else return functions individually chaining all the way down seperately inside each other
//       return function (...args2) {
//         console.log('arg', args, 'arg2', args2);
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// const curriedAdd = curry(add3);
// curriedAdd(1, 2, 3);
// curriedAdd(1, 2)(3);
// curriedAdd(1)(2)(3);
// console.log(add3.length);

// const result = [175, 50, 25].reduceRight((fel, sel) => {
//   console.log('ACC', fel, 'EL', sel);
//   return fel - sel;
// });
// console.log(result);

// // SECTION 12
// //>GET REQUEST
// const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';
// //>ASYNC VERSION
// (async function getPokemon() {
//   try {
//     //#1 step fetch data from server
//     const response = await fetch(POKE_URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: 🥶 ${res.status}`);
//     }
//     //#2 step translate the response to readable data
//     const data = await response.json();
//     console.log(data.results);
//   } catch (error) {
//     console.log('SOMETHING WENT WRONG WITH FETCHING');
//   }
// })();
// //>THEN VERSION
// fetch(POKE_URL)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: 🥶 ${res.status}`);
//     }
//     console.log('⚠️', res.headers.get('content-type'));
//     console.log('🥶', [...res.headers.keys()]);
//     // for (let h of res.headers) {
//     //   console.log('😖', h );
//     // }
//     return res.json();
//   })
//   .then(data => console.log('JSON DATA', data))
//   .catch(error => {
//     console.log('SOMETHING WENT WRONG WITH FETCHING', error);
//   });

// //>ASYNC VERSION w/headers
// (async function getPokemon() {
//   try {
//     //#1 step fetch data from server
//     const response = await fetch(POKE_URL, { method: 'GET' });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: 🥶 ${res.status}`);
//     }
//     //#2 step translate the response to readable data BASED ON HEADERS
//     let type = res.headers.get('content-type');
//     let obj = {
//       html: null,
//       json: null,
//       blob: null,
//     };
//     if (type.startsWith('text/html')) {
//       obj.html = await res.someTextMethod();
//     }
//     if (type.startsWith('application/json')) {
//       obj.json = await res.json();
//     }
//     if (type.startsWith('image/')) {
//       obj.blob = await res.someBlobMethod();
//     }
//     if (obj.html) {
//       const doc = new DOMParser().parseFromString(obj.html, 'text/html');
//       let h1Text = doc.querySelector('h1').textContent;
//     }
//     if (obj.json) {
//       console.log(obj.json);
//     }
//     if (obj.blob) {
//       let img = document.createElement('img');
//       let url = URL.createObjectURL(blob);
//       img.src = url;
//       document.body.append(img);
//     }
//   } catch (error) {
//     console.log('SOMETHING WENT WRONG WITH FETCHING');
//   }
// })();

// //>POST REQUEST
// (async function postData() {
//   const payload = {
//     handle: 'chickenco',
//     name: 'Chickens and Company',
//     description: 'A lovely company run by Chickens',
//     numEmployees: 999,
//     logoUrl: 'http://www.google.com',
//   };

//   const response = await fetch('http://localhost:3001/companies', {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   const data = await response.json();
//   console.log(data);
// })();

// //>UPLOAD FILE VIA FETCH
// //UPLOAD POST REQUEST
// async function uploadFile(formData) {
//   try {
//     const response = await fetch(
//       'http://localhost:3001/companies/coltco/upload-logo',
//       { method: 'POST', body: formData }
//     );
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error('Error uploading file:', error);
//   }
// }

// //FORM FIELD SELECTOR
// const fileInput = document.querySelector('#fileupload');
// //EVENTLISTENER FOR THIS FORM FIELD..IN THE EVENT OF ANY CHANGE, CREATE NEW FORM DATA PACKAGE AND REQUEST A POST FETCH
// fileInput.addEventListener('change', e => {
//   console.log('CHANGED');
//   const formData = new FormData();
//   formData.append('logo', fileInput.files[0]);
//   uploadFile(formData);
// });

// // SECTION 13
// localStorage.setItem('color', 'magenta');
// localStorage;
// localStorage.clear();
// const nums = [1, 2, 3, 4];
// localStorage.setItem('nums', nums);
// localStorage.getItem('nums'); //Returns '1,2,3,4' - array object defintion gets lost
// localStorage.setItem('nums', JSON.stringify(nums)); //Returns '[1,2,3,4]'
// JSON.parse(localStorage.getItem('nums')); //We destrigify the JSON to retireve our array objecyt back.

// const Storage = window.localStorage;
// if (typeof Storage !== 'undefined') {
//   alert('ls exists');
//   // Code for localStorage/sessionStorage.
// } else {
//   alert('ls does not exist');
//   // Sorry! No Web Storage support..
// }

// // SECTION 15
// const largeArray = Array.from({ length: 10000 }, () =>
//   Math.floor(Math.random() * 1000)
// );
// // console.log(largeArray);

// const arrayForBubbleSort = [...largeArray];
// const arrayForNativeSort = [...largeArray];

// //Native Sorting Function
// performance.mark('nativeSortingStart');
// arrayForNativeSort.sort((a, b) => a - b);
// performance.mark('nativeSortingEnd');
// //Bubble Sorting Function
// performance.mark('bubbleSortingStart');
// bubbleSort(arrayForBubbleSort);
// performance.mark('bubbleSortingEnd');

// performance.measure(
//   'Native Sort Time',
//   'nativeSortingStart',
//   'nativeSortingEnd'
// );
// performance.measure(
//   'Bubble Sort Time',
//   'bubbleSortingStart',
//   'bubbleSortingEnd'
// );

// console.log('performance.getEntries() :', performance.getEntries());
// const measure1 = performance.getEntriesByName('Native Sort Time')[0].duration;
// const measure2 = performance.getEntriesByName('Bubble Sort Time')[0].duration;
// console.log(measure2 - measure1);

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // SECTION 16
// const canvas = document.querySelector('#canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'rgb(255,0,0)';

// const bigRectangle = new Path2D();
// bigRectangle.rect(0, 0, 200, 80);
// ctx.fillStyle = 'rgba(55,0,0,0.5)';
// ctx.stroke(bigRectangle);
// ctx.fill(bigRectangle);

// ctx.fillRect(100, 100, 40, 80);
// ctx.fillStyle = 'rgba(55,0,0,0.5)';
// ctx.fillRect(120, 120, 40, 80);
// ctx.clearRect(100, 100, 20, 20);
// ctx.fillRect(100, 100, 20, 20);
// ctx.strokeStyle = 'white';
// ctx.strokeRect(100, 100, 20, 20);

// ctx.strokeStyle = 'black';
// ctx.beginPath();
// ctx.moveTo(10, 50);
// ctx.lineTo(100, 215);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(200, 80);
// ctx.lineTo(200, 40);
// ctx.lineTo(50, 50);
// ctx.fillStyle = 'yellow';
// ctx.fill();
// ctx.stroke();

// ctx.fillStyle = 'rgba(55,0,0,0.5)';
// ctx.beginPath();
// // ctx.arc(145, 145, 50, 0, 2 * Math.PI);
// ctx.arc(145, 145, 50, 20, 2 * Math.PI);
// ctx.stroke();
// ctx.fill();

// function add(a, b, c) {
//   return a + b + c;
// }

// function curryThis(fn) {
//   return function curriedfn(...args) {
//     console.log(args);
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...partial_args) {
//         return curriedfn.apply(this, args.concat(partial_args));
//       };
//     }
//   };
// }

// const curriedAdd = curryThis(add);
// console.log(curriedAdd(1, 2)(3));
