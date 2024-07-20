class Node {
	#value;
	constructor(value) {
		this.#value = value;
		this.next = null;
	}

	get value() {
		return this.#value;
	}
}

class LinkedList {
	#length = 0;
	#head = null;

	removeAtIndex(index) {
		// GUARD CLAUSE
		if (index > this.#length) {
			return;
		}

		let current = this.#head;
		let previous;
		let count = 0;

		if (index === 0) {
			this.#head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.#length--;
	}

	insertAtIndex(value, index) {
		// GUARD CLAUSE
		if (index > this.#length) {
			return console.log('Index out of bound');
		}

		if (index === 0) {
			this.insertFirst(value);
			this.#length++;
			return;
		} else if (index === this.#length) {
			this.insertLast(value);
			this.#length++;
			return;
		}

		const node = new Node(value);
		let current, previous;
		current = this.#head;
		console.log('🥶🥶🥶', current);
		let count = 0;

		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		node.next = current;
		previous.next = node;
		this.#length++;
		console.log(this.#length);
	}

	getAtIndex(index) {
		let current = this.#head;
		let count = 0;
		while (current) {
			if (count === index) {
				console.log(current.value);
			}
			count++;
			current = current.next;
		}
		return null;
	}

	clearList() {}

	printList() {
		let current = this.#head;
		let list = '';

		if (this.#length !== 0) {
			while (current) {
				// Write off list
				list += current.value + ' ';
				// Move to the next item
				current = current.next;
			}
			return console.log(list);
		}

		return console.log('Oppsy, nada');
	}

	insertFirst(value) {
		// NODE
		// Instantiate a new node
		const node = new Node(value);
		node.next = this.#head;
		// LINKED LIST
		// Update linked list head
		this.#head = node;
		// Increment list length
		this.#length++;
	}

	clearList() {
		this.#head = null;
		this.#length = 0;
	}

	insertLast(value) {
		// NODE
		// Instantiate a new node
		const node = new Node(value);

		//Traverse thru the list to find the last node
		let current = this.#head;
		console.log('🥶', current);
		while (current.next) {
			current = current.next;
		}

		// Assign the null endpoint this node - new node now bears the null endpoint
		current.next = node;
		// Update list length
		this.#length++;
	}
}

const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(60);
list.insertLast(50);
list.insertAtIndex(500, 1);
list.insertAtIndex(500, 3);
list.insertAtIndex(100, 2);
list.printList();
list.removeAtIndex(2);
list.printList();
list.getAtIndex(2);
list.getAtIndex(0);
list.clearList();
list.printList();
console.log(list);
