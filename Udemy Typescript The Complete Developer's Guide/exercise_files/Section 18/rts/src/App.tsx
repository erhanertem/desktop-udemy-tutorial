import { ReactElement } from 'react';

import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

function App(): ReactElement {
	return (
		<div>
			<h1>Hi there!</h1>
			<Parent />
			<br />
			<GuestList />
			<br />
			<UserSearch />
			<br />
			<EventComponent />
		</div>
	);
}

export default App;
