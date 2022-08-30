// LESSON: 32 ACTIVATING STRICT VERSION
// NOTE: This statement has to be the very first statement. Without this mode, JS dies sliently without throwing error on the browser console
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // intentional variable name mistype for causing an error in the console
// if (hasDriversLicense) console.log("I can drive ");
// const private = 534;
// // NOTE: some reserved names could not be used as variable names

// LESSON: 33 FUNCTIONS

// //NONPARAMETER FUNCTION
// function logger() {
// 	console.log("My name is ERHAN ERTEM");
// } // declaring a function
// logger(); //invoking, running, executing or calling the function
// logger(23); //specifiying an argument to a nonparameter function renders no effect
// logger();

// //FUNCTION WITH PARAMETERS/ARGUMENTS
// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //only limited within the function
// 	return juice;
// }
// console.log(fruitProcessor(5, 0)); //get an outpout without capturing the result of the function
// const appleJuice = fruitProcessor(5, 0); //we need to capture juice value to a variable
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //BUILT-IN JS FUNCTIONS
// const num = Number("23"); //built-in number() function
// console.log(num); //built-in console.log() function

// LESSON: 34 FUNCTION DECLARATIONS VS EXPRESSIONS

// // function calcAge1(birthYear) {
// // 	const age = 2037 - birthYear;
// // 	return age;
// // }

// // FUNCTION DECLARATION
// // NOTE: COMPARED TO FUNCTION EXPRESSIONS, FUNCTION DECLARATIONS COULD BE CALLED BEFORE/AFTER DECLARATION.
// // BEFORE
// const age1_1 = calcAge1(1991);

// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }
// // AFTER
// const age1 = calcAge1(1991);
// console.log(age1_1, age1);

// // FUNCTION EXPRESSION
// //NOTE: FUNCTION EXPRESSIONS REQUIRE DECLARING FIRST THEN CALLING THE FUNCTION.
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// LESSON: 35 ARROW FUNCTIONS

// //ARROW FUNCTION
// //NOTE: UNLIKE FUNCTION EXPRESSIONS, ITS A GOOD FOR ONE LINER FUNCTIONS, RETURN STATEMENT IS PROVIDED IMPLICETELY.
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// // NOTE: FOR MORE THAN ONE LINER CODE, PAERANTHESIS NEEDS TO BE USED FOR ENCLOSING THE CODE BLOCK ALONG WITH A RETURN STATEMENT
// const yearsUntilRetirement = (birthYear) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	return retirement;
// };
// console.log(yearsUntilRetirement(1991));

// //NOTE: In case of multiple arguments
// const yearsUntilRetirement2 = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement2(1991, "Erhan"));

// LESSON: 36 FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples); // calling a function inside the function
// 	const orangePieces = cutFruitPieces(oranges); // calling a function inside the function
// 	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
// 	return juice;
// }
// console.log(fruitProcessor(2, 3));

// LESSON: 37 FUNCTIONS CALLING OTHER FUNCTIONS

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// // NOTE: birthYear argument used in this function is totally irrelevant to birthyear argument in calcAge function. Each argument is local to their pertinent function.
// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} has already retired 🎉`);
// //NOTE: console.log IS NOT A RETURN LINE. EVERY FUNCTION NEEDS TO RETURN AN OUTPUT
// 		return -1;
// 	}
// };
// console.log(yearsUntilRetirement(1991, "Erhan"));
// console.log(yearsUntilRetirement(1950, "Mary"));

// Coding Challenge: #1
// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀
// */

// const calcAverage = (score_1, score_2, score_3) =>
// 	(score_1 + score_2 + score_3) / 3;

// //data #1
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
// console.log(avgDolphins1, avgKoalas1);
// //data #2
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// console.log(avgDolphins2, avgKoalas2);

// const checkWinner = function (avgDolphins, avgKoalas) {
// 	if (avgDolphins >= 2 * avgKoalas) {
// 		console.log(`Dolphins wins! (${avgDolphins} vs. ${avgKoalas})`);
// 		return;
// 	} else if (avgKoalas >= 2 * avgDolphins) {
// 		console.log(`Koalas wins! (${avgKoalas} vs. ${avgDolphins})`);
// 		return;
// 	} else {
// 		console.log(`No winner at this time!`);
// 		return;
// 	}
// };
// //test both data  for the winner
// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);

// LESSON: 39 INTRODUCTION TO ARRAY

// const friend1 = "Micheal";
// const firend2 = "Steven";
// const firend3 = "Peter";

// // #1. Creating an array with [] annotation
// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length); // Acquire the length of the array
// console.log(friends[friends.length - 1]); // Acquire the last element of the array as index starts @ 0 onward

// friends[2] = "Jay"; //Peter gets substituted with Jay
// /*NOTE: ONLY PRIMITIVE VALUES ARE IMMUTABLE. ALTHOUGH FRIENDS ARRAY IS DECLARED AS CONST, IT IS MUTATABLE. HOWEVER, MUTATING THE ENTIRE ARRAY IS NOT ALLOWED, ITS ILLEGAL */
// // friends = ["alice", "martha"];

// console.log(friends);

