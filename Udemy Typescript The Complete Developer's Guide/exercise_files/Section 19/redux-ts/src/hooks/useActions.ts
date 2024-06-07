import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch } from 'react-redux';

export function useActions() {
	const dispatch = useDispatch();

	return bindActionCreators(actionCreators, dispatch);
	// returns basically an object of  {searchRepositorues: dispatch(searchRepositories)}
}
