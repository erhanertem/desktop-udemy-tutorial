//NODE CONSISTS OF VALUE & NEXT POINTER TO A NEW NODE | NULL
class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;
  /*
  VERY IMPORTANT! HEAD IS THE FIRST NODE IN THE CHAIN, TAIL IS THE LAST ADDED NODE IN THE CHAIN BEFORE THE ONE WE WOULD ADD
  */
  add(data: number): void {
    //Create a new Node
    const node = new Node(data);
    //Look into your linkedlist, if no head, assign this node as the first entry
    if (!this.head) {
      this.head = node;
      return;
    }
    //If there is a head node, find the last headnode and add the new node to the end of the chain
    let tail = this.head; //reference to first node in our chain

    while (tail.next) {
      //as long as tail has a next property advance to the next
      tail = tail.next; //new tail is the next one till tail.next is null which is the end of chain
    }
    tail.next = node; //Assign the new node to the next property of the last node
  }

  get length(): number {
    //If there is no head length is zero
    if (!this.head) {
      return 0;
    }
    //If there is a head, the length initiates with 1 and increments +1 till the node has null next property(end node)
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    //Whiler loop breaks and returns length
    return length;
  }

  at(index: number): Node {
    //If we do not have head yet, we have index at 0, throw an err
    if (!this.head) {
      throw new Error('There is no node yet');
    }
    //If there is head, starting from index 0 search thru all nodes which matches the inquired index
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of range');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    //If there is none to compare in the list throw an err
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    // const leftHand = leftNode.data;
    // leftNode.data = rightNode.data;
    // rightNode.data = leftHand;
    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): void {
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
