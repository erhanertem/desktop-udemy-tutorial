import { html } from 'code-tag';

import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdit extends View<User, UserProps> {
	template(): string {
		return html`
			<div>
				<div class="user-show"></div>
				<div class="user-form"></div>
			</div>
		`;
	}
}
