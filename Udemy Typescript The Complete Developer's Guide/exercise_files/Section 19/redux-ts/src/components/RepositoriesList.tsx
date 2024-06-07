import { FormEvent, ReactElement, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// import { actionCreators } from '../state';
// Custom hook to simplify calling actionCreators
import { useActions } from '../hooks/useActions';

function RepositoriesList(): ReactElement {
	const [term, setTerm] = useState('');
	// const dispatch: Function = useDispatch();
	const { searchRepositories } = useActions();
	const state = useSelector((state: any) => state.repositories);
	console.log(state);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		// dispatch(actionCreators.searchRepositories(term));
		searchRepositories(term);
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
