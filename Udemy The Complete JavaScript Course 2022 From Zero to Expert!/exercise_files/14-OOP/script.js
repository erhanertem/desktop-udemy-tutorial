'use strict';
//LESSON 208 CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
// //NOTE: CONSTRUCTOR FUNCTIONS ALWAYS START WITH A CAPITAL LETTER. ITS BECAUSE THE MAIN DIFFERENCE BETWEEN A REGULAR FUNCTION AND A CONSTRUCTOR FUNCTION IS THEY ARE CREATED WITH THE <NEW> KEYWORD.
// const Person = function (firstName, birthYear) {
//   // console.log(this); //returns an empty object
//   //-->Instance properties
//   this.firstName1 = firstName; //NOTE: property name may not be the same as entered into function...but commonly used as same
//   this.birthYear = birthYear;
//   // //VERY IMPORTANT! NEVER DO THIS!!! --> See Lecture 209 for prototypes bearing functions
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// //IMPORTANT! STEPS INVOLVED WITH NEW KEYWORD.....
// //1. New {} empty object is created
// //2. function is called, this = {}
// //3. {} linked to prototype
// //4. function automatically returns {} empty object

// const matilda = new Person('Matilda', 2017); //they are instances of Person
// const jamal = new Person('Jamal', 1975);
// console.log(matilda, jamal);
// console.log(jonas instanceof Person);
// console.log(jamal instanceof Person);
// console.log(matilda instanceof Person);

//LESSON 209 PROTOTYPES
// //VERY IMPORTANT! via prototypal iheritance we do not bear multiple instances of the function and we have one point of source
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// console.log(Person.prototype); //NOTE: Now the Person.prototype takes on calcAge() function
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //TRUE - TEST METHOD #1
// console.log(Person.prototype.isPrototypeOf(jonas)); //TRUE - TEST METHOD #2
// jonas.calcAge();
// matilda.calcAge();

// //--> PROTOTYPAL INHERITANCE ON LINKED OBJECTS
// //NOTE: BEYOND ADDING FUNCTION EXTERNALLY TO PROTOTYPE , WE MAY WELL ADD ADDITONAL PROPERTIES WHICH IS INSTANTLY SHARED ACROSS INSTANCE OBJECTS
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matilda, jamal);
// console.log(jonas.species, matilda.species, jamal.species);

// console.log(jonas.hasOwnProperty('firstName1')); //IMPORTANT! TRUE --> OBJECT INCLUDES THIS PROPERTY WHEN CREATED BESIDE ITS PROTOTYPAL TREE
// console.log(jonas.hasOwnProperty('species')); //IMPORTANT! FALSE --> NOT DIRECTLY INCLUDED BUT IN THE PROTOTYPAL TREE

//LESSON 211 PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //top of the scope chain
// console.log(Person.prototype.constructor);

// const arr = [3, 2, 3, 4, 5, 3, 9, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //TRUE - proof that array constructor works behind the scene
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// }; //all arrays would inherit this method
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1.__proto__); //NOTE: HTML ELEMENTS ARE ALSO OBJECTS AND THEY HAVE THEIR NESTED LEVELS OF PROTYPAL TREE

// console.dir(x => x + 1); // NOTE: FUNCTIONS ARE ALSO OBJECTS AND THEY HAVE THEIR OWN PROTOYPAL TREE

//CODING CHALLENGE #1
// /*
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀
// */
// //-->CREATE A CONSTRUCTOR FUNCTION
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// //--> INSERT INSTANCE FUNCTION FOR COMMON USE
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h.`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed} km/h.`);
// };
// // console.log(Car);
// // function accelerate(car) {
// //   car.speed += 10;
// //   console.log(`'${car.make}' going at ${car.speed} km/h.`);
// // }
// // function brake(car) {
// //   car.speed -= 5;
// //   console.log(`'${car.make}' going at ${car.speed} km/h.`);
// // }
// // accelerate(car1);
// // brake(car1);
// // brake(car1);
// // brake(car1);
// // accelerate(car2);
// // brake(car2);

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log(car1, car2);
// car1.brake();
// car1.accelerate();

//LESSON 213 ES6 CLASSES
// //NOTE: SIMILAR TO FUNCTION EXPRESSIONS AND DECLARATIONS, CLASSES ORCHASTRATES A SIMILAR APPROACH
// //--> CLASS EXPRESSIONS
// // const PersonCl = class {};
// //--> CLASS DECLARATIONS
// // class PersonCl {}
// //IMPORTANT! TIDIER THAN THE CONSTRUCTOR FUNCTION AND ALLOWS DECLARING FUNCTIONS INSIDE !!!
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   } //IMPORTANT! the declared properties are the core of the class just like the constructor function in the previous lesson
//   //--> INSIDE FUNCTION
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   } //IMPORTANT! this function lays under the prototypal tree not in the core of the constructor!!! just like the constructor function in the previous lesson
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype); //true

