export class Attributes<T extends object> {
	constructor(private data: T) {}

	get(propertyName: string): string | number {
		return this.data[propertyName];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}
