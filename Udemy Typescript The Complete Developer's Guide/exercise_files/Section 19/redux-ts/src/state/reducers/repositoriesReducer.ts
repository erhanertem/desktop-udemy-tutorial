import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState = {
	loading: false,
	error: null,
	data: [],
};

// Define state object type for the reducer
// Define action object type for the reducer
// Define return object type from the reducer action types
const repositoriesReducer = (
	state: RepositoriesState = initialState,
	action: Action,
): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH:
			// In the event of a new search, initiate loading, reset error, reset data list
			return { loading: true, error: null, data: [] };
		case ActionType.SUCCESS:
			// In the event of a successfull fetch, terminate loading, reset error,
			return { loading: false, error: null, data: action.payload };
		case ActionType.ERROR:
			// In the event of an error, terminate loading, publish error, reset data list
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default repositoriesReducer;
