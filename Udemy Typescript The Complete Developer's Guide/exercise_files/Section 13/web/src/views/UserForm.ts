import { html } from 'code-tag';

export class UserForm {
	constructor(public parent: Element) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick,
			'mouseenter:h1': this.onHeaderHover,
		};
	}

	onButtonClick(): void {
		console.log('Say Hi!!!⚠️⚠️⚠️⚠️');
	}

	onHeaderHover(): void {
		console.log('I am on Hover!!!👉👉👉');
	}

	template(): string {
		return html`
			<div>
				<h1>User Form</h1>
				<input />
				<button>Click Me!</button>
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
