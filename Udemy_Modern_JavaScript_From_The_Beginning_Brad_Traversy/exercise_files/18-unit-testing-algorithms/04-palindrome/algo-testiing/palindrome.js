function palindrome(string) {
	let reversed = string.split('').reverse().join('');
	return string === reversed;
}

// Alternate function
function palindrome2(string) {
	return string.split('').every((char, index) => {
		return char === string[str.length - 1 - index];
	});
}

module.exports = palindrome;
