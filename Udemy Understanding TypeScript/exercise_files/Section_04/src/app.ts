// // > let & const
// const userName = 'Erhan';
// // userName = 'Ertem';
// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }
// console.log(result);

// if (age > 20) {
//   var isOld = true;
// }
// console.log(isOld);

// > Arrow Functions
// const add = (a: number, b: number) => {
//   return a + b;
// };
// const add = (a: number, b: number) => a + b;
// console.log(add(2, 5));

// const printOut = (output: string | number) => console.log(output);
// const printOut_: (a: number | string) => void = (output) => console.log(output);
// printOut(add(5, 2));

// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', (e) => console.log(e));
// }

// // > Default Function Parameters
// const add = (a: number, b: number = 1) => a + b;
// console.log(add(2));

// // > Spread Operator
// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];
// // activeHobbies.push(hobbies[0]);
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

// const person = {
//    name: 'Erhan ERTEM',
// 	age: 30,
// };

// const copiedPerson = { ...person };

// // > Rest Operator
// const add = (...numbers: number[]) => {
// 	return numbers.reduce((curResult, el) => {
// 		return curResult + el;
// 	}, 0);
// };

// const addNumbers = add(5, 20, 2, 1, 5.2);
// console.log('addNumbers :', addNumbers);

// // > ARRAY & OBJECT Destructuring
// const hobbies = ['Crazy Sports', 'Cooking', 'Hiking', 'Carpenting'];
// // const hobyy1 = hobbies[0];
// // const hobyy2 = hobbies[1];
// const [hobby_1, hobby_2, ...remainingHobbies] = hobbies;
// console.log('remainingHobbies :', remainingHobbies);
// console.log('hobby_2 :', hobby_2);
// console.log('hobby_1 :', hobby_1);

// const person = {
// 	name_: 'Erhan ERTEM',
// 	age_: 30,
// };
// const { name_: userName, age_: userAge } = person;
// console.log('userName :', userName);
// console.log('userAge :', userAge);
