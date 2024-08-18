const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree has Dubplicate IDs', () => {
	it('Should be a function', () => {
		expect(typeof hasDuplicateIds).toBe('function');
	});
	it('Should return a boolean', () => {
		expect(typeof hasDuplicateIds()).toBe('boolean');
	});
	it('Should return false if no arg', () => {
		expect(hasDuplicateIds()).toBeFalsy();
	});
	it('Should return true for duplicate IDs', () => {
		const root = document.createElement('div');
		const c1 = document.createElement('div');
		const c2 = document.createElement('div');

		root.append(c1);
		root.append(c2);

		root.id = 'root';
		c1.id = 'child';
		c2.id = 'child';

		expect(hasDuplicateIds(root)).toEqual(true);
	});
	it('Should return false for unique IDs', () => {
		const root = document.createElement('div');
		const c1 = document.createElement('div');
		const c2 = document.createElement('div');

		root.append(c1);
		root.append(c2);

		root.id = 'root';
		c1.id = 'child1';
		c2.id = 'child2';

		expect(hasDuplicateIds(root)).toEqual(false);
	});
});
