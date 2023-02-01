// disable es-lint
// LESSON 1 GETTING STARTED WITH REGULAR EXPRESSIONS
// // Note: there are two ways of creating regexp
// //#1. A new regexp object
// let regex1 = new RegExp('hello');
// //#2. regexp literals
// let regex2 = /world/;
// regex2 = /worlds/;

// let txt =
//   'Programming courses alwayS starts with a hello courses world example.';

// console.log(regex1.test(txt));
// console.log(regex2.test(txt));

// // Executes regexp on a target string
// regex1 = /hello/;
// regex2 = /courses/;
// console.log(regex1.exec(txt));
// console.log(regex2.exec(txt));

// // Similar to exec with one difference. Match is applied on a text to match regex pattern
// console.log(txt.match(regex1));

// //If we want to just return the index of the search
// console.log(txt.search(regex1));

// //Replaces text per the pattern
// console.log(txt.replace(regex1, 'hi'));

// //Replaces text per the pattern
// console.log(txt.split(/\s/));
// console.log(txt.split(' '));

// regex1 = /s\s/gi;
// console.log(txt.match(regex1));

// LESSON 2 SPECIFYING CHARACTERS IN REGULAR EXPRESSIONS
// let txt = 'how it that so hot? hoot a';
// console.log(txt.match(/h.t/g));
// console.log(txt.match(/h..t/g));
// // d with any character - TAB counts for a single character
// txt = 'This could@ be d\\ the final word.';
// console.log(txt.match(/d./g));
// // escape the character for its literal value
// console.log(txt.match(/d\./g));
// console.log(txt.match(/d\@/g));
// console.log(txt.match(/d\\/g)[0]);
// console.log('This could\\ be the final word.'.match(/d\\/g));

// txt = 'This could be the final word. H\not';
// console.log(txt.match(/H\not/g)[0]);

// // CODING CHALLENGE
// /*
// Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
// */

// let phoneNums = [
//   '801-766-9754',
//   '801-545-5454',
//   '435-666-1212',
//   '801-796-8010',
//   '435-555-9801',
//   '801-009-0909',
//   '435-222-8013',
//   '801-777-6655',
// ];

// console.log(phoneNums.filter(el => el.match(/^801/) !== null));
// console.log(phoneNums.filter(el => el.match(/801-/) !== null));

// let regEx = /801-/;
// console.log(phoneNums.filter(el => regEx.test(el)));

// // LESSON 3 WORKING WITH CHARACTERS
// let txt = `Make the outline for t-he square gray and the fill for the circle grey.`;
// let regex = /gr[ae]y/g;
// regex = /[abcd]/g;
// regex = /[abcd][i]/g;
// regex = /[abcd][ i]/g;
// regex = /[r ][abcd][ i]/g;
// regex = /gr[ae]y[.]/g;

// // - range metacharacter
// txt = `There have been 42  4 - 5 times I have tried, but I will try it BEZ fagain.`;
// regex = /[\-.]/g;
// regex = /[1-5]/g;
// regex = /[1-5][1-6]/g;
// regex = /[1-6a-zA-Z]/g;
// regex = /[12\-5]/g;
// regex = /[A-Z][a-i]/g;
// regex = /[A-e]/g; // means a range of A-Z + a-e
// regex = /[125-]/g; //- here is not confused as a range so there is no need for an escape character
// regex = /[-,.]/g; //- here is not confused as a range so there is no need for an escape character

// txt = `Exception 0xF89F`;
// regex = /0x/g;
// regex = /[0x]/g;
// regex = /[0x]/g;
// regex = /0x[0-9A-F]..[0-9A-F]/g;

// txt = `How do we capture the numbers 13 - 20?`;
// regex = /[0-9][0-9]/g;
// regex = /[10-20]/g;

// // ^ negate character
// txt = `Exception 0xF89F`;
// regex = /0x[^0-9A-F][^0-9A-F]/g;

// txt = `abcdefghijklmnop`;
// regex = /[a-z]/g;
// regex = /[^a-z]/g;
// txt = `abcdefghijklmnop]^`;
// regex = /[^a-z^]/g;
// regex = /[^a-z]/g;

// // Escaping metacharacters
// regex = /[A-b\]]/g;
// regex = /[Ab\]]/g;

// // Regex shorthands
// txt = `
// A string that contains numbers (12345)
// A second line _ (12345)			3 Tabs.
// `;
// regex = /\d/g;
// regex = /\w/g;
// regex = /\s/g;
// regex = /\D/g;
// regex = /\W/g;
// regex = /\S/g;
// console.log(txt.match(regex));

// // CODING CHALLENGE
// /*
// Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
// */

// let phoneNums = [
//   '801-766-9754',
//   '801-545-5454',
//   '435-666-1212',
//   '801-796-8010',
//   '435-555-9801',
//   '801-009-0909',
//   '435-222-8013',
//   '801-777-66553',
//   '801-777-665-',
//   '801-77A-6655',
//   '801-778-665',
// ];

// console.log(phoneNums.filter(el => el.match(/^801/) !== null));
// console.log(phoneNums.filter(el => el.match(/^801-\d\d\d-\d\d\d\d/) !== null));

// // LESSON 4 USING REPITITION IN REGULAR EXPRESSIONS
// txt = `SHe sells seashells on a seashore. The SHElls she sells are seashells, I’m sure.`;

// // + Repitition metacharacter - Matches one or more occurances
// regex = /[A-Z]/g;
// regex = /[A-Z]+/g;
// // ? Repitition metacharacter - Matches zero or one occurances
// regex = /[A-Z]?/g;
// // * Repitition metacharacter - Matches zero or more occurances
// regex = /[A-Z]*/g;

