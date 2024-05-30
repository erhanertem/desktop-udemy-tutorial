import { html } from 'code-tag';

export class UserForm {
	constructor(public parent: Element) {}

	template(): string {
		return html`
			<div>
				<h1>User Form</h1>
				<input />
			</div>
		`;
	}

	render(): void {
		// Create a template tag element
		// NOTE: The < template > tag is used as a container to hold some HTML content hidden from the user when the page loads.
		const templateElement = document.createElement('template');
		// Insert HTML content inside this template element
		templateElement.innerHTML = this.template();
		// Make template element content visible
		this.parent.append(templateElement.content);
	}
}
