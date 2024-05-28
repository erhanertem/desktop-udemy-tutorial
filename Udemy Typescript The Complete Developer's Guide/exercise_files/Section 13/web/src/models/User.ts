import axios, { AxiosResponse } from 'axios';
import { Eventing } from './User.Eventing';

const DB_URL = 'http://localhost:3000/users/';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing = new Eventing();

	constructor(private data: UserProps) {}

	get(propertyName: string): string | number {
		return this.data[propertyName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios
			.get(`${DB_URL}${this.get('id')}`)
			.then((res: AxiosResponse): void => this.set(res.data));
	}

	save(): void {
		const idExist = this.get('id');
		if (idExist) {
			// Execute a PUT request to modify the data
			axios.put(`${DB_URL}${this.get('id')}`, this.data);
		} else {
			// Execute a POST request to create a new one
			axios.post(`${DB_URL}`, this.data);
		}
	}
}
