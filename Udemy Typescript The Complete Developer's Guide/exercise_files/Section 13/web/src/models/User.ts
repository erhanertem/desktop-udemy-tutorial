import { Model } from './Model';
import { Attributes } from './User.Attributes';
import { Eventing } from './User.Eventing';
import { Sync } from './User.Sync';

const DB_URL = 'http://localhost:3000/users';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			// The line up is per Model class constructor line up
			new Eventing(),
			new Sync<UserProps>(DB_URL),
			new Attributes<UserProps>(attrs),
		);
	}
}
