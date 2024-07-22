const reverseString = require('./reversestring');

describe('Reverse String', () => {
	it('Should be a function', () => {
		expect(typeof reverseString).toEqual('function');
	});

	it('Should return a string', () => {
		expect(typeof reverseString('Hello, World!')).toEqual('string');
	});

	it('Should reverse the string', () => {
		expect(reverseString('Hello, World!')).toEqual('!dlroW ,olleH');
	});
});
