import { FormEvent, ReactElement, useState } from 'react';

function RepositoriesList(): ReactElement {
	const [term, setTerm] = useState('');

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
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
