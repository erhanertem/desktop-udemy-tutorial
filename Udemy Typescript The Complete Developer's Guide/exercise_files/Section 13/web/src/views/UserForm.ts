import { html } from 'code-tag';

import { User } from './../models/User';

export class UserForm {
	constructor(public parent: Element, public model: User) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
		};
	}

	onSetAgeClick(): void {
		console.log('Button was clicked');
	}

	template(): string {
		return html`
			<div>
				<h1>User Form</h1>
				<div>User name: ${this.model.get('name')!}</div>
				<div>User age: ${String(this.model.get('age'))!}</div>
				<input />
				<button>Click Me!</button>
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
		// NOTE: The < template > tag is used as a container to hold some HTML content hidden from the user when the page loads.
		// #1. Create a template tag element
		const templateElement = document.createElement('template');
		// #2. Insert HTML content inside this template element
		templateElement.innerHTML = this.template();
		// #3. Bind Event handlers on the template string
		this.bindEvents(templateElement.content);
		// #4. Make template element content visible
		this.parent.append(templateElement.content);
	}
}
