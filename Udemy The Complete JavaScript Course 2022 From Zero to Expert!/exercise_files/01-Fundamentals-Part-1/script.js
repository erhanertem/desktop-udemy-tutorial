// SECTION: #2 JAVASCRIPT FUNDAMENTALS PART 1
// LESSON: 10 VALUES & VARIABLES

// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");

// 40 + 8 + 2 - 10;
// console.log(40 + 8 + 2 - 10); //bridges between the browser console and our script

// console.log("ERHAN");
// console.log(23);

// let firstName = "Erhan";
// console.log(firstName);

// let first = "Erhan";
// let last = "Ertem";
// // NOTE: camelcase notation for naming variables
// let firstNamePerson;
// //NOTE: variables can not start with a number. causes js syntax error
// // let 3years = 3;

// // error --> unexpected token
// // let erhan& melike = "EM"

// // NOTE: underscore and $ is allowed
// let $erhan_melike = 27;

// // NOTE: a real constant could be marked with uppercase
// let PI = 3.1415;

// //NOTE: Be descriptive in writting up your variables
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";
// //Bad practice
// let job1 = "Programmer";
// let job2 = "Teacher";

// LESSON: 12 DATA TYPES
// /*
// THIS IS A MULTI LINE COMMENTING
// */
// true;
// console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // typeof operator
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "23");
// console.log(typeof "ERHAN");

// // Dynamic typing --> we changed it from BOOLEAN to STRING type
// javascriptIsFun = "erhan";
// console.log(javascriptIsFun);

// // UNDEFINED --> the empty variable
// let year;
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);

// //NULL
// // NOTE: legacy bug in JS --> it shoudl have returned null just like undefined returning undefined.
// console.log(typeof null);

// LESSON: 13 LET, CONST, VAR

// // NOTE: MUTATING/REASSIGNING A VALUE
// let age = 30;
// age = 31;

// // NOTE: const variables are IMMUTABLE
// const birthYear = 1991;
// birthYear = 1990;
// // NOTE: IMMUTABLE variables can not be declared with no value declaration
// const job;

// // LET IS BLOCK SCOPPED AND VAR IS FUNCTION SCOPPED
// var job1 = "programmer";
// job1 = "teacher";

// LESSON: 14 BASIC OPERATORS

// const currentYear = 2037;
// const ageJonas = currentYear - 1991; // 46
// const ageSarah = currentYear - 2018; // 19
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// // 2**3 means 2 to power of 3 = 2*2*2

// //  STRING CONCATENATION
// const firstName = "Erhan";
// const lastName = "Ertem";
// console.log(firstName + " " + lastName);

// // ASSIGNMENT OPERATORS
// let x = 10 + 5;
// x += 10; //x=x+10
// x -= 10; //x=x-10
// x *= 10; //x=x*10
// x /= 10; //x=x/10
// x++; //x=x+1
// x--; //x=x-1
// x--; //14
// console.log(x);

// // COMPARISON OPERATORS
// console.log(ageJonas > ageSarah); // 46>19 - true
// console.log(ageSarah >= 18); // 19 - true

// const isFullAge = ageSarah >= 18; // in real life we store this type results in variables

// console.log(currentYear - 1991 > currentYear - 2018); // operator precedence defines how this calcualtes

// LESSON: 15 OPERATOR PRECEDENCE

// const currentYear = 2037;
// const ageJonas = currentYear - 1991; // 46
// const ageSarah = currentYear - 2018; // 19

// console.log(currentYear - 1991 > currentYear - 2018); // operator precedence defines how this calcualtes

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // equal assignment operator runs right-to-left according to precedence mdn sheet
// console.log(x, y);

// console.log((25 - 10) * 5); //(...) has he highest precendence. If ever in doubt utilize the parantheses to dictate priority of operations

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge: #1
// /*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �
// */

// let heightMark, heightJohn;
// let weightMark, weightJohn;
// let bmiMark, bmiJohn;
// let markHigherBMI;
// // TEST#1
// heightMark = 1.69;
// weightMark = 78;
// bmiMark = weightMark / heightMark ** 2;
// weightJohn = 92;
// heightJohn = 1.95;
// bmiJohn = weightJohn / heightJohn ** 2;
// markHigherBMI = typeof bmiMark > bmiJohn;
// console.log(
// 	"Mark with " +
// 		bmiMark +
// 		"BMI bears a higher BMI than John with " +
// 		bmiJohn +
// 		" : " +
// 		markHigherBMI,
// );

