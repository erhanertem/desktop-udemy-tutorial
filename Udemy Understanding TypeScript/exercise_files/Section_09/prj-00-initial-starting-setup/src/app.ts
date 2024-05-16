// autobind Decorator
function Autobind(
	_target: any,
	_fnName: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescriptor;
}

// ProjectInput Class
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

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
		// Add custom CSS to the FORM element
		this.element.id = 'user-input';

		// Get access to all input fields in the FORM element
		this.titleInputElement = this.element.querySelector(
			'#title'
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people'
		) as HTMLInputElement;
		// Listen for Form Submission
		this.configure();

		// Call the private method that inserts a copy of the selected form element inside the pointed container div element
		this.attach();
	}

	private clearInputs() {
		this.titleInputElement.value = '';
		this.descriptionInputElement.value = '';
		this.peopleInputElement.value = '';
	}

	// Gathers User inputs for title, description and people fields and expected to return a tuple
	private gatherUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		if (
			enteredTitle.trim().length === 0 ||
			enteredDescription.trim().length === 0 ||
			enteredPeople.trim().length === 0
		) {
			alert('Invalid input, please try again!');
			return; //Returns undefined so it be addressed @ return type
		} else {
			return [enteredTitle, enteredDescription, Number(enteredPeople)];
		}
	}

	// Decorator that binds behind the scene
	@Autobind
	private submitHandler(event: Event) {
		// Disable default form behaviour
		event.preventDefault();
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			console.log(title, desc, people);
			this.clearInputs();
		}
	}

	// Listen for the submit event on the FORM element
	private configure() {
		this.element.addEventListener('submit', this.submitHandler);
		// this.element.addEventListener('submit', this.submitHandler.bind(this));
	}

	// Private method for copying the form HTML inside the div container
	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjInput = new ProjectInput();
