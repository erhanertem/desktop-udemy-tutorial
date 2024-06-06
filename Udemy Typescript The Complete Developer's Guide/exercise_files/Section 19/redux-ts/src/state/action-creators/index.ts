import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

function searchRepositories(term: string) {
	return async (dispatch: Dispatch<Action>) => {
		// Set state to Search Action Type State Composition
		dispatch({ type: ActionType.SEARCH });
		try {
			const { data } = await axios.get(
				'https"//registry.npmjs.ord/-/v1/search',
				{ params: { text: term } },
			);
			// Filter out the reduntant data
			const names = data.objects.map((result: any) => {
				return result.package.name;
			});
			// Dispatch the filtered data with SUCCESS Action Type State Composition
			dispatch({ type: ActionType.SUCCESS, payload: names });
		} catch (err) {
			if (err instanceof Error) {
				// Set state to Search Error Action Type State Composition
				dispatch({ type: ActionType.ERROR, payload: err.message });
			}
		}
	};
}

export default searchRepositories;
