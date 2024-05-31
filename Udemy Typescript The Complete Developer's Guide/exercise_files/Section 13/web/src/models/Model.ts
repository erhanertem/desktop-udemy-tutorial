import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	get<K extends keyof T>(objectProperty: K): T[K];
	getAll(): T;
	set(update: T): void;
}

interface Sync<T> {
	fetch(id: T): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callbackFn: () => void): void;
	trigger(eventName: string): void;
}

export interface HasId {
	id?: number;
}

export class Model<T extends HasId> {
	constructor(
		private events: Events,
		private sync: Sync<T>,
		private attributes: ModelAttributes<T>,
	) {}

	// Shorter Syntax for getters - IMPORTANT!! only if the parameters are initialized inside the constructor
	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;
	// // Regualr Syntax for getters
	// get on() {
	// 	// IMPORTANT! Create a reference to on function inside the Eventing object to access directly - its like creating a shortcut
	// 	return this.events.on;
	// }
	// get trigger() {
	// 	return this.events.trigger;
	// }
	// get get() {
	// 	return this.attributes.get;
	// }
	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}
	fetch(): void {
		const id = this.get('id') as T;

		// GUARD CLAUSE - TYPE GUARD
		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without an id');
		}

		this.sync.fetch(id).then((res: AxiosResponse): void => {
			this.set(res.data);
		});
	}
	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((res: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}
}
