import { Model } from './Model';
import { Attributes } from './User.Attributes';
import { Eventing } from './User.Eventing';
import { Sync } from './User.Sync';
import { Collection } from './Collection';

const DB_URL = 'http://localhost:3000/users';

export interface UserProps {
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

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>( // Fetch Url
			DB_URL,
			// Deserializer function
			(json: UserProps) => User.buildUser(json),
		);
	}

	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age: age });
	}
}
