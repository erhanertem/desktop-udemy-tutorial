import Component from './base-component';
import { Autobind } from '../decorators/autobind';
import { Validatable, validate } from '../util/validation';
import { projectState } from '../state/project';

// -->ProjectInput Class: Furnishes the Form Element

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		super('project-input', 'app', 'user-input', true);

		// Selects for all input fields with their respective ids in the FORM element
		this.titleInputElement = this.element.querySelector(
			'#title',
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description',
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people',
		) as HTMLInputElement;

		// Listen for Form Submission
		this.configure();
	}

	// ->Submit EventListener
	// Decorator that binds behind the scene
	@Autobind
	private submitHandler(event: Event) {
		// Disable default form behaviour
		event.preventDefault();
		const userInput = this.gatherUserInput();
		// If array/tuple is returned from gatherUserInput
		if (Array.isArray(userInput)) {
			// Destructure returned data into their respective variables.
			const [title, desc, people] = userInput;
			// Given those variables, add the project via project state manager class
			projectState.addProject(title, desc, people);
			// Clear out the form fields after submission
			this.clearInputs();
		}
	}
	// Listen for the submit event on the FORM element
	protected configure() {
		this.element.addEventListener('submit', this.submitHandler);
		// NOTE: Opted to go for a bind decorator for submithandler
		// this.element.addEventListener('submit', this.submitHandler.bind(this));
	}

	// protected renderContent(): void {}
	protected renderContent: undefined;

	// ->Gather user input from the form
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

		const titleValidatable: Validatable = {
			value: enteredTitle,
			required: true,
		};
		const descriptionValidatable: Validatable = {
			value: enteredDescription,
			required: true,
			minLength: 5,
		};
		const peopleValidatable: Validatable = {
			value: enteredPeople,
			required: true,
			min: 1,
			max: 5,
		};

		if (
			!validate(titleValidatable) ||
			!validate(descriptionValidatable) ||
			!validate(peopleValidatable)
		) {
			alert('Invalid input, please try again!');
			return; //Returns undefined so it be addressed @ return type - undefiend is void in functions in terms of TS
		} else {
			return [enteredTitle, enteredDescription, Number(enteredPeople)];
		}
	}
}
