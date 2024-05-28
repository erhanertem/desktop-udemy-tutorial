import axios, { AxiosResponse } from 'axios';

const DB_URL = 'http://localhost:3000/users/';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

// Type Alias
type CallbackFn = () => void;

export class User {
	private events: { [key: string]: CallbackFn[] } = {};

	constructor(private data: UserProps) {}

	get(propertyName: string): string | number {
		return this.data[propertyName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	// Register and Store Events/EventListener
	on(eventName: string, callbackFn: CallbackFn): void {
		const handlers = this.events[eventName] || []; // If the key exists = CallbackFn[] else returns undefined because none assigned yet so we got to define by default empty[] to inser in the upcoming callbackFn
		handlers.push(callbackFn);
		this.events[eventName] = handlers;
	}

	// Event Triggerer
	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		// GUARD CLAUSE
		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach((callbackFn) => callbackFn());
	}

	fetch(): void {
		axios
			.get(`${DB_URL}${this.get('id')}`)
			.then((res: AxiosResponse): void => this.set(res.data));
	}

	save(): void {
		const idExist = this.get('id');
		if (idExist) {
			// Execute a PUT request to modify the data
			axios.put(`${DB_URL}${this.get('id')}`, this.data);
		} else {
			// Execute a POST request to create a new one
			axios.post(`${DB_URL}`, this.data);
		}
	}
}
