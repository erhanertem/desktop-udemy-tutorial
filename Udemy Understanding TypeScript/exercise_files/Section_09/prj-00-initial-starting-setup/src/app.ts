// Importing
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
	// -> Render project input form
	new ProjectInput();
	// -> Render Active Projects List
	new ProjectList('active');
	// -> Render AFinished Projects List
	new ProjectList('finished');
}
