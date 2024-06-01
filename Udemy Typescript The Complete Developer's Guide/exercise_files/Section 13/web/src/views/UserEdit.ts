import { html } from 'code-tag';

import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}

	nestViewTemplate(): void {
		const userShow = new UserShow(this.regions.userShow, this.model);
		userShow.render();
		const userForm = new UserForm(this.regions.userForm, this.model);
		userForm.render();
	}

	template(): string {
		return html`
			<div>
				<div class="user-show"></div>
				<div class="user-form"></div>
			</div>
		`;
	}
}
