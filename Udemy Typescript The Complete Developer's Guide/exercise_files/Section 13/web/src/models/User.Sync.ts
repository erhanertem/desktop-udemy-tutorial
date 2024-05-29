import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

interface HasId {
	id?: number;
}

export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch = (id: HasId): AxiosPromise => {
		// axios
		// 	.get(`${this.rootUrl}/${id}`)
		// 	.then((res: AxiosResponse): void => this.set(res.data));
		return axios.get(`${this.rootUrl}/${id}`);
	};

	save = (data: T): AxiosPromise => {
		// const idExist = data.id;
		// in order to guarantee that T has to have data.id property we need to provide an interface.
		const { id } = data;

		if (id) {
			// Execute a PUT request to modify the data
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			// Execute a POST request to create a new one
			return axios.post(this.rootUrl, data);
		}
	};
}
