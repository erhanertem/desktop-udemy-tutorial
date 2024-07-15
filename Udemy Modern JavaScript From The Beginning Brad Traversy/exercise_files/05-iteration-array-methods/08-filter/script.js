const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = [];
numbers2.forEach((num) => {
	if (num % 2 === 0) {
		filteredArray.push(num);
	}
});
console.log(filteredArray);
