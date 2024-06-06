import { Child } from './Child';

function onClick() {
	console.log('Clicked me');
}

function Parent() {
	return <Child onClick={onClick} color="red" />;
}
export default Parent;
