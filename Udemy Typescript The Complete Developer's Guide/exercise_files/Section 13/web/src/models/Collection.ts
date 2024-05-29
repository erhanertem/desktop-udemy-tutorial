import axios, { AxiosResponse } from 'axios';

import { User, UserProps } from './User';
import { Eventing } from './User.Eventing';

export class Collection {
	models: User[] = [];
	events: Eventing = new Eventing();

	constructor(public rootUrl: string) {}
	// Shorter syntax is not available as we do not initialize the property inside a constructor function
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootUrl).then((res: AxiosResponse) => {
			// Registers the items to User[]
			res.data.forEach((value: UserProps) => {
				const user = User.buildUser(value);
				this.models.push(user);
			});

			this.trigger('change');
		});
	}
}
