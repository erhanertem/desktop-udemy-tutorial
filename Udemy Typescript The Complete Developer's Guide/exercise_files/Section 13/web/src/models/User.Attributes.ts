import { UserProps } from './User';

export class Attributes<T extends object> {
	constructor(private data: T) {}

	get<K extends keyof T>(objectProperty: K): T[K] {
		return this.data[objectProperty];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}

const attrs = new Attributes<UserProps>({
	id: 5,
	age: 20,
	name: 'whatever',
});
const name = attrs.get('name');
const age = attrs.get('age');