// //--> ADDING METHOD MANUALLY EXTERNALLY TO THE CLASS JUST LIKE WE DID WITH THE NEW CONSTRUCTOR FUNCTION
// PersonCl.prototype.greet = function () {
//   console.log(`HEY, ${this.firstName}`);
// };
// jessica.greet();

// // VERY IMPORTANT!:
// // 1.CLASSES ARE NOT HOISTED UNLIKE FUNCTION DECLARATIONS
// // 2. CLASSES ARE FIRST CLASS CITIZENS
// // 3. CLASSES ARE EXECUTED IN STRICT MODE

//LESSON 214 SETTERS AND GETTERS

// //--> IN OBJECTS
// const john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   get age() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.yearOfBirth;
//   },
// };
// console.log(john.age); // 30
// console.log(john);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// //--> GETTER IN AN OBJECT
// // NOTE: GETTER CREATES A NEW PROPERTY AND EXECUTES UPON REQUEST.
// console.log(account.latest);
// console.log(account);
// //--> SETTER IN AN OBJECT
// NOTE: SETTER MUTATES THE TARGET OBJECT PROPERTY UPON NEW VALUE INPUT.
// account.latest = 50;
// console.log(account.latest);
// console.log(account.movements);
// console.log(account);

// //--> IN CLASSES
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   } //REQUIRES CALLING EXTERNALLY
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   } //REQUIRES CALLING EXTERNALLY
//   get age() {
//     return 2037 - this.birthYear;
//   } // EXECUTES AUTOMATICALLY WITHIN CLASS and ACT AS A NEW PSEUDO PROPERTY CALCULATED INTERNALLY

//   //--> SET A PROPERTY THAT ALREADY EXISTS
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   } //SETTER FUNCTION GETS EXECUTED AS SOON AS FULLNAME PROPERTY IS INPUT THRU CLASS. SETTER ACTS AS A PSEUDO PROPERTY THAT EXECUTES AUTOMATICALLY, CREATES A PLACEBO NEW CLASS PROPERTY WHICH OVERRIDES THE INTENDED CLASS PROPERTY VIA GETTER BELOW. So <fullName> is overwritten when a placebo property <_fullName> is returned
//   get fullName() {
//     return this._fullName;
//   }
// }
// const jessica = new PersonCl('Jessica', 1996);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);
// console.log(jessica);

//LESSON 215 STATIC METHODS

// //--> IN OBJECTS
// let x = Array.from(document.querySelectorAll('h1'));
// console.log(x);
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// Person.hey = function () {
//   console.log('Hey there👍', this);
// };
// // jonas.hey(); //It doesnt work as it is not prototypal inheritance from this constructor function
// Person.hey(); //currently it is exclusive to person - STATIC FUNCTION EXCLUSIVE TO THE PERTAINING OBJECT NOT ACCESSIBLE BY OTHERS OR EXISTS IN THEIR PROTOTYPAL CHAIN
// Person.prototype.hey2 = function () {
//   console.log('Hey there👍 Now we are talking!!', this);
// }; //now we protyped the function for the instances to use , this is the one who calls the function prototype
// jonas.hey2(); //hey2 is made availabel in the protypal inheritance chain. Jonas is the this who calls the hey2()

// //--> IN CLASSES
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //--> INSTANCE METHODS
//   //NOTE: Methods that will be shared/added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   //--> STATIC METHOD
//   //NOTE: Methods that would remain exclusive to the class
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// PersonCl.hey();
// const jason = new PersonCl('ernie jason', 2001);
// console.log(jason.fullName);
// jason.hey(); //it does exist in the prototype property since its a static method not an instance one

//LESSON 216 OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2020;
// console.log(steven);
// console.log(steven.__proto__);
// //--> CREATE AN OBJECT FROM A PROTOTYPE
// const sarah = Object.create(PersonProto);
// //--> PROVIDE DATA TO THE PROTOTYPE VIA ITS INSTANCE FUNCTION
// sarah.init('Sarah', 1978);
// //--> CALL THE PROTOINHERITED FUNCTION
// sarah.calcAge();

//CODING CHALLENGE #2
// /*
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀
// */

// //--> ES6 CLASS OBJECT

