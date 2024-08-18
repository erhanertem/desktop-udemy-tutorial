import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
	constructor(public parent: Element, public collection: Collection<T, K>) {}
	abstract renderItem(model: T, wrapperElement: Element): void;

	render(): void {
		// #1. Remove any previously renderered content inside the div container to render
		this.parent.innerHTML = '';
		// NOTE: The < template > tag is used as a container to hold some HTML content hidden from the user when the page loads.
		// #2. Create a template tag element
		const templateElement = document.createElement('template');
		// #3. Insert HTML content inside this template element via iterating thru the collection
		for (let model of this.collection.models) {
			// #4. Create a sub-div element to wrap around the list element
			const wrapperElement = document.createElement('div');
			// #5. Render the list element
			this.renderItem(model, wrapperElement);
			// #6. Assign the created element wrapped by div to the template
			templateElement.content.append(wrapperElement);
		}
		// #7. Make template element content visible
		this.parent.append(templateElement.content);
	}
}
