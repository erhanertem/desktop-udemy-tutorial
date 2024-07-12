// Function Declaration - FREE OF HOISTING
console.log(addDollarSign(100));
function addDollarSign(value) {
	return '$' + value;
}

// Function Expression - HOISTING
const addPlusSign = function (value) {
	return '+' + value;
};
console.log(addPlusSign(200));
