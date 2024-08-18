// --> Component Base Class
// NOTE: Marked as Abstract so that it should never be directly instantiated and only used for inheritance

export const something = '....';

export default abstract class Component<
	T extends HTMLElement,
	U extends HTMLElement,
> {
	templateElement: HTMLTemplateElement;
	hostElement: T;
	element: U;

	constructor(
		templateId: string, // Template that holds the HTML to be copied over
		hostElementId: string, //Hosting container in the DOM
		newElementId?: string, // Assign Id for the copied over stuff
		insertAtStart?: boolean,
	) {
		// Select template fragment for creating active|finsihed projects list
		this.templateElement = document.getElementById(
			templateId,
		)! as HTMLTemplateElement;
		//Select container
		this.hostElement = document.getElementById(hostElementId)! as T;

		// Make a copy of the selected template fragment to be used later
		const importedNode = document.importNode(
			this.templateElement.content,
			true,
		);
		// Select section element inside the copied fragment
		this.element = importedNode.firstElementChild as U;

		if (newElementId) {
			// Add custom CSS to the section elements of active|finished projects lists
			this.element.id = newElementId;
		}

		this.attachToDivContainer(insertAtStart as boolean);
	}

	// Private method for copying the form HTML inside the div container
	private attachToDivContainer(insertAtStart: boolean) {
		this.hostElement.insertAdjacentElement(
			insertAtStart ? 'afterbegin' : 'beforeend',
			this.element,
		);
	}

	// NOTE: Abstract marked functions needs to be deliniated further by the classes inheriting this abstract class
	protected abstract configure(): void;
	protected abstract renderContent?(): void;
}
