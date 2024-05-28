import { Eventing } from './User.Eventing';
import { Sync } from './User.Sync';

const DB_URL = 'http://localhost:3000/users';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(DB_URL);

	constructor(private data: UserProps) {}

	get(propertyName: string): string | number {
		return this.data[propertyName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
}
