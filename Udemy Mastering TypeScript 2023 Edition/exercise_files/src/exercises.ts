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
const dog = {
  name: 'Elton',
  breed: 'Australian Shephard',
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

// printName({ first: 2 , last: 3});
printName({ first: 'Thomas', last: 'Jenkins' });
// printName({ first: 'Mick', last: 'Jagger', age: 473 });
const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
printName(singer);

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// TYPE ALIAS - Named type
type Point = {
  x: number;
  y: number;
};

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  const x = song.numStreams * 0.0033;
  console.log(x);
  return x;
}

function printSong(song: Song): void {
  console.log(`${song.title}-${song.artist}`);
}

const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Erhan ERTEM',
  numStreams: 1211,
  credits: {
    producer: 'Ernie Welco',
    writer: 'Elon Edinburg',
  },
};
calculatePayout(mySong);
printSong(mySong);

type _3Point = {
  x: number;
  y: number;
  z?: number; //make it optional, not required
};
const myPoint: Point = { x: 1, y: 3 };

//READONLY MODIFIER

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 123456,
  username: 'catgirl',
};
console.log(user.id);
// user.id = 1111;

//INTERSECTION TYPE
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 9,
};

//CODING CHALLENGE - SECTION 5
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: 'Cats',
  director: 'Tom Hooper',
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
function getProfit_alt({
  boxOffice: { grossWorldwide, budget },
}: Movie): number {
  return grossWorldwide - budget;
}
// For example...
console.log(getProfit(cats));
// - 21166652

//LESSON 6 - ARRAY TYPES
// const activeUsers: [] = [1];
const activeUsers: string[] = ['Max'];
activeUsers.push('Tony');
// activeUsers.push(1);
const activeNumbers: number[] = [1];

const bools: Array<boolean> = [];
const bolols_alt: boolean[] = [];

type Points = {
  x: number;
  y: number;
};
const coords: Points[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({ x: 23, y: '8' });

const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
];

//CODING CHALLENGE - SECTION 6
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products: Product[]): number {
  return products.reduce((total, curr) => total + curr.price, 0);
}
function getTotal_alt(products: Product[]): number {
  return products.reduce((total, { price }) => total + price, 0);
}

//LESSON 7 - UNION TYPES
