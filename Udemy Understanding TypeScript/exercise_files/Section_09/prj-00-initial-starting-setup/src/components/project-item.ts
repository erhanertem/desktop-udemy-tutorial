/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

// --> Project Item Class
namespace App {
	export class ProjectItem
		extends Component<HTMLUListElement, HTMLLIElement>
		implements Draggable
	{
		private project: Project;

		get persons() {
			if (this.project.people === 1) {
				return ' 1 person';
			} else {
				return ` ${this.project.people} persons`;
			}
		}

		constructor(hostId: string, project: Project) {
			super('single-project', hostId, project.id, false);
			this.project = project;

			this.configure();
			this.renderContent();
		}

		@Autobind
		dragStartHandler(event: DragEvent) {
			console.log(event);
			event.dataTransfer!.setData('text/plain', this.project.id);
			event.dataTransfer!.effectAllowed = 'move';
		}
		@Autobind
		dragEndHandler(_event: DragEvent) {
			console.log('DragEnd');
		}

		protected configure() {
			this.element.addEventListener('dragstart', this.dragStartHandler);
			this.element.addEventListener('dragend', this.dragEndHandler);
		}
		protected renderContent() {
			this.element.querySelector('h2')!.textContent = this.project.title;
			this.element.querySelector('h3')!.textContent =
				this.persons + ' assigned.';
			this.element.querySelector('p')!.textContent =
				this.project.description;
		}
	}
}