// // TEST#2
// heightMark = 1.88;
// weightMark = 95;
// bmiMark = weightMark / heightMark ** 2;
// weightJohn = 85;
// heightJohn = 1.76;
// bmiJohn = weightJohn / heightJohn ** 2;
// console.log(
// 	"Mark with " +
// 		bmiMark +
// 		"BMI bears a higher BMI than John with " +
// 		bmiJohn +
// 		" : " +
// 		markHigherBMI,
// );

// LESSON: 17 STRINGS AND TEMPLATE LITERALS

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const currentYear = 2037;

// // CONCATENATED METHOD IS TOILSOME - HARD TO MANAGE SPACINGS, ETC.
// const jonas =
// 	"I'm " +
// 	firstName +
// 	", a " +
// 	(currentYear - birthYear) +
// 	" year old " +
// 	job +
// 	" !";
// console.log(jonas);

// // TEMPLATE LITERAL WITH BACKTICKS
// const jonasNew = `I'm ${firstName}, a ${
// 	currentYear - birthYear
// } year old ${job} !`;
// console.log(jonasNew);

// // NOTE: SOME DEVELOPERS ALWAYS USE BACKTICKS EVEN FOR STRINGS WITH NO TEMPLATE LITERALS
// console.log(`Just a regular string.....`);

// // NOTE: BACKTICK WITH STRINGS ALLOWS FOR MULTIPLE LINES RATHER THAN UTILIZING ESCAPE CHARACTERS
// console.log("String with \n multiple \n lines");
// console.log(`String
// multiple
// lines`);

// LESSON: 18 TAKING DECISIONS IF/ELSE STATEMENTS

// const age = 19;
// const isOldEnough = age >= 18;

// // //BOOLEAN VALUE IS BEING TESTED, IF TRUEW THE CODE INSIDE {} EXECUTTED
// // if (isOldEnough) {
// // 	console.log("Sarah is eligible for a driver's license 🚗");
// // }

// // IF/ELSE CONTROL STRUCTURE
// if (age >= 18) {
// 	console.log("Sarah is eligible for a driver's license 🚗");
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// // const birthYear = 1991;
// // if (birthYear <= 2000) {
// // 	let century = 20;
// // } else {
// // 	let century = 21;
// // }
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }
// console.log(century);
// // NOTE: variables declared inside the if block is not accessible from the outside. In order to make it accesible, variable should be declared outside.

// Coding Challenge: #2
// /*
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �
// */
// let heightMark, heightJohn;
// let weightMark, weightJohn;
// let bmiMark, bmiJohn;
// let markHigherBMI;
// // TEST#1
// heightMark = 1.69;
// weightMark = 78;
// bmiMark = weightMark / heightMark ** 2;
// weightJohn = 92;
// heightJohn = 1.95;
// bmiJohn = weightJohn / heightJohn ** 2;
// markHigherBMI = typeof bmiMark > bmiJohn;
// if (bmiMark > bmiJohn) {
// 	console.log(
// 		`Mark with ${bmiMark} BMI bears a higher score than John does with a BMI value of ${bmiJohn}`,
// 	);
// } else {
// 	console.log(
// 		`John with ${bmiJohn} BMI bears a higher score than Mark does with a BMI value of ${bmiJohn}`,
// 	);
// }
// // TEST#2
// heightMark = 1.88;
// weightMark = 95;
// bmiMark = weightMark / heightMark ** 2;
// weightJohn = 85;
// heightJohn = 1.76;
// bmiJohn = weightJohn / heightJohn ** 2;
// if (bmiMark > bmiJohn) {
// 	console.log(
// 		`Mark with ${bmiMark} BMI bears a higher score than John does with a BMI value of ${bmiJohn}`,
// 	);
// } else {
// 	console.log(
// 		`John with ${bmiJohn} BMI bears a higher score than Mark does with a BMI value of ${bmiMark}`,
// 	);
// }

// LESSON: 20 TYPE CONVERSION AND COERCION

