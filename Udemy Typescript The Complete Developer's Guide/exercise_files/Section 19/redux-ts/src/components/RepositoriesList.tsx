import { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../state';

function RepositoriesList(): ReactElement {
	const [term, setTerm] = useState('');
	const dispatch: Function = useDispatch();

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(actionCreators.searchRepositories(term));
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
}

export default RepositoriesList;
