import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

// > Gather type information from the store for creating custom named dispatch function types
export type AppDispatch = typeof store.dispatch;
// > Gather type information from the store for creating custom named useSelector
// NOTE: ReturnType<> typescript specific and only extracts the type from the returned value of what specified within <> brackets
export type RootState = ReturnType<typeof store.getState>;
