/**
 NOTE: CreateSlice has 3 benefits: 
 1. Action creators are automatically generated, 
 2. Writing reducers are much easier, 
 3. Allow mutating states via built -in Immer
 */
import { createSlice } from '@reduxjs/toolkit';

// #1. SET INITIAL STATE OBJECT
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

// #2. SETUP RTK SLICER (REDUCER FUNCTION + ACTION CREATORS)
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    // ITS AS IF CREATING A REDUX ACTION TYPE 'account/deposit' IN A SWITCH STATEMENT
    deposit(state, action) {
      // IN THESE RTK REDUCER FUNCTIONS WE DO NOT RETURN STATE, JUST MAKE MUTATIVE OPERATIONS ON STATES
      state.balance += action.payload;
      state.isLoading = false;
    },
    // action type --> 'account/withdraw'
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    // action type --> 'account/requestLoan'
    requestLoan: {
      // NOTE: RTK behind the scene, creates action creators that takes in only one argument. In cases such as this where multiple arguments are required, we need to prep the data before it hits the RTK reducer
      prepare(amount, purpose) {
        // Define payload object to include multiple arguments before hitting to reducer fn
        return { payload: { amount, purpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    // action type --> 'account/payLoan'
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
    // action type --> 'account/convertingCurrency'
    convertingCurrency(state, action) {
      state.isLoading = true;
    },
  },
});

// EXPORT ASYNC THUNKS - NON RTK WAY
export function deposit(amount, currency) {
  // GUARD CLAUSE - IF CURRENCY IS USD just pass on the action object as is
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  // ELSE, CONVERT AMOUNT TO USD (async operation to retrieve conversion rate)
  // INITIATE REDUX THUNK MIDDLEWARE
  return async function (dispatch, getState) {
    // MANUALLY DISPATCH ACTION
    dispatch({ type: 'account/convertingCurrency' });
    // ASYNC API CALL
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
    const data = await response.json();
    const converted = data.rates.USD;
    // MANUALLY DISPATCH ACTION
    dispatch({ type: 'account/deposit', payload: converted });
  };
}

// EXPORT SYNC ACTION CREATOR FUNCTIONS - USED BY COMPONENT EVENTHANDLERS
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
// EXPORT REDUCER - USED BY store.js FOR CONFIGURING THE RTK STORE
export default accountSlice.reducer;
