class Queue {
	#arr = [];
	#lastIndex = 0;

	// Add Item to the Que
	enqueue(entry) {
		// Increase length of the array
		this.#arr.length = this.#lastIndex + 1;
		//Move the array elements to the right +1
		for (let i = this.#arr.length - 2; i >= 0; i--) {
			this.#arr[i + 1] = this.#arr[i];
		}
		// Add the new entry to the beginning of the array
		this.#arr[0] = entry;

		// Increment the last Index
		this.#lastIndex++;
		console.log(this.#arr);
		console.log('Last Index: ', this.#lastIndex);
	}

	// Drop item from the Queue
	dequeue() {
		// GUARD CLAUSE
		if (!this.#lastIndex) {
			return console.log('Array is empty. Dump in some data');
		}
		// Drop the last index
		this.#arr.length = this.#lastIndex - 1;
		// Update the indexCount
		this.#lastIndex = this.#lastIndex - 1;
		console.log(this.#arr);
	}

	peek() {
		// GUARD CLAUSE
		if (!this.#lastIndex) {
			return console.log('No items in queue');
		}
		console.log('First item: ', this.#arr[0]);
	}

	length() {
		console.log('Length of arr: ' + this.#lastIndex);
	}
}

const queue = new Queue();
queue.length();
queue.peek();
queue.dequeue();
queue.enqueue('c');
queue.enqueue('b');
queue.length();
queue.enqueue('a');
queue.enqueue('gibbs');
queue.dequeue();
queue.enqueue('tbs');
queue.peek();
