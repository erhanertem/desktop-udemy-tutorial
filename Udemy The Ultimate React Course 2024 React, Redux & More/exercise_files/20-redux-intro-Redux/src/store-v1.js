// #1. IMPORT REDUX STORE
import { combineReducers, createStore } from 'redux';

// #2. SETUP INITIAL STATE OBJECT
const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
};
const initialStateCustomer = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

// #3. SETUP ACCOUNT REDUCER
// REDUX STATE REQUIRES INITIAL STATE SPECIFIED ON CONTRARY TO useReducer DECLARATION
function accountReducer(state = initialStateAccount, action) {
	switch (action.type) {
		case 'account/deposit':
			return { ...state, balance: state.balance + action.payload };
		case 'account/withdraw':
			return { ...state, balance: state.balance - action.payload };
		case 'account/requestLoan':
			if (state.loan > 0) return state;
			return {
				...state,
				balance: state.balance + action.payload.amount,
				loan: action.payload.amount,
				loanPurpose: action.payload.purpose,
			};
		case 'account/payLoan':
			return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };
		default:
			return state;
		// NOTE: UNLIKE @useReducer, ITS NOT ADVICED TO THROW DEV ERROR IN REDUX, JUST STATE IS RETURNED W/NO CHANGE
		// throw new Error('Unknown action type specified');
	}
}

// #3. SETUP CUSTOMER REDUCER
function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case 'customer/createCustomer':
			return {
				...state,
				fullName: action.payload.fullName,
				nationalId: action.payload.nationalId,
				createdAt: action.payload.createdAt,
			};
		case 'customer/updateName':
			return {
				...state,
				fullName: action.payload,
			};
		default:
			return state;
	}
}

// #4. CREATE CUSTOMER STORE (WHEN THERE IS MULTIPLE REDUCERS)
const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer);
// // #4. CREATE ACCOUNT STORE (WHEN THERE IS A SINGLE REDUCER)
// const store = createStore(accountReducer);

// #5. DISPATCH ACCOUNT ACTIONS
// // #5.1 DISPATCH ACTIONS W/OUT ACTION CREATOR FUNCTIONS
// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// store.dispatch({
// 	type: 'account/requestLoan',
// 	payload: { amount: 1000, purpose: 'Buy a cheap car' },
// });
// store.dispatch({
// 	type: 'account/payLoan',
// });
// console.log(store.getState());

//#5.2 DISPATCH ACTIONS W/ACTION CREATOR FUNCTIONS
//#5.2.1 SETUP ACTION CREATOR FUNCTIONS
function deposit(amount) {
	return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
	return { type: 'account/withdraw', payload: amount };
}
function requestLoan(amount, purpose) {
	return {
		type: 'account/requestLoan',
		payload: { amount, purpose },
	};
}
function payLoan() {
	return {
		type: 'account/payLoan',
	};
}
//#5.2.2 DISPATCH ACTIONS W/ACTION CREATOR FUNCTIONS
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, 'Buy a cheap car'));
store.dispatch(payLoan());
console.log(store.getState());

//#5.2 DISPATCH ACTIONS W/ACTION CREATOR FUNCTIONS
//#5.2.1 SETUP ACTION CREATOR FUNCTIONS
function createCustomer(fullName, nationalId) {
	return {
		type: 'customer/createCustomer',
		payload: { fullName, nationalId, createdAt: new Date().toISOString() },
	};
}
function updateName(fullName) {
	return {
		type: 'customer/updateName',
		payload: { fullName },
	};
}
//#5.2.2 DISPATCH ACTIONS W/ACTION CREATOR FUNCTIONS
store.dispatch(createCustomer('Erhan Ertem', '1253535235521521'));
store.dispatch(deposit(250));
console.log(store.getState());
