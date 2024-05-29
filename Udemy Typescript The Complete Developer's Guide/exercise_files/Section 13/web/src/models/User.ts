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
}
