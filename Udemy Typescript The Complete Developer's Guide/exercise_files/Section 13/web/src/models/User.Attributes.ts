export class Attributes<T extends object> {
	constructor(private data: T) {}

	get = <K extends keyof T>(objectProperty: K): T[K] => {
		return this.data[objectProperty];
	};

	set = (update: T): void => {
		Object.assign(this.data, update);
	};
}
