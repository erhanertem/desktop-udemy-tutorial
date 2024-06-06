import { ReactElement } from 'react';

import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App(): ReactElement {
	return (
		<div>
			<h1>Hi there!</h1>
			<Parent />
			<br />
			<GuestList />
			<br />
			<UserSearch />
		</div>
	);
}

export default App;