// // #2. creating an array via new Array() function
// const years = new Array(1991, 1984, 2008, 2020);

// //Storing array inside another array and different primitive types
// const jonas = ["Jonas", "Schemedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// const years2 = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); //NaN
// console.log(calcAge(years[0]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[years.length - 1]));

// //NOTE: we can include function expressions inside arrays
// const ages = [
// 	calcAge(years[0]),
// 	calcAge(years[2]),
// 	calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// LESSON: 40 BASIC ARRAY METHODS

// const friends = ["Micheal", "Steven", "Peter"];

// // NOTE: Adds element to the end of the array
// const newLength = friends.push("Jay");
// console.log(newLength);
// // NOTE: Adds element to the beginning of the array
// friends.unshift("John");
// // NOTE: Removes the last element of the array
// friends.pop();
// // NOTE: Removes the first element of the array
// friends.shift();

// console.log(friends);

// //NOTE: Find whether inquired element exists in the array
// console.log(friends.indexOf("Steven")); //1 (true)
// console.log(friends.indexOf("Bob")); //-1 (false)
// //NOTE: Find whether inquired element exists in the array - boolean return
// console.log(friends.includes("Steven")); //true
// console.log(friends.includes("Bob")); //false
// if (friends.includes("Peter")) console.log("You have a friend called Peter");

// Coding Challenge: #2
// /*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀
// */

// const billValue = 100;

// const calcTip = function (billValue) {
// 	return billValue >= 50 && billValue <= 300
// 		? billValue * 0.15
// 		: billValue > 300
// 		? billValue * 0.2
// 		: billValue < 50 && billValue > 0
// 		? billValue * 0
// 		: console.log("Please input a number!");
// };

// console.log(calcTip(100));

// const testData = [125, 555, 44];

// console.log(
// 	`The bill was ${billValue}, the tip was ${calcTip(
// 		billValue,
// 	)}, and the total value ${billValue + calcTip(billValue)}`,
// );

// console.log(
// 	`The bill was ${testData[0]}, the tip was ${calcTip(
// 		testData[0],
// 	)}, and the total value ${testData[0] + calcTip(testData[0])}`,
// );
// console.log(
// 	`The bill was ${testData[1]}, the tip was ${calcTip(
// 		testData[1],
// 	)}, and the total value ${testData[1] + calcTip(testData[1])}`,
// );
// console.log(
// 	`The bill was ${testData[2]}, the tip was ${calcTip(
// 		testData[2],
// 	)}, and the total value ${testData[2] + calcTip(testData[2])}`,
// );

// LESSON: 42 INTRODUCTION TO OBJECTS

// // NOTE: Arrays are indexed data 0 onward...Index/order matters
// const jonasArray = [
// 	"Jonas",
// 	"Hintmann",
// 	23,
// 	"teacher",
// 	["Steven", "Haribo", 2013 - 12],
// ];

// // NOTE: Objects bear key/value pairs. Each value is tagged via name(key) so index/order do not matter in object literals
// const jonasObject = {
// 	firstName: "Erhan",
// 	lastName: "Ertem",
// 	age: 2037 - 1978,
// 	job: "teaxcher",
// 	friends: ["Xelda", "Homeros", "Hitites"],
// };

// console.log(jonasObject);

// LESSON: 43 DOT VS BRACKET NOTATION

// const jonasObject = {
// 	firstName: "Erhan",
// 	lastName: "Ertem",
// 	age: 2037 - 1978,
// 	job: "teacher",
// 	friends: ["Xelda", "Homeros", "Hitites"],
// };

// //NOTE: TYPE OF CALLING OOUT SPECIFIC OBJECT KEY
// // DOT NOTATION TYPE
// console.log(jonasObject.lastName);
// // BRACKET NOTATION TYPE
// console.log(jonasObject["lastName"]);
// //NOTE: could be usefull in situations where we get a computational value
// const nameKey = "Name";
// console.log(jonasObject["first" + nameKey]);
// console.log(jonasObject["last" + nameKey]);

// const interestedIn = prompt(
// 	"What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends?",
// );

// if (jonasObject[interestedIn]) {
// 	console.log(jonasObject[interestedIn]);
// } else {
// 	console.log("Input a correct key value!");
// }

// //NOTE: Adding key/value pair later
// jonasObject.location = "Portugal";
// jonasObject["twitter"] = "@jonassschellmate";
// console.log(jonasObject);

// console.log(
// 	`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`,
// );

// LESSON: 44 OBJECT METHODS

// //V1 OBJECT
// const jonas = {
// 	firstName: "Erhan",
// 	lastName: "Ertem",
// 	birthYear: 1991,
// 	job: "teacher",
// 	friends: ["Xelda", "Homeros", "Hitites"],
// 	hasDriversLicense: true,
// 	// NOTE: function expression implementation inside JS objects
// 	calcAge: function (birthYear) {
// 		return 2037 - birthYear;
// 	},
// };
// //CALLING FUNCTION RESIDING INSIDE AN OBJECT
// // DOT STYLE
// console.log(jonas.calcAge(1991));
// //BRACKET STYLE
// console.log(jonas["calcAge"](1991));

