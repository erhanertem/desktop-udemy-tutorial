import { ProjectItem } from './project-item';
import Component, { something } from './base-component';
import { Autobind as autobind } from '../decorators/autobind';
import { DragTarget } from '../models/drag-drop';
// import { Project, ProjectStatus } from '../models/project';
import * as ProjectModel from '../models/project';
import { projectState } from '../state/project';

console.log(something);
// --> ProjectList Class - Flexible active or finished projects list creator
export class ProjectList
	extends Component<HTMLDivElement, HTMLElement>
	implements DragTarget
{
	assignedProjects: ProjectModel.Project[] = []; // Depending on the context, either a collection of active or finished projects

	constructor(private type: 'active' | 'finished') {
		super('project-list', 'app', `${type}-projects`, false);

		// Before rendering elements(projects), register event listeners
		// NOTE: When first run, this would not run. RenderContent will be run ONCE and prepare the HTML skeleton in which these project lists will be dumped in. So it may look awkward at first sight.
		this.configure();
		// Render active/finished projects <section></section>
		this.renderContent();
	}

	@autobind
	dragOverHandler(event: DragEvent) {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			event.preventDefault();
			const listEl = this.element.querySelector('ul')!;
			listEl.classList.add('droppable');
		}
	}
	@autobind
	dragLeaveHandler(event: DragEvent) {
		event.preventDefault();
		const listEl = this.element.querySelector('ul')!;
		listEl.classList.remove('droppable');
	}
	@autobind
	dropHandler(event: DragEvent) {
		event.preventDefault();
		const prjId = event.dataTransfer!.getData('text/plain');
		projectState.moveProject(
			prjId,
			this.type === 'active'
				? ProjectModel.ProjectStatus.Active
				: ProjectModel.ProjectStatus.Finished,
		);
	}

	protected configure() {
		this.element.addEventListener('dragover', this.dragOverHandler);
		this.element.addEventListener('dragleave', this.dragLeaveHandler);
		this.element.addEventListener('drop', this.dropHandler);

		projectState.addListener(
			// LISTENER IS A FUNCTION
			(projects: ProjectModel.Project[]) => {
				// Filter out type not belonging to the current type
				const relevantProjects = projects.filter((prj) => {
					if (this.type === 'active') {
						return prj.status === ProjectModel.ProjectStatus.Active;
					}
					return prj.status === ProjectModel.ProjectStatus.Finished;
				});
				this.assignedProjects = relevantProjects;
				// Render filtered out project
				this.renderProjects();
			},
		);
	}

	protected renderContent() {
		// Provide <ul id="active-projects-list"></ul> like id on ul tag element respective of the type
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		// Provide headline text for the rendered list
		this.element.querySelector('h2')!.textContent =
			this.type.toUpperCase() + ' PROJECTS';
	}

	// Create HTML project <li> elements inside active|finished projects
	private renderProjects() {
		const listEl = document.getElementById(
			`${this.type}-projects-list`,
		)! as HTMLUListElement;
		// Reset HTML content
		listEl.innerHTML = '';
		// Add HTML content
		for (const prjItem of this.assignedProjects) {
			new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
		}
	}
}
