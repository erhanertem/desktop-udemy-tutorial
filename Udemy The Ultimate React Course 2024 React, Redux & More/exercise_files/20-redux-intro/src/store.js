import { configureStore } from '@reduxjs/toolkit'

//IMPORT REDUCERS
import accountReducer from './features/accounts/accountSlice'
import customerReducer from './features/customers/customerSlice'

//CREATE REDUX RTK STORE
const store = configureStore({
	//COMBINED REDUCERS
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
})

export default store
