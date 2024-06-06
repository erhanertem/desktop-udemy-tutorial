import { ReactElement } from 'react';
import { Child } from './Child';

function onClick() {
	console.log('Clicked me');
}

function Parent(): ReactElement {
	return (
		<Child onClick={onClick} color="red">
			Click Me
		</Child>
	);
}
export default Parent;
