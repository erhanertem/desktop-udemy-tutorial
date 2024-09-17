// NON-REDUX PART****************************
// #1. SET INITIAL STATE OBJECT
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};
// #2. SETUP REDUCER FUNCTION - ACTION CREATORS
// NOTE: currState is set to initialState object directly unlike useREducer setup
export default function accountReducer(currState = initialStateAccount, action) {
  switch (action.type) {
    // Naming based on first domain then related action
    case 'account/deposit':
      return { ...currState, balance: currState.balance + action.payload, isLoading: false };
    case 'account/withdraw':
      return { ...currState, balance: currState.balance - action.payload };
    case 'account/requestLoan':
      if (currState.loan > 0) return currState;
      return {
        ...currState,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: currState.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...currState,
        balance: currState.balance - currState.loan,
        loan: 0,
        loanPurpose: '',
      };
    case 'account/convertingCurrency':
      return { ...currState, isLoading: true };
    default:
      // NOTE: Unlike in useReducer where we throw an error, in Redux it's advised to return currState
      return currState;
  }
}

// #3. SETUP ACTION CREATOR FUNCTIONS
// NOTE: These functions will not be imported by the store but the components that would need to create the actions
export function deposit(amount, currency) {
  // GUARD CLAUSE - IF CURRENCY IS USD just pass on the action object as is
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  // ELSE, CONVERT AMOUNT TO USD (async operation to retrieve conversion rate)
  // INITIATE REDUX THUNK MIDDLEWARE
  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurrency' });
    // ASYNC API CALL
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
    const data = await response.json();
    const converted = data.rates.USD;
    // MANUALLY DISPATCH ACTION
    dispatch({ type: 'account/deposit', payload: converted });
  };
}
export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
}
export function payLoan() {
  return { type: 'account/payLoan' };
}