// class CarCl {
//   //CONSTRUCTOR FUNCTION
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   //INSTANCE METHODS
//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' going at ${this.speed} km/h.`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`'${this.make}' going at ${this.speed} km/h.`);
//   }
//   //GETTER-SETTER
//   get speedUS() {
//     return this.speed / 1.6;
//   } // CREATE A PROPERTY
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   } //MODIFY A PROPERTY
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

//LESSON 218 INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTION

// const Parent = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Parent.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;  //Replica code from parent constfnc
//   // this.birthYear = birthYear; //Replica code from parent constfnc
//   Parent.call(this, firstName, birthYear); //we borrow the code from parent with <this> pointing to Student
//   this.course = course;
// };

// //VERY IMPORTANT! In order to access calcAge that is located inside the parent thru Student, we have to have alink established between student and the parent. sO THE PROTOTYPE TREE OF parent should be copied over to student class before we call calcAge() from student class
// Student.prototype = Object.create(Parent.prototype); //NOTE: LINK established now we can call calcAge()

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1980, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike instanceof Student); //true
// console.log(mike instanceof Parent); //true - because we linked them
// console.log(mike); //but it shows as parent not student here!!!!
// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

//CODING CHALLENGE #3
// /*
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀
// */

// const Car = function (make, currSpeed) {
//   this.make = make;
//   this.currSpeed = currSpeed;
// };

// const EvCl = function (make, currSpeed, currCharge) {
//   Car.call(this, make, currSpeed);
//   this.currCharge = currCharge;
// };

// EvCl.prototype = Object.create(Car.prototype); //Prototypal Link established for car bearing chargebattery function to be accessible to EvCl

// Car.prototype.chargeBattery = function (chargeTo) {
//   this.currCharge = chargeTo;
// };

// EvCl.prototype.accelerate = function () {
//   this.currSpeed += 20;
//   this.currCharge *= 0.99;
//   console.log(
//     `'${this.make}' going at ${this.currSpeed} km/h, with a charge of ${this.currCharge}%`
//   );
// };
// EvCl.prototype.brake = function () {
//   this.currSpeed -= 5;
//   console.log(
//     `'${this.make}' going at ${this.currSpeed} km/h, with a charge of ${this.currCharge}%`
//   );
// };
// const car1 = new EvCl('Tesla', 120, 23);
// car1;
// car1.chargeBattery(50);
// car1.accelerate();
// car1.brake();

