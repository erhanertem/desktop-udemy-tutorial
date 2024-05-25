export abstract class Sorter {
	// Missing promised properties by the extending class
	abstract length: number;
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	sort(): void {
		const { length } = this;

		// BUBBLE SORT ALGORITHM
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
