const palindrome = require('./palindrome');

describe('Palindrome', () => {
	it('Should be a function', () => {
		expect(typeof palindrome).toEqual('function');
	});
	it('Should return a boolean', () => {
		expect(typeof palindrome('hello')).toEqual('boolean');
	});
	it('Should return true for a palindrome', () => {
		// expect(palindrome('racecar')).toEqual(true);
		expect(palindrome('racecar')).toBeTruthy();
		expect(palindrome('wow')).toBeTruthy();
	});
	it('Should return false for a palindrome', () => {
		// expect(palindrome('hello world')).toEqual(false);
		expect(palindrome('hello world')).toBeFalsy();
		expect(palindrome('not a palindrome')).toBeFalsy();
	});
	it('Should return false if includes spaces', () => {
		expect(palindrome(' hello world')).toBeFalsy();
		expect(palindrome('hello world ')).toBeFalsy();
	});
});
