import { FormEvent, ReactElement, useState } from 'react';
// import { useDispatch } from 'react-redux';
// Typed useSelector hook which has all the types defined for root state
import { useSelector } from '../hooks/useTypedSelector';

// import { actionCreators } from '../state';
// Custom hook to simplify calling actionCreators
import { useActions } from '../hooks/useActions';

function RepositoriesList(): ReactElement {
	const [term, setTerm] = useState('');
	// const dispatch: Function = useDispatch();
	const { searchRepositories } = useActions();
	const { loading, error, data } = useSelector(
		(state: any) => state.repositories,
	);
	console.log(data);

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
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error &&
				!loading &&
				data.map((name: string) => <div key={name}>{name}</div>)}
		</div>
	);
}

export default RepositoriesList;
