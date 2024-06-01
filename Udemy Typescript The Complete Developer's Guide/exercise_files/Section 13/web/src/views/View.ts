import { Model, HasId } from '../models/Model';

export abstract class View<T extends Model<K>, K extends HasId> {
	// Define region object
	regions: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	// Promise to be implemented on the extending class
	abstract template(): string;

	// Base implementation - extending class will provide
	regionsMap(): { [key: string]: string } {
		return {};
	}
	// Base implementation - extending class will provide
	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	bindModel(): void {
		// NOTE: @model.ts set() update function, when its called, we trigger a change notification event. This change trigger will help us re-render the UserForm.
		this.model.on('change', () => {
			this.render();
		});
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

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();

		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);

			if (element) {
				this.regions[key] = element;
			}
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
		// #5. Render the regions based on the regionsMap object list provided within UserEdits view container class
		this.mapRegions(templateElement.content);
		// #6. Make template element content visible
		this.parent.append(templateElement.content);
	}
}
