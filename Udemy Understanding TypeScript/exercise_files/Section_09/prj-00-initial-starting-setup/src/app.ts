import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// -> Render project input form
new ProjectInput();
// -> Render Active Projects List
new ProjectList('active');
// -> Render AFinished Projects List
new ProjectList('finished');
