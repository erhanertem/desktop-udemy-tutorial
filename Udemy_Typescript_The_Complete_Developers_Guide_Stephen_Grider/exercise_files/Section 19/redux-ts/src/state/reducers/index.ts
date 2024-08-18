import repositoriesReducer from './repositoriesReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({ repositories: repositoriesReducer });

export default reducers;

// Per react-redux documentation
// NOTE: Take the reducer object, return the type of it and assign as RootState type
export type RootState = ReturnType<typeof reducers>;
