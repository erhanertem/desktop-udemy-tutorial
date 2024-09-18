// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// NOTE: configureStore will do the job of thunk, composewithDEvTools, applyMiddleware,createStore, combineReducer in one go
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// RTK PART**************************
// #4. CREATE RTK STORE
// > Single Root setup
// const store = configureStore({
//   reducer: { account: accountReducer },
// });
// > Multi Root setup
const store = configureStore({
  reducer: {
    // Register the customer slice reducer
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
