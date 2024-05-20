// Drag & Drop Interfaces
namespace App {
	export interface Draggable {
		dragStartHandler(event: DragEvent): void;
		dragEndHandler(event: DragEvent): void;
	}
	export interface DragTarget {
		// Permit the drop - Signals JS and browser that the dragged over object is valid drop target
		dragOverHandler(event: DragEvent): void;
		// Handle the drop action - Update UI and the data
		dropHandler(event: DragEvent): void;
		// Visual feedback whether its a canceled or succesfull drop
		dragLeaveHandler(event: DragEvent): void;
	}
}
