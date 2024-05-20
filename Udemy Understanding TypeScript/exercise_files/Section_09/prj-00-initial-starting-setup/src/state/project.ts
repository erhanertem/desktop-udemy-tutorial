import { Project, ProjectStatus } from '../models/project';

// --> Project State Management Class - Singleton Class (Unique not instantiated more than once!)

type Listener<T> = (items: T[]) => void;

// -> State Base Class
class State<T> {
	protected listeners: Listener<T>[] = [];
	addListener(listenerFn: Listener<T>) {
		this.listeners.push(listenerFn);
	}
}

// Keeps track of registered projects, event listeners as well as registering them.
export class ProjectState extends State<Project> {
	// Holds array of projects
	private projects: Project[] = [];
	// Holds reference to Project state object for singularity check
	private static instance: ProjectState;
	// Private constructor for Singleton class creation
	private constructor() {
		super();
	}
	// static property executes right away with the class creation
	// NOTE - Disallow instatiation more than once
	static getSingleInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
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
		this.updateListeners();
	}

	// ->Move Project - switches project states after drag and drop
	moveProject(projectId: string, newStatus: ProjectStatus) {
		const project = this.projects.find((prj) => prj.id === projectId);
		if (project) {
			project.status = newStatus;
			this.updateListeners();
		}
	}

	private updateListeners() {
		// WHENEVER A NEW PROJECT IS CREATED, WE CALL FOR ALL LISTENER FUNCTIONS
		for (const listenerFn of this.listeners) {
			listenerFn(
				// EVERY LISTENER GETS A BRAND NEW COPY OF THE PROJECTS ARRAY
				this.projects.slice(),
			);
		}
	}
}
// -> Singleton Classes are not instantiated with new Keyword
// const projectState = new ProjectState();
export const projectState = ProjectState.getSingleInstance();
