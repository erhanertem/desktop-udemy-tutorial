import { combineReducers, createStore } from 'redux';
// NON-REDUX PART****************************
// #1. SET INITIAL STATE OBJECT
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};
const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

// #2. SETUP REDUCER FUNCTION
// NOTE: currState is set to initialState object directly unlike useREducer setup
function accountReducer(currState = initialStateAccount, action) {
  switch (action.type) {
    // Naming based on first domain then related action
    case 'account/deposit':
      return { ...currState, balance: currState.balance + action.payload };
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
    default:
      // NOTE: Unlike in useReducer where we throw an error, in Redux it's advised to return currState
      return currState;
  }
}

function customerReducer(currState = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...currState,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return { ...currState, fullName: action.payload.fullName };
    default:
      return currState;
  }
}

// REDUX PART**************************
// #3. CREATE REDUX STORE
// > Single Root reducer setup
// const store = createStore(accountReducer);
// > Multi root reducer setup
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// MANUAL DISPATCHING
store.dispatch({ type: 'account/deposit', payload: 500 });
store.dispatch({ type: 'account/withdraw', payload: 200 });
console.log(store.getState());
store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } });
console.log(store.getState());
store.dispatch({ type: 'account/payLoan' });
console.log(store.getState());

// #5. SETUP ACTION CREATOR FUNCTIONS
function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
}
function payLoan() {
  return { type: 'account/payLoan' };
}

function createCustomer(fullName, nationalID) {
  return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
}
function updateName(fullName) {
  return { type: 'customer/updateName', payload: { fullName } };
}

// #6. DISPATCH ACTIONS
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer('Erhan ERTEM', '1234567'));
store.dispatch(updateName('Ernie ERTEM'));
console.log(store.getState());
