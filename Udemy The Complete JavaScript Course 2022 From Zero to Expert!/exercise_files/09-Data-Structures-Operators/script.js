'use strict';

// LESSON: 103 DESTRUCTURING ARRAYS

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(a, b, c);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);
// const [first, , third] = restaurant.categories;
// console.log(first, third);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //MUTATING VARIABLES - switching the array elements old-school way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// //MUTATING THE VARIABLES - switching the array elements via destructuring method
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// restaurant.order(2, 0); //f returns an array
// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Setting Default values for arrays
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// LESSON: 104 DESTRUCTURING OBJECTS

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },
// };

// //DESTRUCTURING OBJECT with EXACT relevant fields
// const { nameR, openingHours, categories } = restaurant;
// console.log(nameR, openingHours, categories);

// //DESTRUCTURING OBJECT with RENAMED object fields
// const {
//   nameR: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // IMPORTANT: Setting Default values for object fields and renaming the object field singly
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// // #1. we try to get menu field (if it exists) from the restaurant object. If it does not, a default is assigned which is an empty [] array object
// // #2. we try to get starterMenu field, asssign it a default value of empty [] object if it does not exist and rename it to a variable starters

// //MUTATING THE PREDECLARED VARIABLES IN OBJECTS
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };
// // { a, b } = obj; //js throws an error
// ({ a, b } = obj); //IMPORTANT: js expects a () or const{...} so that it can assign values to variables

// //NESTED OBJECTS DESTRUCTURING
// // const { fri } = restaurant.openingHours;
// // console.log(fri);
// // must use the exact field names when destructuring the nested object
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// //NESTED OBJECTS - DESTRUCTURING  with RENAMED variables
// const {
//   fri: { open: o, close: p },
// } = restaurant.openingHours;
// console.log(o, p);

// restaurant.orderDelivery({
//   // time: '22:30',
//   adress: 'Via del Sole 2nd St. Delor',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// LESSON: 105 THE SPREAD OPERATOR(...)

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// //ADDING ARRAY ELEMENTS TO A NEW ARRAY STRUCTURE
// const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// //DESTRUCTURING ARRAY
// console.log(...goodNewArr);
// console.log(1, 2, 7, 8, 9); //same as writing elements individually

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; //destructure the existing array  elements and add "Gnocci" and wrap it up in an array construct
// console.log(newMenu);

// //SHALLOW COPY OF ARRAYS
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //JOIN 2 ARRAYS
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS
// //ITERABLE STRING - FRACTURE STRING INTO PIECES
// const str = 'Jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);
// console.log('J', 'o', 'n', 'a', 's');

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way
// restaurant.orderPasta(...ingredients); //new way

// //SPREAD OPERATOR WITH OBJECTS
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Goussipier' };
// console.log(newRestaurant);

// // IMPORTANT: MAKING A COPY OF THE OBJECT WITH SPREAD OPERATOR
// const restaurantCopy = { ...restaurant };
// restaurantCopy.nameR = 'Ristorante Roma Crazy Chicken';
// console.log(restaurant.nameR);
// console.log(restaurantCopy.nameR);

// LESSON: 106 REST PATTERN AND PARAMETERS

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients); //turns into a pack of arrya elements - REST OPERATOR
//   },
// };

// //#1.DESTRUCTURING

// //SPREAD ON THE RIGHT HAND SIDE OF THE OPERATOR AS ARRAY DECONSTRUCTOR
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //REST OPERATOR ON THE LEFT SIDE OF THE OPERATOR AS ARRAY CONSTRUCTOR
// const [a, b, , ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //others yields [4,5] as 3 is skipped with additional , seperator

// const [pizza, , rizotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rizotto, otherfood);

// //REST OPERATOR ON THE LEFT SIDE OF THE OPERATOR AS OBJECT CONSTRUCTOR
// const { sat, ...weekdays } = { ...restaurant.openingHours };
// console.log(sat, weekdays);

// //#2. FUNCTIONS

//REST PARAMETERS FOR FUNCTIONS
// takes the arguments and turns them into array
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// // add([2, 3]); // [[2,3]] --> array in array
// add(5, 3, 7, 2); // [5,3,7,2]

// const x = [23, 5, 7];
// add(...x); //spread operator here unpacks the array and returns numbers as (23,5,7) then the add function above applies its own ...(numbers) rest operator and turns [23,5,7] as an final argument
// // #1. shortly, spread operator when calling a function
// // #2. when establishing a function its a rest operator

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //the first argument is stored under mainIngredient variable and the rest is stored under otherIngredients var
// restaurant.orderPizza('mushrooms'); //creates the rest variable as an empty array

