import { html } from 'code-tag';

import { View } from './View';
import { User, UserProps } from './../models/User';

export class UserShow extends View<User, UserProps> {
	template(): string {
		return html`
			<div>
				<h1>User Detail</h1>
				<div>User Name: ${this.model.get('name')!}</div>
				<div>User Age: ${String(this.model.get('age'))!}</div>
			</div>
		`;
	}
}
