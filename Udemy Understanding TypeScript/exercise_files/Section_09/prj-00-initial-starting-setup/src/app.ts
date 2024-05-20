import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// -> Render project input form
new ProjectInput();
// -> Render Active Projects List
new ProjectList('active');
// -> Render AFinished Projects List
new ProjectList('finished');
