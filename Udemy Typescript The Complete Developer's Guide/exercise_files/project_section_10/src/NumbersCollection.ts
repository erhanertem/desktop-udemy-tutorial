import { Sortable } from './Sorter';
import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

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