// const inputYear = "1991";
// console.log(inputYear + 18); //199118 string
// //STRING TO NUMBER CONVERSION
// console.log(Number(inputYear) + 18, inputYear); //2009
// // NOTE: number function converts the string to a number. But do not MUTATE the original vasriable value.
// console.log(Number("Erhan"));
// // NOTE: Throws an error. The string is not a number. NaN
// console.log(typeof NaN);
// //NUMBER TO STRING CONVERSION
// console.log(String(23), 23);

// // TYPE COERCION
// console.log("I am " + 23 + " years old"); // the number inbetween is automatically converted to a string
// console.log("23" + "10" + 3); //js concatenates them as strings
// console.log("23" - "10" - 3); //js converted them to numbers in this case since its a substraction
// console.log("23" / "2"); //js converted them to numbers in this case since its a division
// //
// let n = "1" + 1; // "11"
// n = n - 1; // 10
// //
// n = 2 + 3 + 4 + "5"; // "95"
// n = "10" - "4" - "3" - 2 + "5"; // "15"
// console.log(n);

// LESSON: 21 TRUTHY AND FALSY VALUES

// // NOTE: 5 falsy values --> 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 1000;
// if (money) {
// 	console.log("Spend it wisely 👌");
// } else {
// 	console.log("You should get a job!");
// }

// let height;
// height = 0;
// if (height) {
// 	console.log("YAY! Height is defined");
// } else {
// 	console.log("Height is UNDEFINED!");
// }

// LESSON: 22 EQUALITY OPERATORS

// // NOTE: AS A GENERAL THUMB OF RULE, ALWAYS TRY TO AVOIUD == (LOOSE EQUALITY OPERATOR)
// const age = 18;
// //STRICT EQUALITY OPERATOR - NO TYPE COERCION
// if (age === 18) {
// 	console.log("You just became an adult!");
// } else {
// 	console.log("Grow up boi!");
// }
// // NO TYPE COERCION COUNTS FAILED!!!
// if (age === "18") {
// 	console.log("You just became an adult!");
// } else {
// 	console.log("Grow up boi!");
// }
// //LOOSE EQUALITY OPERATOR - TYPE COERCION
// if (age == "18") {
// 	console.log("You just became an adult!");
// } else {
// 	console.log("Grow up boi!");
// }

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite); // 23
// console.log(typeof favourite); // string
// if (favourite === 23) {
// 	console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 9) {
// 	console.log("9 is also a cool number");
// } else if (favourite === 7) {
// 	console.log("7 is also a cool number");
// } else {
// 	console.log("Number is not 23, 9 or 7, oh boi!");
// }
// // NOT STRICT EQUALITY OPERATOR
// if (favourite !== 23) {
// 	console.log("Why not 23?");
// }

// LESSON: 23 BOOLEAN LOGIC

// ! NOT OPERATOR
// NOTE: IT HAS THE HIGHEST PRECEDENCE
// AND || OPERATOR
// OR OPERATOR

// LESSON: 24 LOGICAL OPERATORS

// const hasDriversLicense = true; //Condition A
// const hasGoodVision = false; //Condition B

// console.log(hasDriversLicense && hasGoodVision); // false
// console.log(hasDriversLicense || hasGoodVision); // true
// console.log(!hasDriversLicense); // false

// const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// // 	console.log("Sarah is able to drive");
// // } else {
// // 	console.log("Someone else should drive !🤷‍♂️");
// // }

// const isTired = true; // Condition C
// console.log(hasDriversLicense || hasGoodVision || isTired); // true
// console.log(hasDriversLicense && hasGoodVision && isTired); // false

// if (hasDriversLicense && hasGoodVision && !isTired) {
// 	console.log("Sarah is able to drive");
// } else {
// 	console.log("Someone else should drive !🤷‍♂️");
// }

