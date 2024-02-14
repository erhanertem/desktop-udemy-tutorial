// #1. IMPORT REDUX STORE
// > Import Thunk
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import accountReducer from './features/account/accountSlice';
import customerReducer from './features/customers/customerSlice';

// #2. CREATE CUSTOMER STORE (WHEN THERE IS MULTIPLE REDUCERS)
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

// > Store w/out thunk middleware setup
// const store = createStore(rootReducer);
// > Store w/ thunk middleware setup
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
