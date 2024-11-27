// const person = {
// 	name: 'Max',
// 	age: 29,
// 	greet() {
// 		console.log("Hi, I'm " + this.name);
// 	},
// 	// Alternate function call syntax
// 	// greet: () => {
// 	// 	console.log("Hi, I'm " + this.name);
// 	// },
// };

// console.log(person);
// person.greet();

// const printName1 = (obj) => console.log(obj.name);
// console.log(printName1(person));
// const printName2 = ({ name, age }) => console.log(age + '|' + name);
// console.log(printName2(person));

// const copiedPerson = { ...person };
// console.log('-->', copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// 	console.log(hobby);
// }
// const newHobbies = hobbies.map((hobby) => {
// 	return 'Hobby: ' + hobby;
// });
// console.log(hobbies);
// console.log(newHobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArr1 = hobbies.slice();
// console.log(copiedArr1);
// const copiedArr2 = [...hobbies];
// console.log(copiedArr2);

// const toArray1 = (arg1, arg2, arg3) => {
// 	return [arg1, arg2, arg3];
// };
// console.log(toArray1(1, 2, 3));
// const toArray2 = (...args) => {
// 	return args;
// };
// console.log(toArray2(1, 2, 3, 4));

// const fetchData = (callback) => {
// 	setTimeout(() => {
// 		callback('Done!');
// 	}, 1500);
// };
// setTimeout(() => {
// 	console.log('Time is done');
// 	const callback = (text) => {
// 		console.log(text);
// 	};
// 	fetchData(callback);
// }, 2000);
// console.log('Hello!');
// console.log('Hi');

const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
	return promise;
};
setTimeout(() => {
	console.log('Time is done');
	fetchData()
		.then((text1) => {
			console.log(text1);
			return fetchData();
		})
		.then((text2) => console.log(text2));
}, 2000);

const x = 'string';