// txt = `
// <p>This is the first paragraph.</p><p>Paragraph number two.</p>
// <p>This is the first paragraph.</p><p>Paragraph number two.</p>
// `;
// regex = /<p>.*/g;
// regex = /<p>.*?<\/p>/g;
// regex = /<p>.*?/g;
// regex = /<p>/g;
// console.log(txt.match(regex));

// //repitition control on regex
// txt = `
// My telephone number is as follows: 801-555-6789.
// #ff0000  #C0C0C0 these are hex numbers
// 529-66-9898
// `;
// regex = /\w{3,5}/g;
// regex = /\w{3,}/g;
// regex = /\w{3}/g;
// regex = /\w{3}/g;

// txt = '235-15-5654 , 12-12-1212, 1252-152-1212, 125-12-1212';
// regex = /\d{3}-\d{2}-\d{4}/g;

// txt = '32-6678 , 45-668778, 65-454';
// regex = /\d{2}-\d{4,6}/g;
// console.log(txt.match(regex));
// regex = /\d{2}-\d{4,6}?/g;
// console.log(txt.match(regex));

// // CODING CHALLENGE
// /*
// Validate phone numbers entered into the text field. As the number is entered,
// check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn.
// If the number matches, change the text color from red to green.

// Use several different phone numbers to test.

// HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
// */
// txt = '(111)-111-1111, 111.111.1111, 111-111-1111, 1111111111, (111)111-1111';
// regex = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g;
// console.log(txt.match(regex));

// LESSON 5 USING ANCHORED EXPRESSIONS
// // ^ Start Anchor metacharacter
// let txt = `801-766-9754, 801-545-5454, 435-666-1212, 801-796-8010, 435-555-9801, 801-009-0909, 435-222-8013, 801-777-801`;
// regex = /^801/g;
// // $ End Anchor metacharacter
// regex = /801$/g;
// // Mixed ^ $
// txt = '801';
// regex = /^801$/g;
// txt = '801a';
// regex = /^801.$/g;

// txt = `The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and
// everything matches just fine when you test the regex on valid data.
// The problem is that the regex also matches in cases where it should not match. If you are new to regular expressions,
// some of these cases may not be so obvious at first.`;
// regex = /^The/gim;
// regex = /\.$/gm;

// // boundary metacharacters
// txt = 'HELLO, LOOK AT YOU!';
// regex = /LO\b/;
// regex = /\bLO/;
// txt = 'Inplant this idea: plan to plant multiple trees on this planet.';
// regex = /\bplant\b/g;
// regex = /\bthis\b/g;
// regex = /\Bplan\B/g;
// console.log(txt.match(regex));

// // CODING CHALLENGE
// /*
// The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console.
// */
// let text1 =
//   'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';
// regex = /Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/gi;
// regex = /(Tues|Wednes|Thurs|Fri|Satur|Sun)day/gim;
// regex = /\b[mtwfs][a-z]{1,4}[nris]day\b/gi;
// console.log(text1.replace(regex, 'Monday'));

// LESSON 6 WORKING WITH ALTERNATES AND GROUPS
// () grouping metacharacter
let txt =
  'a5c3a2b1d1 a1e3a2b1a4 d5c3a2b1d1 aac3a2b1d1 a5c3a2b1d6 a5c312b1d1 d4b2a5b2d3';
regex = /([a-z][0-9]){5}/g;

txt = '2018/3/9';
regex = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/;
// console.log(txt.match(regex));
// console.log(regex.exec(txt));

txt = 'yoyomo yo yoyomoyoyo';
regex = /(yo)\1/g;
regex = /yoyo/g;

// capturing groups
txt = '2018/9/9';
regex = /^(\d{4})[-./](\d{1,2})[-./]\2$/g;
//non-capturing groups with (?:)
regex = /^(?:\d{4})[-./](\d{1,2})[-./]\1$/g;

txt = 'a1a1c1d5c1c1d5b2b3d4';
regex = /([a-d][1-5])/g;
regex = /([a-d][1-5])\1/g;
regex = /(?:[a-d][1-5])\1/g;

txt = '<strong>This is a strong tag</strong><i>this is italic</i>';
regex = /<(strong>).*\/\1/g;
regex = /<(\w+>).*\/\1/g;
regex = /<(\w+>)[\w\s]+<\/\1/g;

// named capture group
txt = '<strong>This is a strong tag</strong><i>this is italic</i>';
regex = /<(?<first_group>\w+>)[\w\s]+<\/\k<first_group>/g;

//lookahead group (?=)
txt = 'allthingsjavascript.com google.com youtube.com';
regex = /\w+(?=\.com)/g;

txt = '16262ertrteAtetyte';
regex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
// console.log(txt.match(regex));

// CODING CHALLENGE
/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/
txt = 'Jensen, Dale';
let data = [
  'Jensen, Dale',
  'Smith, Andrea',
  'Jorgensen, Michael',
  'Vasefi, Annika',
  'Lopez, Monica',
  'Crockett, Steven',
  36456464,
  true,
  'Prueba 1',
];
let data_n = [];
//#1 solution
// regex = /^([a-z]+)[,\s]\s*([a-z]+)$/i;
//#2 solution - named group solution
regex = /^(?<last>[a-z]+)[,\s]\s*(?<first>[a-z]+)$/i;
data.forEach((el, i, _) => {
  console.log(el);
  if (typeof el === 'string' && regex.test(el)) {
    // console.log(el.match(regex));
    // #1 solution
    // data_n[i] = el.match(regex)[2] + ', ' + el.match(regex)[1];
    // #2 solution - named group solution
    data_n[i] =
      el.match(regex).groups.first + ', ' + el.match(regex).groups.last;
  }
});

console.log(data);
console.log(data_n);

// LESSON 7 WORKIGN WITH UNICODE
