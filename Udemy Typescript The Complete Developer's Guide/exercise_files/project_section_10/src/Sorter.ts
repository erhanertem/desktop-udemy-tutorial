// Bubble Sorting
export abstract class Sorter {
  // tell TS that eventually the err throwing methods will exist on borrowing classes
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number; //NOTE: getter is an actual property of class not a function

  sort(): void {
    // const length = this.length;
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
