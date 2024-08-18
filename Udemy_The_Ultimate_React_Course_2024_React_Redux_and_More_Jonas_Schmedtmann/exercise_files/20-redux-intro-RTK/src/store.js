// #1. IMPORT REDUX STORE
// NOTE: Includes immer library, devtools, thunks middleware functionality on top of Redux
import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './features/account/accountSlice';
import customerReducer from './features/customers/customerSlice';

// #2. CREATE RTK STORE
const store = configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
});

export default store;
