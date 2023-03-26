import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number) {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}
