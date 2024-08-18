import axios, { AxiosResponse } from 'axios';

import { Eventing } from './User.Eventing';

export class Collection<T, K> {
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

	// Pass-thru functions - IMPORTANT!! Shorter syntax is not available as we do not initialize the property inside a constructor function
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootUrl).then((res: AxiosResponse) => {
			// Registers the deserialized items(Converted from JSON to {}) to User[]
			res.data.forEach((value: K) => {
				this.models.push(this.deserialize(value));
			});

			this.trigger('change');
		});
	}
}
