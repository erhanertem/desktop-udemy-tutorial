import { html } from 'code-tag';

import { User } from './../models/User';

export class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		// NOTE: @model.ts set() update function, when its called, we trigger a change notification event. This change trigger will help us re-render the UserForm.
		this.model.on('change', () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.set({ name: name });
		}
	};

	template(): string {
		return html`
			<div>
				<h1>User Form</h1>
				<div>User name: ${this.model.get('name')!}</div>
				<div>User age: ${String(this.model.get('age'))!}</div>
				<input />
				<button class="set-name">Change Name</button>
				<button class="set-age">Set Random Age</button>
			</div>
		`;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');

			fragment
				.querySelectorAll(selector)
				.forEach((el) =>
					el.addEventListener(eventName, eventsMap[eventKey]),
				);
		}
	}

	render(): void {
		// #1. Remove any previously renderered content inside the div container to render
		this.parent.innerHTML = '';
		// NOTE: The < template > tag is used as a container to hold some HTML content hidden from the user when the page loads.
		// #2. Create a template tag element
		const templateElement = document.createElement('template');
		// #3. Insert HTML content inside this template element
		templateElement.innerHTML = this.template();
		// #4. Bind Event handlers on the template string
		this.bindEvents(templateElement.content);
		// #5. Make template element content visible
		this.parent.append(templateElement.content);
	}
}
