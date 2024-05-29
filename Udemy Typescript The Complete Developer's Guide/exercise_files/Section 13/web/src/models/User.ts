import { Eventing } from './User.Eventing';
import { Sync } from './User.Sync';
import { Attributes } from './User.Attributes';

const DB_URL = 'http://localhost:3000/users';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(DB_URL);
	public attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}

	get on() {
		// IMPORTANT! Create a reference to on function inside the Eventing object to access directly - its like creating a shortcut
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}
	get get() {
		return this.attributes.get;
	}
	set() {}
	fetch() {}
	save() {}
}