//LESSON 220 INHERITANCE BETWEEN CLASSES: ES6 CLASSES

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //--> INSTANCE METHODS
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //--> STATIC METHOD
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl { //VERY IMPORTANT! EXTENDS BRIDGES TWO CLASSES
//   constructor(fullName, birthYear, course) {
//     //VERY IMPORTANT! SUPER HAS TO BE DECLARED FIRST
//     super(fullName, birthYear); //--> linked properties
//     this.course = course; //local property
//   }
//   introduce() {
//     console.log(`My name is '${this.fullName}' and I study ${this.course}.👍`);
//   }

//   calcAge() {
//     console.log(
//       'Hi I override the calcAge method in the bridged class, because I appear first in the prototype chain :))) arrrr!'
//     );
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge(); //thanks to <extends> which bridges both classes

//LESSON 221 INHERITANCE BETWEEN CLASSES: OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto); //--> LINK BETWEEN STUDENTPRO & PERSONPROTO

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(
//     `${this.firstName} born in ${this.birthYear} has been accepted to ${this.course}`
//   );
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

//LESSON 222 ANOTHER CLASS EXAMPLE

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   deposit(value) {
//     this.movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value);
//   }
//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log('LOAN APPROVED');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// // //NOTE: WE SHOULDNT BE INTERRACTING WITH THE PROPERTIES LIKE THIS , WE WOULD NEED FUNCTIONS TO GET THE JOB DONE.
// // acc1.movements.push(-151);
// acc1.deposit(250);
// acc1.deposit(650);
// acc1.withdraw(250);
// acc1.requestLoan(5022);
// acc1.approveLoan(5030);

// console.log(acc1);

//LESSON 223 ENCAPSULATION: PROTECTED PROPERTIES AND METHODS

// //--> FAKING DATA ENCAPSULATION- PROTECTED PROPERTY
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [120, 120, 200]; //--> UNDERSCORE TO SIGNIFY ENCAPSULATION - DO NOT CHANGE WARNER and adopt getter and setter strategy as follows
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   //PUBLIC INTERFACE
//   //--> MIGHT BE EITHER A REAL GETTER/SETTER A FUNCTION WITH GET/SET NAMING
//   getMovements() {
//     return this._movements;
//   }
//   deposit(value) {
//     this._movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value);
//   }
//   _approveLoan(val) {
//     return true;
//   } //--> protecting the method
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log('LOAN APPROVED');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// console.log(acc1.getMovements());

//LESSON 224 ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS

// /*
// --> REAL ENCAPSULATION IS COMPRISED OF
// 1.1. PUBLIC FIELDS
// 1.2. PRIVATE FIELDS
// 1.3. STATIC FIELDS
// 2.1. PUBLIC METHODS
// 2.2. PRIVATE METHODS
// 2.3. STATIC METHODS
// */

// class Account {
//   //--> 1.1. PUBLIC FIELD
//   locale = navigator.language; //NOTE: no need to use let or const
//   //IMPORTANT! excatly the same as using under the constructor function
//   //--> 1.2.1 TRUE PRIVATE FIELD
//   #movements = [];
//   //-->1.2.2. TRUE PRIVATE FIELD (BLANK DECLARATION FROM A CONSTRUCTOR FUNCTION AS AN INPUT RETIREVED FROM THE USER WHEN CREATING THE CLASS OBJECT INSTANCE)
//   #pin; //VERY IMPORTANT! FOR FIELDS THAT ARE INPUTS FROM OUTSIDE NEEDS TO BE INTRODUCED HERE AND THEN # MARKUP COULD BE ADOPTED TO OTHER COPIES
//   //-->1.3. STATIC FIELD (available locally only and not carried over to instances via prototypal chain)
//   static EFTID = 10;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin; //--> FIRST DECLARE AS A TRUE BLANK PRIVATE FIELD AT THE TOP
//     // this._movements = []; //--> UNDERSCORE TO SIGNIFY ENCAPSULATION - DO NOT CHANGE WARNER and adopt getter and setter strategy as follows
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   //--> 2.1. PUBLIC METHODS
//   //PUBLIC INTERFACE
//   //--> MIGHT BE EITHER A REAL GETTER/SETTER A FUNCTION WITH GET/SET NAMING
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(value) {
//     this.#movements.push(value);
//     return this; //for chaining methods @ LESSON 225
//   }
//   withdraw(value) {
//     this.deposit(-value);
//     return this; //for chaining methods @ LESSON 225
//   }
//   _approveLoan(val) {
//     return true;
//   } //--> protecting the method
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log('LOAN APPROVED');
//       console.log('obiwan', this);
//       return this; //for chaining methods @ LESSON 225
//     }
//   }
//   // //--> 2.2. PRIVATE METHODS --> NOT YET IMPLEMENTED
//   // #approveLoan(val) {
//   //   return true;
//   // }
//   //--> 2.3. STATIC METHODS - HELPER FUNCTIONS (available locally only and not carried over to instances via prototype chain)
//   static printBalance() {
//     console.log(`${this.EFTID}, ${this.currency}`); //VERY IMPORTANT! STATIC METHODS ONLY READS STATIC FIELDS
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(500);
// acc1.deposit(1500);
// acc1.withdraw(23);
// console.log(acc1);
// // console.log(acc1.#movements); //VERY IMPORTANT! accessing this var from outside is no possible.
// // console.log(acc1.#pin); //VERY IMPORTANT! accessing this var from outside is no possible.
// console.log(acc1.getMovements());
// // console.log(acc1.#approveLoan(100));
// console.log(acc1._approveLoan(100));

//LESSON 225 CHAINING METHODS

// //--> CONTINUED FROM THE PREVIOUS CODE
// acc1.deposit(300).deposit(1000).withdraw(35).requestLoan(25000).withdraw(4105);
// console.log(acc1.getMovements());
// Account.printBalance();

//CODING CHALLENGE #4
/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, currSpeed) {
    this.make = make;
    this.currSpeed = currSpeed;
  }

  chargeBattery(chargeTo) {
    this.currCharge = chargeTo;
    return this; //for chain method
  }
}

class EvCl extends CarCl {
  constructor(make, currSpeed, currCharge) {
    super(make, currSpeed);
    this.currCharge = currCharge;
  }

  accelerate() {
    this.currSpeed += 20;
    this.currCharge *= 0.99;
    console.log(
      `'${this.make}' going at ${this.currSpeed} km/h, with a charge of ${this.currCharge}%`
    );
    return this; //for chain method
  }

  brake() {
    this.currSpeed -= 5;
    console.log(
      `'${this.make}' going at ${this.currSpeed} km/h, with a charge of ${this.currCharge}%`
    );
    return this; //for chain method
  }
}

const car1 = new EvCl('Rivian', 120, 23);
// car1.chargeBattery(50)
// car1.accelerate();
// car1.brake();
car1.chargeBattery(50).accelerate().brake();
