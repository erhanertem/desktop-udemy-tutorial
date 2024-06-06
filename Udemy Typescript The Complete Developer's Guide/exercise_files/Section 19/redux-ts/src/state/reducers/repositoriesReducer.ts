interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface Action {
	type: string;
	payload?: any; //optional payload
}

// Define state object type for the reducer
// Define action object type for the reducer
// Define return object type from the reducer action types
const reducer = (
	state: RepositoriesState,
	action: Action,
): RepositoriesState => {
	switch (action.type) {
		case 'search_repositories':
			// In the event of a new search, initiate loading, reset error, reset data list
			return { loading: true, error: null, data: [] };
		case 'search_repositories_success':
			// In the event of a successfull fetch, terminate loading, reset error,
			return { loading: false, error: null, data: action.payload };
		case 'search_repositories_error':
			// In the event of an error, terminate loading, publish error, reset data list
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