// LESSON: 107 SHORT CIRCUITING (&& AND ||)

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients); //turns into a pack of arrya elements - REST OPERATOR
//   },
// };

// //OR OPERATOR
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null); // falsy || falsy - last falsy returned as there are no more shortcircuiting forward

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //would return the first truthy - Hello

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 10; //refined way of wiritng the same ternary snippet

// restaurant.numGuests = 0; // this causes problem with the || operator since 0 is falsy in this case ?? nullish coelesensing operator is used
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 10; //refined way of wiritng the same ternary snippet

//AND OPERATOR
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log(7 && 0);
// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// LESSON: 108 THE NULLISH COALESCING OPERATOR (??)

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients); //turns into a pack of arrya elements - REST OPERATOR
//   },
// };

// //|| OPERATOR DO NOT WORK WHEN THE NUMBER IS 0
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //RETURNS 10
// // ?? OPERATOR ACCEPT NULL AND UNDEFINED AS FALSY WHILE 0 AS TRUTHY
// restaurant.numGuests = 0; //TRUTHY NULLISH VALUE
// restaurant.numGuests = ''; //FALSY
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect); //RETURNS "" - FALSY

// LESSON: 109 LOGICAL ASSIGNMENT OPERATORS

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// //OR ASSIGNMENT OPERATOR --> DO NOT WORK IN CASE NUMGUESTS = 0
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// //NULLISH ASSIGMENT OPERATOR --> DO WORK IN CASE NUMGUESTS = 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// //AND ASSIGMENT OPERATOR
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Coding Challenge: #1
// /*
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //#1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //#2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //#3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //#4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //#5
// const { team1, x: draw, team2 } = game.odds;
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// console.log(team1, draw, team2);
// //#6
// const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// printGoals(...testData);
// printGoals(...game.scored);
// function printGoals(...name) {
//   console.log(name);
//   console.log(`${name.length} goals were scored`);
//   for (let i = 0; i < testData.length; i++) console.log(name[i]);
// }
// //#7
// team1 < team2 && console.log('Team 1 is more likely to win!');

// LESSON: 111 LOOPING ARRAYS: THE FOR-OF LOOP

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients); //turns into a pack of arrya elements - REST OPERATOR
//   },
// };

// //FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }
// console.log([...menu.entries()]);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// LESSON: 112 ENHANCED OBJECT LITERALS

// //ES6 PROVIDES NEW WAYS OF CREATING OBJECT LITERALS
// //SAMPLE OBJECT TO BE ADDED INSIDE RESTAURANT OBJECT UNDER OPENINGHOURS FIELD REFERENCE
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// //IMPORTANT: #3. ENHANCED IN ES6: FIELD NAMES DERIVED FROM EXTERNAL REFERENCES
// const openingHours = {
//   //IMPORTANT: FIELDS NAMES WRAPPED BY []
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   //IMPORTANT: WE CAN EVEN USE TEMPLATE LITERALS INSIDE []
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //IMPORTANT: #1. ENHANCED ES6 WAY OF ADDING OBEJCT INSIDE ANOTHER OBJECT
//   openingHours,

//   //IMPORTANT: #2. ENHANCED ES6 WAY OF WIRITNG FUNCTIONS
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // OLDER WAY
//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to delivered to ${adress} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients); //turns into a pack of arrya elements - REST OPERATOR
//   },
// };

// console.log(restaurant);

// LESSON: 113 OPTIONAL CHAINING (?.)

// const restaurant = {
//   nameR: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // console.log(restaurant.openingHours.mon.open); //mon does not exist so we get undefined and further trying to solicit the object field inside mon yields err.
// //TACKLING THE ISSUE WITH && OPERATOR
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// } // this way of precehcking step by step yields no err and no output will be logged since openignhours exists checked, but openinghours.mon do not exist...
// //IMPORTANT: TACKLING WITH OPTIONAL CHAINING - MUCH CLEANER AND SHORTER
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open); //DEEPER CONTROL

// //EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   // const open = restaurant.openingHours[day]?.open || 'closed';
//   // NOTE: open 0 stands for 24hrs but here if we use || operator it regards it falsy thereby we are using ?? operator.
//   let topen;
//   let open = restaurant.openingHours[day]?.open ?? 'closed';
//   // console.log(open + '!!!');
//   if (open === 0) {
//     topen = '24hrs';
//     console.log(`On ${day}, we are open ${topen}`);
//   } else {
//     topen = open;
//     console.log(`On ${day}, we open at ${topen}`);
//   }
// }

