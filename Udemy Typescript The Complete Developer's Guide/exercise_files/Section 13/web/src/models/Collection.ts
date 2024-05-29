import { User } from './User';
import { Eventing } from './User.Eventing';

export class Collection {
	models: User[] = [];
	events: Eventing = new Eventing();

	// Shorter syntax is not available as we do not initialize the property inside a constructor function
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}
}
