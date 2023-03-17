//Project Type
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
    public status: ProjectStatus
  ) {}
}

//CLASS - Project State Management
type Listener<T> = (items: T[]) => void; // Define function with type

class State<T> {
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = []; //create a list for the projects
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      console.log('🎢');
      return this.instance;
    }
    this.instance = new ProjectState();
    console.log('🧶');
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );

    //add to the project list
    this.projects.push(newProject);

    //Shuffle thru list of registered listeners by pushing the copy of project array object
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); //we insert a copy of the projects array so that the original array doesnt gets accidentally modified
    }
  }
}

const projectState = ProjectState.getInstance(); //Instantiate the projectstate object to provide global access
console.log(projectState);

//FUNCTION - Validation Logic
interface ValidationOptions {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
function validate(validatableInput: ValidationOptions) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length > validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length < validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value > validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }
  return isValid;
}

//AutoBind decorator
function AutoBind(
  _1: any,
  _2: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjustedDescriptor;
}

//COMPONENT - Component Base
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
    //NOTE: optional parameters should reside always at the end of the line
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as U; //https://developer.mozilla.org/en-US/docs/Web/API
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  abstract configure?(): void; //optional
  abstract renderContent(): void;
}

//CLASS - ProjectItem
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {}
  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent =
      this.project.people.toString();
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}

//CLASS - ProjectList
class ProjectList extends Component<HTMLElement, HTMLDivElement> {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    // select where to add
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    // clear the previous rendering before rendering
    listEl.innerHTML = '';
    // Render elements
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
  }

  configure() {
    projectState.addListener((projects: Project[]) => {
      const filteredProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = filteredProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }
}

//CLASS - Project Input
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
  }

  // #1. Solving this issue with bind(this) @ submit handler
  // private configure() {
  //   this.element.addEventListener('submit', this.submitHandler.bind(this));
  // }
  // #2. Solving thru class method decorator function to submitHandler
  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent(): void {
    throw new Error('Method not implemented.');
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: ValidationOptions = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: ValidationOptions = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: ValidationOptions = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      // enteredTitle.trim().length === 0 ||
      // enteredDescription.trim().length === 0 ||
      // enteredPeople.trim().length === 0
      //
      // validate({ value: enteredTitle, required: true, minLength: 5 }) &&
      // validate({ value: enteredDescription, required: true, minLength: 5 }) &&
      // validate({ value: enteredPeople, required: true, minLength: 5 })
      //
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!');
      return;
    } else return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
