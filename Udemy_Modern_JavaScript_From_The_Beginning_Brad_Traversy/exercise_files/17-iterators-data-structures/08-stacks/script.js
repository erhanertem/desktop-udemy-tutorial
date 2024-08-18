class Stack {
	#items = [];
	#count = 0;
	constructor() {}

	push(item) {
		// Item is assigned to  current index count
		this.#items[this.#count] = item;
		// Increment count
		this.#count++;
	}

	pop() {
		// GUARD CLAUSE - Avoid popping empty array
		if (!this.#count) {
			return 'Stream out of bound';
		}
		// Decrement the list count
		this.#count--;
		this.#items.length = this.#count;
	}

	peek() {
		// GUARD CLAUSE - Avoid popping empty array
		if (!this.#count) {
			return 'Stream is empty';
		}
		// Return the last element
		return this.#items[this.#count - 1];
	}

	length() {
		return this.#count;
	}

	clear() {
		this.#items = [];
		this.#count = 0;
	}
}

const stack = new Stack();
stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.clear());
console.log(stack.length());
console.log(stack);
