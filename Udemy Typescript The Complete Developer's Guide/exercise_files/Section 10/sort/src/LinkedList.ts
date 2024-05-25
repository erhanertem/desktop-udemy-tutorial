class Node {
	// NOTE LinkedList node comprises of data and the pointer adress - next Node if exists. If its the only node then the next is null.
	next: Node | null = null;
	constructor(public data: number) {}
}

export class LinkedList {
	head: Node | null = null;

	get length(): number {
		// GUARD CLAUSE
		if (!this.head) {
			return 0;
		}
		// Get th efirst node on the chain
		let length = 1;
		let node = this.head;
		// As long as there is a next node
		while (node.next) {
			// Increment count by one
			length++;
			// And assign the current node as the enxt
			node = node.next;
		}
		// Return the total length when reached to null next pointer
		return length;
	}

	// > ADDING TO LINKED LIST (@ THE END OF THE LINKEDLIST)
	append(data: number): void {
		// Create a node from the array item and register the added data to the node object with head defaulting to null
		const node = new Node(data);
		// If there is no head, assign this node as a head entry and next is null by default @ Node class
		if (!this.head) {
			this.head = node;
			return;
		}
		// If there is a head already, assign tail as head and read thru its next pointer till you come across null. Node w/ next value null is the end node of the linked list
		let tail = this.head; //Refers to first node in the chain
		while (tail.next) {
			tail = tail.next; //Refers to the last node in the chain
		}

		// Add new node reference to the last node in the chain
		tail.next = node;
	}

	at(index: number): Node {
		// GUARD CLAUSE
		if (!this.head) {
			throw new Error('Index out of bound');
		}

		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}

		throw new Error('Index outof bounds');
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		// GUARD CLAUSE
		if (!this.head) {
			throw new Error('List is empty');
		}

		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);

		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}

	print(): void {
		// GUARD CLAUSE
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}