// //OPTIONAL CHAINING ON METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //OPTIONAL CHAINING ON ARRAYS
// const users = [{ name: 'Jonas', email: 'Hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');

// LESSON: 114 LOOPING OBJECTS: OBJECT KEYS, VALUES, ENTRIES

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const properties = Object.keys(openingHours);
// console.log(properties); //its an array of object field names(keys)

// let openStr = `We are open on ${properties.length} days:`;
// console.log(openStr);

// //LOOPING THRU ARRAY OF OBJECT KEYS
// for (const day of Object.keys(openingHours)) {
//   // console.log(day);
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// //LOOPING THRU KEY,VALUE PAIRS OF THE OBJECT - IMPORTANT: ITS DIFFERENT THAN HOW ITS IMPLEMENTED ON ARRAYS
// // NOTE: In <menubar> array --> for [a,b] of menubar.entries()
// //ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Coding Challenge: #2
// /*
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //#1
// for (const [index, value] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }
// //#2
// let avg = 0;
// let sum = 0;
// console.log(Object.values(game.odds));
// for (const value of Object.values(game.odds)) {
//   sum += value;
// }
// console.log(sum);
// avg = sum / Object.values(game.odds).length;
// console.log(avg);
// //#3
// for (const [field, value] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${field === 'team1' || field === 'team2' ? 'victory' : 'draw'} ${
//       field === 'team1'
//         ? 'Bayer Munich'
//         : field === 'team2'
//         ? 'Borrussia Dortmund'
//         : ''
//     }: ${value}`
//   );
// }
//#4
// const scorers = {};
// for (const i of game.scored) {
//   // console.log(i);
//     scorers[i] ? scorers[i]++ : (scorers[i] = 1);
// }
// console.log(scorers);
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// LESSON: 116 SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Rizotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// //CREATE A SET OBJECT FROM STRING ITERABLE
// console.log(new Set('jonas'));

// //LENGTH OF A SET OBJECT
// console.log(ordersSet.size);
// //IMPORTANT: in arrays arr.length VS in sets set.size
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //ADDING ELEMENTS TO SETS
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');
// console.log(ordersSet); // only one garlic bread is added

// //SETS BEAR NO INDICES
// console.log(ordersSet[0]); // IMPORTANT: The sets do not bear index so can not use it as in arrays

// //CLEAR CONTENT OF A SET OBJECT
// ordersSet.clear(); //CLEARS THE ENTIRE SET
// console.log(ordersSet);

// //IMPORTANT: SETS ARE ITERABLES SO THAT MEANS WE CAN LOOP
// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = new Set(staff);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );
// console.log(staffUnique);
// //MUTATE TO AN ARRAY FROM A SET OBJECT
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// LESSON: 117 MAPS: FUNDAMENTALS

// //CREATE A MAP OBJECT
// const rest = new Map();

// rest.set('name', 'classico italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get('1'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //CHECK IF IT INCLUDES
// console.log(rest.has('categories'));
// //DELETE ELEMENT
// rest.delete(2);
// console.log(rest);
// //CLEAR ALL CONTENT
// rest.clear();
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'test');
// // rest.set([1, 2], 'test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr)); //wont work
// // console.log(rest.get([1, 2])); //wont work

// LESSON: 118 MAPS: ITERATION

// //CREATE A NEW MAP WITH MULTIPLE ENTRY AT THE SAME TIME - INSTEAD OF SET METHOD
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //CONVERT OBJECT TO MAP OBJECT
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(Object.entries(openingHours)); // FIRST WE CHANGE OBJECT TO AN ARRAY STRUCTURE
// const hoursMap = new Map(Object.entries(openingHours)); //MAP GETS ARRAY TO CREATE MAP
// console.log(hoursMap);

// // LOOPING MAPS
// //QUIZ APP
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //CONVERT MAP TO ARRAY
// console.log([...question]);

// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// Coding Challenge: #3

// /*
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀
// */
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //#1
// const events = new Set();
// for (let arr of gameEvents) {
//   events.add(arr[1]);
// }
// console.log([...events]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
//#2
// gameEvents.delete(64);
// console.log(gameEvents);
// //#3
// console.log(
//   `An evengt happened, on average , every ${Math.trunc(
//     90 / gameEvents.size
//   )} minutes`
// );
// //#4
// for (const [key, value] of gameEvents) {
//   console.log(
//     `${key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key} : ${value}`
//   );
// }

