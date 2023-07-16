import { combineReducers, createStore } from 'redux'
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
const store = createStore(rootReducer)

export default store
