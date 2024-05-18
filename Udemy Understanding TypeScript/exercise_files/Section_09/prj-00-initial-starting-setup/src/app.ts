// Validation Logic Requirements List
interface Validatable {
	value: string | number;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
}
// Validation Logic
function validate(validatableInput: Validatable) {
	let isValid = true;
	if (validatableInput.required) {
		isValid =
			isValid && validatableInput.value.toString().trim().length !== 0;
	}
	if (
		// '!= null' means '!= null and undefined'
		validatableInput.minLength != null &&
		typeof validatableInput.value === 'string'
	) {
		isValid =
			isValid && validatableInput.value.length >= validatableInput.minLength;
	}
	if (
		// '!= null' means '!= null and undefined'
		validatableInput.maxLength != null &&
		typeof validatableInput.value === 'string'
	) {
		isValid =
			isValid && validatableInput.value.length <= validatableInput.maxLength;
	}
	if (
		// '!= null' means '!= null and undefined'
		validatableInput.min != null &&
		typeof validatableInput.value === 'number'
	) {
		isValid = isValid && validatableInput.value >= validatableInput.min;
	}
	if (
		// '!= null' means '!= null and undefined'
		validatableInput.max != null &&
		typeof validatableInput.value === 'number'
	) {
		isValid = isValid && validatableInput.value <= validatableInput.max;
	}
	return isValid;
}
// autobind Decorator
function Autobind(
	_target: any,
	_fnName: string,
	descriptor: PropertyDescriptor,
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

// Project Type
enum ProjectStatus {
	Active,
	Finished,
}

class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public people: number,
		public status: ProjectStatus,
	) {}
}

type Listener = (items: Project[]) => void;

// --> Project State Management Class - Singleton Class (Unique not instantiated more than once!)
// Keeps track of registered projects, event listeners as well as registering them.
class ProjectState {
	// Holds array of event listeners
	private listeners: Listener[] = [];
	// Holds array of projects
	private projects: Project[] = [];
	// Holds reference to Project state object for singularity check
	private static instance: ProjectState;
	// Private constructor for Singleton class creation
	private constructor() {}
	// static property executes right away with the class creation
	// NOTE - Disallow instatiation more than once
	static getSingleInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}

	// ->Add Event Listener
	addListener(listenerFn: Listener) {
		this.listeners.push(listenerFn);
	}
	// ->Add Project
	addProject(title: string, description: string, numOfPeople: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			description,
			numOfPeople,
			ProjectStatus.Active,
		);

		this.projects.push(newProject);
		// WHENEVER A NEW PROJECT IS CREATED, WE CALL FOR ALL LISTENER FUNCTIONS
		for (const listenerFn of this.listeners) {
			listenerFn(
				// EVERY LISTENER GETS A BRAND NEW COPY OF THE PROJECTS ARRAY
				this.projects.slice(),
			);
		}
	}
}

// -->ProjectList Class - Flexible active or finished projects list creator
class ProjectList {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement; // Target element is still the render container
	element: HTMLElement; // NOTE <section> element do not have corresponding type in TS, so we go by generic type
	assignedProjects: Project[] = []; // Depending on the context, either a collection of active or finished projects

	constructor(private type: 'active' | 'finished') {
		// Select template fragment for creating active|finsihed projects list
		this.templateElement = document.getElementById(
			'project-list',
		)! as HTMLTemplateElement;
		//Select container
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		// Make a copy of the selected template fragment to be used later
		const importedNode = document.importNode(
			this.templateElement.content,
			true,
		);
		// Select section element inside the copied fragment
		this.element = importedNode.firstElementChild as HTMLElement;
		// Add custom CSS to the section elements of active|finished projects lists
		this.element.id = `${this.type}-projects`;

		// Before rendering elements(projects), register event listeners
		// NOTE: When first run, this would not run. RenderContent will be run ONCE and prepare the HTML skeleton in which these project lists will be dumped in. So it may look awkward at first sight.
		projectState.addListener(
			// LISTENER IS A FUNCTION
			(projects: Project[]) => {
				this.assignedProjects = projects;
				this.renderProjects();
			},
		);

		// Insert <section> into the div container
		this.attachToDivContainer();
		// Render active/finished projects <section></section>
		this.renderContent();
	}

	// Create HTML project <li> elements inside active|finished projects
	private renderProjects() {
		const listEl = document.getElementById(
			`${this.type}-projects-list`,
		)! as HTMLUListElement;
		for (const prjItem of this.assignedProjects) {
			const listItem = document.createElement('li');
			listItem.textContent = prjItem.title;
			listEl.appendChild(listItem);
		}
	}

	private renderContent() {
		// Provide <ul id="active-projects-list"></ul> like id on ul tag element respective of the type
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		// Provide headline text for the rendered list
		this.element.querySelector('h2')!.textContent =
			this.type.toUpperCase() + ' PROJECTS';
	}

	// Private method for copying the section HTML inside the div container
	private attachToDivContainer() {
		this.hostElement.insertAdjacentElement('beforeend', this.element);
	}
}
// -->ProjectInput Class: Furnishes the Form Element
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;

	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		// Select template fragment
		this.templateElement = document.getElementById(
			'project-input',
		)! as HTMLTemplateElement;
		// Select Render Container
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		// Make a copy of the selected template fragment to be used later
		const importedNode = document.importNode(
			this.templateElement.content, // Get access to HTML body within the <template> elements
			true, // Enable deep nested content copy
		);
		// Select form element inside the copied fragment
		this.element = importedNode.firstElementChild as HTMLFormElement;
		// Add custom CSS to the FORM element
		this.element.id = 'user-input';

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
		this.submitFormListener();
		// Call the private method that inserts a copy of the selected form element inside the pointed container div element
		this.attachToDivContainer();
	}

	// ->Locate form into the DOM
	// Private method for copying the form HTML inside the div container
	private attachToDivContainer() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
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
	private submitFormListener() {
		this.element.addEventListener('submit', this.submitHandler);
		// NOTE: Opted to go for a bind decorator for submithandler
		// this.element.addEventListener('submit', this.submitHandler.bind(this));
	}

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

// -> Singleton Classes are not instantiated with new Keyword
// const projectState = new ProjectState();
const projectState = ProjectState.getSingleInstance();
// -> Render project input form
const prjInput = new ProjectInput();
// -> Render Active Projects List
const activePrjList = new ProjectList('active');
// -> Render AFinished Projects List
const finishedPrjList = new ProjectList('finished');

console.log('prjInput :', prjInput);
console.log('activePrjList :', activePrjList);
console.log('finishedPrjList :', finishedPrjList);