// LESSON: 121 WORKING WITH STRINGS PART 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[2]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(4, -1));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(0, airline.lastIndexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else {
//     console.log('You got lucky!');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// LESSON: 122 WORKING WITH STRINGS PART 2

// const airline = 'TAP Air Portugal';

//LOWERCASE / UPPERCASE METHODS
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passanger = 'ErHAn';
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// //TRIM METHOD
// //Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '    Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// //chained approach
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail); // check if they are same values

// //REPLACE METHOD
// const priceEU = '288,97€';
// const priceUS = priceEU.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// //REPLACE METHOD FOR MULTIPLE REPLACEMENT VIA REGULAR EXPRESSIONS
// const announcement =
//   'All passangers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace(/door/g, 'gate'));
// //REPLACEALL METHOD FOR MULTIPLE REPLACEMENT
// const announcement2 =
//   'All passangers come to boarding door 23. Boarding door 23!';
// console.log(announcement2.replaceaLL('door', 'gate'));

// // BOOLEANS
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('boeing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.startsWith('A320'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// } else {
//   console.log('Not part of the New Airbus family');
// }

// //Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board!');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('I have some socks and a camera');
// checkBaggage('Got some snacks and a gun for protection');

// LESSON: 123 WORKING WITH STRINGS PART 3

// // SPLIT METHOD
// console.log('a+very+nice+string'.split('+'));
// console.log('Erhan Ertem'.split(' '));
// const [firstName, lastName] = 'Erhan Ertem'.split(' ');
// console.log(firstName);
// console.log(lastName);
// // JOIN METHOD
// console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

// //Example
// const capitalizeName = function (name) {
//   const arr = name.toLowerCase().split(' ');
//   const arrUpper = [];
//   for (const item of arr) {
//     // #1.approach with SLICE METHOD
//     // arrUpper.push(item[0].toUpperCase() + item.slice(1));
//     //#2.approach with REPLACE METHOD
//     arrUpper.push(item.replace(item[0], item[0].toUpperCase()));
//   }
//   console.log(arrUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('erhan ertem');

// //PADDING
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log(message.padEnd(30, '+'));

// //Example - Masking till the last 4 digit of the credit card
// const maskCreditCard = function (number) {
//   const str = number + ''; //concatenating a string with a number stringifies the number or use String()
//   // const str = String(number); //concatenating a string with a number stringifies the number or use String()
//   const last = str.slice(-4); //keep the last 4 in tact
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(433373737373737374));
// console.log(maskCreditCard(433373774));
// // console.log(maskCreditCard(323232323232433373774)); //bigint --> ?
// console.log(maskCreditCard('323232323232433373774'));

// // REPEAT METHOD
// const message2 = 'Bad weather... All Departures are delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(20);

// Coding Challenge: #4
/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀

*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// //#1.alternative:
// document.querySelector('button').addEventListener('click', function () {
//   const pasteText = document.querySelector('textarea').value;
//   console.log(pasteText);
//   const pasteArr = pasteText.split('\n');
//   console.log(pasteArr);
//   for (const [index, item] of pasteArr.entries()) {
//     const [first, second] = item.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, '.')}${'✅'.repeat(index + 1)}`);
//   }
// });
// //#2.alternative: my solution
// document.querySelector('button').addEventListener('click', function () {
//   const pasteText = document.querySelector('textarea').value;
//   console.log(pasteText);
//   // const pasteText =
//   //   'underscore_case first_name Some_Variable calculate_AGE delayed_departure';
//   const pasteArr = pasteText.toLowerCase().split('\n');
//   for (let [index, item] of pasteArr.entries()) {
//     console.log(
//       (
//         item.slice(0, item.indexOf('_')) +
//         item[item.indexOf('_') + 1].toUpperCase() +
//         item.slice(item.indexOf('_') + 2)
//       )
//         .padEnd(20, '.')
//         .concat(`${'✅'.repeat(index + 1)}`)
//     );
//   }
// });

// LESSON: 125 STRING METHODS PRACTICE

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const flightsArr = flights.split('+');
// for (const item of flightsArr) {
//   const [info, from, to, time] = item.split(';');
//   console.log(
//     `${info.includes('Delayed') ? '🔴' : ''} ${info.replaceAll(
//       '_',
//       ' '
//     )} from ${from.slice(0, 3).toUpperCase()} to ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.slice(0, 2)}h${time.slice(-2)})`.padStart(45)
//   );
// }