// //V2 OBJECT
// //THIS IN OBJECTS
// const jonas2 = {
// 	firstName: "Erhan",
// 	lastName: "Ertem",
// 	birthYear: 1991,
// 	job: "teacher",
// 	friends: ["Xelda", "Homeros", "Hitites"],
// 	hasDriversLicense: true,
// 	// NOTE: function expression implementation inside JS objects
// 	calcAge: function () {
// 		console.log(this); //this points to jonas
// 		return 2037 - this.birthYear;
// 	},
// };
// console.log(jonas2.calcAge());
// console.log(jonas2.calcAge());
// console.log(jonas2.calcAge());
// console.log(jonas2.calcAge()); //IMPORTANT: why compute everytime to solicit the age info??

// //V3 OBJECT
// const jonas3 = {
// 	firstName: "Erhan",
// 	lastName: "Ertem",
// 	birthYear: 1978,
// 	job: "teacher",
// 	friends: ["Xelda", "Homeros", "Hitites"],
// 	hasDriversLicense: true,
// 	// NOTE: IN ORDER TO CALC EVERYTIME, THE FUNCTION OUTPUT IS STORED IN A VARIABLE WHICH COULD BE SOLICITED ANYTIME.
// 	calcAge: function () {
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},
// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.age}-year old ${this.job}, and ${
// 			this.hasDriversLicense
// 				? `he has a driver's license`
// 				: `he has no driver's license`
// 		}.`;
// 	},
// };

// console.log(jonas3.calcAge()); //RUN ONCE THE FUNCTION HAVE HIM CALC THE AGE FIELD
// console.log(jonas3.age); //  THEN ONLY SOLICIT THE AGE RATHER THAN RUNNING COMPUTATIONAL FUNC OVER AND OVER AGAIN.
// console.log(jonas3.getSummary());

// Coding Challenge: #3
// /*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀
// */

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		return (this.BMI = this.mass / this.height ** 2);
// 	},
// };

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		return (this.BMI = this.mass / this.height ** 2);
// 	},
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// console.log(
// 	`${mark.BMI > john.BMI ? mark.fullName : john.fullName}'s BMI (${
// 		mark.BMI > john.BMI ? mark.BMI : john.BMI
// 	}) is higher than ${mark.BMI < john.BMI ? mark.fullName : john.fullName}'s (${
// 		mark.BMI < john.BMI ? mark.BMI : john.BMI
// 	})`,
// );

// LESSON: 46 ITERATION: THE FOR LOOP

// for (let i = 0; i <= 10; i++) {
// 	console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
// }

// LESSON: 47 LOOPING ARRAYS, BREAKING AND CONTINUING

// const jonasArray = [
//   'Jonas',
//   'Hintmann',
//   2037 - 1991,
//   'teacher',
//   ['Steven', 'Haribo', 'Tariq'],
// ];
// const types = []; //create a blank array

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //adding to array
//   // types[i] = typeof jonasArray[i];
//   // alternate method of adding elements to array
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //CONTINUE - break and contimnue the loop
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// } //skips the non-string items

// //BREAK - terminates the whole loop
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number') break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// } //breaks @ sight of a number

// LESSON: 48 LOOPING BACKWARDS AND LOOPS IN LOOPS

// const jonas = [
//   'Jonas',
//   'Hintmann',
//   2037 - 1991,
//   'teacher',
//   ['Steven', 'Haribo', 'Tariq'],
// ];

// //BACKWARD LOOP IMPLEMENTATION
// console.log(jonas.length);
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }
// //INNER LOOP IMPLEMENTATION
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repitition ${rep} 🏋️‍♀️`);
//   }
// }

// LESSON: 49 THE WHILE LOOP

// //FOR LOOP CODE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// //WHILE LOOP IMPLEMENTATION OF ABOVE CODE
// let reps = 1; //introduce the condition first
// while (reps <= 10) {
//   //introduce the limit
//   console.log(`Lifting weights repetition ${reps} 🏋️‍♀️`);
//   reps++; //introduce the counter increment
// }

// //NOTE: FORLOOPS ARE GOOD CHOICE IF WE KNOW THE ITERATION COUNT BEFORE HAND SUCH AS ARRAYS ETC. WHILE LOOPS ARE GOOD FIT FOR CONDITIONS WHERE WE HAVE NO WAY OF KNOWING HOW MANY ITERATIONS WOULD REQUIRE TO END THE CYCLING
// let dice = Math.trunc(Math.random() * 6) + 1; //intialize dice
// while (dice !== 6) {
//   //check condition met?
//   console.log(`You rolled a ${dice}`); //log the output
//   dice = Math.trunc(Math.random() * 6) + 1; //take another dice
//   if (dice === 6) console.log('Loop is about to end....'); //exit log
// }

// Coding Challenge: #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (billValue) {
//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue > 300
//     ? billValue * 0.2
//     : billValue < 50 && billValue > 0
//     ? billValue * 0
//     : console.log('Please input a number!');
// };

// for (let i = 0; i <= bills.length - 1; i++) {
//   let add = calcTip(bills[i]);
//   tips.push(add);
//   totals.push(add + bills[i]);
// }
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
