class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;

	constructor() {
		// Select container and template fragment
		this.templateElement = document.getElementById(
			'project-input'
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		// Make a copy of the selected template fragment to be used later
		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		// Select form element inside the copied fragment
		this.element = importedNode.firstElementChild as HTMLFormElement;
		// Call the private method that inserts a copy of the selected form element inside the pointed container div element
		this.attach();
	}

	// Private method for copying the form HTML inside the div container
	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjInput = new ProjectInput();
