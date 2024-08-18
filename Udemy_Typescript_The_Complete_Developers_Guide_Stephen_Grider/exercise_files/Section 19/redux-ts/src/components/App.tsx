import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

function App(): ReactElement {
	return (
		<Provider store={store}>
			<div>
				<h1>Search for a Package</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
}

export default App;
