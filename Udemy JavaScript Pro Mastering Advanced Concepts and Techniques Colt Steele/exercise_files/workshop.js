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
