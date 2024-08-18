// Type Alias
type CallbackFn = () => void;

export class Eventing {
	private events: { [key: string]: CallbackFn[] } = {};

	// Register and Store Events/EventListener
	on = (eventName: string, callbackFn: CallbackFn): void => {
		const handlers = this.events[eventName] || []; // If the key exists = CallbackFn[] else returns undefined because none assigned yet so we got to define by default empty[] to inser in the upcoming callbackFn
		handlers.push(callbackFn);
		this.events[eventName] = handlers;
	};

	// Event Triggerer
	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];

		// GUARD CLAUSE
		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach((callbackFn) => callbackFn());
	};
}
