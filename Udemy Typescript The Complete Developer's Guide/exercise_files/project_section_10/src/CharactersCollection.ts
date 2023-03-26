import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // const arrString = this.data.split('');
    const arrString = Array.from(this.data);
    [arrString[leftIndex], arrString[rightIndex]] = [
      arrString[rightIndex],
      arrString[leftIndex],
    ];
    this.data = arrString.join('');
  }
}
