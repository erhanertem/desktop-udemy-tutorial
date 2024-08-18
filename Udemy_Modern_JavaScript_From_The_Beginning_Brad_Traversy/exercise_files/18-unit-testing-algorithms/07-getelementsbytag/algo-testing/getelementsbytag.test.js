const getElementsByTag = require('./getelementsbytag');

describe('Get elements by tag', () => {
	it('should be a function', () => {
		expect(typeof getElementsByTag).toBe('function');
	});
	it('should return an array', () => {
		expect(Array.isArray(getElementsByTag())).toEqual(true);
	});
	it('should return an empty array if no root arg provided', () => {
		expect(getElementsByTag()).toEqual([]);
	});
	it('should return only the root element if no tag name is provided', () => {
		const root = document.createElement('div');
		expect(getElementsByTag(root)).toEqual([root]);
	});
	it('should return the correct child elements', () => {
		const root = document.createElement('div');

		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const span = document.createElement('span');

		root.appendChild(p1);
		root.appendChild(span);
		span.appendChild(p2);

		const result = getElementsByTag(root, 'p');

		expect(result).toEqual([p1, p2]);
	});
});
