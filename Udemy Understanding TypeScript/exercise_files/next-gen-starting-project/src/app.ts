// Code goes here!
// const userName = 'Max';
// // userName = 'Maximillian';
// let age = 30;
// age = 29;
// // var result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// console.log(add(1, 2));

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add1 = (a: number, b: number = 1) => {
//   return a + b;
// };
// const add2 = (a: number, b: number) => a + b;
// // const add3 = output: (number | string) => console.log(output); //wont work this way
// const add3: (a: number | string) => void = output => console.log(output);

// console.log(add1(2, 5));
// console.log(add1(2));
// console.log(add2(2, 5));
// console.log(add3(add(2, 100)));

// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// const hobbies = ['Cooking', 'Sports'];
// console.log(hobbies[0]);
// // const activeHobbies = ['Hiking', ...hobbies];
// const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

// const person = {
//   name: 'Max',
//   age: 30,
// };
// const copiedPerson = person;
// const copiedPerson = { ...person }; //perfect copy of an object - not a copy of an object in the memory

const add = (...numbers: number[]): number => {
  //Array of arguments
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addNumbers = add(5, 10, 2, 3, 7);
console.log(addNumbers);

// const add2 = (...numbers: [number, number, number]) => {
//   //tuple version arguments with restiricted length and types individually stated
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };
// const addNumbers2 = add(5, 10, 2);
// console.log(addNumbers2);

// const hobbies = ['Cooking', 'Sports', 'Fishing'];
// // const hobby1 = hobbies[0];
// // const hobby2 = hobbies[1];
// const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// console.log(hobby1, hobby2, remainingHobbies, hobbies);

const person = {
  name: 'Max',
  age: 30,
};
const { name: firstName, age } = person;
console.log(firstName, age, person);
