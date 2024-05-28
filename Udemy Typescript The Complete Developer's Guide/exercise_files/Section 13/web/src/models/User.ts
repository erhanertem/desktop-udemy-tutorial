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

	on(eventName: string, callbackFn: CallbackFn): void {}
}
