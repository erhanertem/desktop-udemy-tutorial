//LESSON 3 - TYPE ANNOTATION BASICS

//STRING
let movieTitle: string = 'Amadeus!!';
movieTitle = 'Arrival';
// movieTitle = 9;
// movieTitle.upper();
movieTitle.toUpperCase();

//NUMBER
let myNumber: number = 42;
// myNumber = 'I am a string!!';
myNumber = 60;

let numCatLives: number = 9;
numCatLives += 1;

//BOOLEAN
let myBoolean: boolean = true;
// myBoolean = 87;
myBoolean = false;

//TYPE INFERENCE
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other two';
// tvShow = 19;

let isFunny = false;
isFunny = true;
// isFunny = 'true';

//ANY
// Simply disables TS checking
let thing: any = 'hello';
thing = 1;
thing = false;
// thing();

// let thing = 'hello';
// thing();

const movies = ['Aliens', 'Alabama', 'Nasty Fellow'];
let favMovie: string; //Uninitialized variables needs to be assigned a type for any inference

for (let movie of movies) {
  if (movie === 'Alabama') {
    favMovie = 'Alabama';
  }
}
// favMovie = 12;

//LESSON 4 - FUNCTIONS
function square(num: number): number {
  return num * num;
}
square(3);
// square('abcdef');
// square(true);

// function square2(num: number): number {
//   num * num;
// }
// square2(3);

function greet(num: number, person: string) {
  console.log(`I am  ${person}`);
  return num * num;
}
greet(3, 'Jonny');
// greet(true, 'Jonny');

function greet2(person: string = 'stranger') {
  console.log(`I am  ${person}`);
}
greet2();
greet2('Tonny');

function multiply(x: number, y: number) {
  return x * y;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return person + age + isFunny;
};
doSomething('ChickenFace', 23, true);
const doSomething2 = function (person: string, age: number, isFunny: boolean) {
  return person + age + isFunny;
};
doSomething2('ChickenFace', 23, true);

function add(x: number, y: number): number {
  return x + y;
}

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
  return color.toUpperCase();
});

//VOID
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  // return 'I am returning';
}

function secondsInDay() {
  return 24 * 60 * 60;
}

//NEVER
function makeError(msg: string): never {
  throw new Error(msg);
}

//CODING CHALLENGE - SECTION 4
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(name: string = 'you'): string {
  return `one for ${name}, one for me`;
}
console.log(twoFer());
console.log(twoFer('Elton'));

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

//LESSON 5 - OBJECT TYPES
