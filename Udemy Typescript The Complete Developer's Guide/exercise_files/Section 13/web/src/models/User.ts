interface UserProps {
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

	on(eventName: string, callbackFn: CallbackFn): void {
		const handlers = this.events[eventName] || []; // If the key exists = CallbackFn[] else returns undefined because none assigned yet so we got to define by default empty[] to inser in the upcoming callbackFn
		handlers.push(callbackFn);
		this.events[eventName] = handlers;
	}
}
