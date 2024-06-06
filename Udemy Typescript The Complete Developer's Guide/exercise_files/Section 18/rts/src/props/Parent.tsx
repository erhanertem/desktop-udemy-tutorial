import { Child, ChildAsFC } from './Child';

function onClick() {
	console.log('Clicked me');
}

function Parent() {
	return (
		<Child onClick={onClick} color="red">
			Click Me
		</Child>
	);
}
export default Parent;
