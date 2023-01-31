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
let txt = 'how it that so hot? hoot a';
console.log(txt.match(/h.t/g));
console.log(txt.match(/h..t/g));
// d with any character - TAB counts for a single character
txt = 'This could@ be d\\ the final word.';
console.log(txt.match(/d./g));
// escape the character for its literal value
console.log(txt.match(/d\./g));
console.log(txt.match(/d\@/g));
console.log(txt.match(/d\\/g)[0]);
console.log('This could\\ be the final word.'.match(/d\\/g));

txt = 'This could be the final word. H\not';
console.log(txt.match(/H\not/g)[0]);

// CODING CHALLENGE
/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = [
  '801-766-9754',
  '801-545-5454',
  '435-666-1212',
  '801-796-8010',
  '435-555-9801',
  '801-009-0909',
  '435-222-8013',
  '801-777-6655',
];

console.log(phoneNums.filter(el => el.match(/^801/) !== null));
console.log(phoneNums.filter(el => el.match(/801-/) !== null));

let regEx = /801-/;
console.log(phoneNums.filter(el => regEx.test(el)));
