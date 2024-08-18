function calculator(num1, num2, operator) {
	let result;
	switch (operator) {
		case '+':
			result = num1 + num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		default:
			result = 'Invalid Operator';
	}

	return console.log(result);
}
calculator(1, 2, '+');
calculator(2, 2, '*');
