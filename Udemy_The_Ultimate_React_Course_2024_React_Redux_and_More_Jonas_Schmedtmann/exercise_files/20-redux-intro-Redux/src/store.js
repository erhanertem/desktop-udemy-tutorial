import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// REDUX PART**************************
// #4. CREATE REDUX STORE
// > Single Root reducer setup
// const store = createStore(accountReducer);
// > Multi Root reducer setup
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
