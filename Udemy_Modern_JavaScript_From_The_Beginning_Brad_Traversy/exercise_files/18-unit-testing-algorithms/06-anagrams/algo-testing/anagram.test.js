const anagram = require('./anagram');

describe('Anagram', () => {
	it('Should be a function', () => {
		expect(typeof anagram).toEqual('function');
	});
	it('Should return Boolean for anagrams', () => {
		expect(typeof anagram('ram', 'arm')).toEqual('boolean');
	});
	it('Should return true if anagram', () => {
		expect(anagram('hello', 'olleh')).toBeTruthy();
		expect(anagram('listen', 'silent')).toBeTruthy();
		expect(anagram('potato', 'aototp')).toBeTruthy();
	});
	it('Should return false if anagram', () => {
		expect(anagram('hello', 'world')).toBeFalsy();
		expect(anagram('dog', 'gad')).toBeFalsy();
		expect(anagram('tree', 'tire')).toBeFalsy();
	});
});
