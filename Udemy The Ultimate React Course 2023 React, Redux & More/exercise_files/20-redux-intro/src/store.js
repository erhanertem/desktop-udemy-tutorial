import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

//IMPORT REDUCERS
import accountReducer from './features/accounts/accountSlice'
import customerReducer from './features/customers/customerSlice'

//COMBINED REDUCERS
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
})
//CREATE REDUX STORE
// const store = createStore(accountReducer)
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
