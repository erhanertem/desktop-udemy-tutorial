// LESSON 1 GETTING STARTED WITH REGULAR EXPRESSIONS
// Note: there are two ways of creating regexp
//#1. A new regexp object
let regex1 = new RegExp('hello');
//#2. regexp literals
let regex2 = /world/;
regex2 = /worlds/;

let txt =
  'Programming courses alwayS starts with a hello courses world example.';

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

regex1 = /s\s/gi;
console.log(txt.match(regex1));

// LESSON 2 SPECIFYING CHARACTERS IN REGULAR EXPRESSIONS