// Coding Challenge: #3
// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀
// */
// //#1
// let avgDolphins = (96 + 108 + 89) / 3;
// let avgKoalas = (109 + 95 + 123) / 3;
// console.log(avgDolphins, avgKoalas);
// //#2
// if (avgDolphins > avgKoalas) {
// 	console.log(`Dolphins wins! 🏆`);
// } else if (avgKoalas > avgDolphins) {
// 	console.log("Koalas wins! 🏆");
// } else {
// 	console.log(`It's a draw. No winner!`);
// }
// //#3
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
// 	console.log(`Dolphins wins! 🏆`);
// } else if (avgKoalas > avgDolphins >= 100) {
// 	console.log("Koalas wins! 🏆");
// } else {
// 	console.log(`It's a draw. No winner!`);
// }
// //#4
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
// 	console.log(`Dolphins wins! 🏆`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
// 	console.log("Koalas wins! 🏆");
// } else if (
// 	avgKoalas === avgDolphins &&
// 	avgKoalas >= 100 &&
// 	avgDolphins >= 100
// ) {
// 	console.log(`It's a draw. No winner!`);
// } else console.log(`Not a single satisfied condition for winning!`);

// LESSON: 26 THE SWITCH STATEMENT

// const day = "wednesday";
// // switch statement
// switch (day) {
// 	case "monday":
// 		console.log("Plan my course structure");
// 		console.log("Go to grocery");
// 		break;
// 	case "tuesday":
// 		console.log("Prepare theory course");
// 		break;
// 	case "wednesday":
// 	//  without the break outpouts shown till the next break
// 	case "thursday":
// 		console.log("Write code examples");
// 		break;
// 	case "friday":
// 		console.log("Record videos");
// 		break;
// 	case "saturday":
// 	case "sunday":
// 		console.log("Enjoy the weekend!");
// 		break;
// 	default:
// 		console.log("not a valid day");
// }
// // if/if else rewrite of the above switch statement
// if (day === "monday") {
// 	console.log("Plan my course structure");
// 	console.log("Go to grocery");
// } else if (day === "tuesday") {
// 	console.log("Prepare theory course");
// } else if (day === "wednesday" || day === "thursday") {
// 	console.log("Write code examples");
// } else if (day === "friday") {
// 	console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
// 	console.log("Enjoy the weekend!");
// } else {
// 	console.log("not a valid day");
// }

// LESSON: 27 STATEMENTS AND EXPRESSIONS

// //EXPRESSIONS
// 3 + 4; //its an expression because it creates a value on its own
// 1991;
// true && false && !false;

// //STATEMENTS
// if (23 > 10) {
// 	const str = "23 is bigger";
// } // they do not create a value on its own. Its made up of expressions

// console.log(`I'm ${2037 - 1991} years old`); // expressions can only be incorporated into template literals not statements

// LESSON: 28 TERNARY OPERATOR

// const age = 23;

// // Ternary operator comprised of 3 parts
// age >= 18 //condition statement
// 	? console.log("I like to drink wine 🍷") //if true this line executed
// 	: console.log("I like to drink water 💧"); //else this line executed
// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // reproduce with if/else statement
// let drink2;
// if (age >= 18) {
// 	drink2 = "wine 🍷";
// } else {
// 	drink2 = "waster 💧";
// }
// console.log(drink2);

// // NOTE: A ternary operator can succesfully live in a templatye literal unlike any other if else statements
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"} `);

// Coding Challenge: #4
// /*
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀
// */
// // const tip;
// const billValue = Number(prompt("Please enter the bill value: "));
// // // if/else version
// // if (billValue >= 50 && billValue <= 300) {
// // 	tip = billValue * 0.15;
// // } else if (billValue > 300) {
// // 	tip = billValue * 0.2;
// // } else if (billValue < 50 && billValue > 0) {
// // 	tip = billValue * 0;
// // } else {
// // 	console.log("Please input a number!");
// // }
// // ternary version
// // billValue >= 50 && billValue <= 300
// // 	? (tip = billValue * 0.15)
// // 	: billValue > 300
// // 	? (tip = billValue * 0.2)
// // 	: billValue < 50 && billValue > 0
// // 	? (tip = billValue * 0)
// // 	: console.log("Please input a number!");
// const tip =
// 	billValue >= 50 && billValue <= 300
// 		? billValue * 0.15
// 		: billValue > 300
// 		? billValue * 0.2
// 		: billValue < 50 && billValue > 0
// 		? billValue * 0
// 		: console.log("Please input a number!");

// console.log(
// 	`The bill was ${billValue}, the tip was ${tip}, and the total value ${
// 		billValue + tip
// 	}`,
// );
