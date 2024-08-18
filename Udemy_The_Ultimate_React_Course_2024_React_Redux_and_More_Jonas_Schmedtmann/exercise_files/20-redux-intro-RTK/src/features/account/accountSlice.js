import { createSlice } from '@reduxjs/toolkit';

// #1. SETUP INITIAL STATE OBJECT
const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
	isLoading: false,
};

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		deposit(state, action) {
			//Reducer created automatically behind the scene as if 'account/deposit' reducer case
			state.balance += action.payload; //We mutate directly the state object
			state.isLoading = false;
		},
		withdraw(state, action) {
			// as if 'account/withdraw' reducer case
			state.balance -= action.payload;
		},
		payLoan(state) {
			// IMPORTANT!! The order these state mutates is very importnsat if they effect each other
			state.loanPurpose = '';
			state.balance -= state.loan;
			state.loan = 0;
		},
		convertingCurrency(state) {
			state.isLoading = true;
		},
		requestLoan: {
			//PREPARE THE PAYLOAD OBJECT BEFORE SUBMISSION TO REDUCER ITEM IN MULTI ARGUMENT INTAKE
			prepare(amount, purpose) {
				return {
					payload: { amount, purpose },
				};
			},
			reducer(state, action) {
				if (state.loan > 0) return; //If we opt to make no changes to state, we just return not return state as in Redux

				state.loan = action.payload.amount;
				state.loanPurpose = action.payload.purpose;
				state.balance += action.payload.amount;
			},
		},
	},
});

//ASYNC MIDDLEWARE THUNK FOR FETCHING DATA (NOT RTK WAY!!!)
export function deposit(amount, currency) {
	if (currency === 'USD') return { type: 'account/deposit', payload: amount };

	// ASYNC FETCH OPERATION VIA REDUX THUNK
	return async function (dispatch, getState) {
		dispatch({ type: 'account/convertingCurrency' });
		//MAKE API CALL
		const res = await fetch(
			`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
		);
		const data = await res.json();
		// console.log(data);
		const converted = data.rates.USD;
		//RETURN ACTION VIA DISPATCH
		dispatch({ type: 'account/deposit', payload: converted });
	};
}

// console.log(accountSlice);
// export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;

// // #2. SETUP ACCOUNT REDUCER
// export default function accountReducer(state = initialStateAccount, action) {
// 	switch (action.type) {
// 		case 'account/deposit':
// 			return { ...state, balance: state.balance + action.payload, isLoading: false };
// 		case 'account/withdraw':
// 			return { ...state, balance: state.balance - action.payload, isLoading: false };
// 		case 'account/requestLoan':
// 			if (state.loan > 0) return state;
// 			return {
// 				...state,
// 				balance: state.balance + action.payload.amount,
// 				loan: action.payload.amount,
// 				loanPurpose: action.payload.purpose,
// 				isLoading: false,
// 			};
// 		case 'account/payLoan':
// 			return {
// 				...state,
// 				loan: 0,
// 				loanPurpose: '',
// 				balance: state.balance - state.loan,
// 				isLoading: false,
// 			};
// 		case 'account/convertingCurrency':
// 			return { ...state, isLoading: true };
// 		default:
// 			return state;
// 		// NOTE: UNLIKE @useReducer, ITS NOT ADVICED TO THROW DEV ERROR IN REDUX, JUST STATE IS RETURNED W/NO CHANGE
// 		// throw new Error('Unknown action type specified');
// 	}
// }

// // #3. SETUP ACTION CREATOR FUNCTIONS
// export function deposit(amount, currency) {
// 	if (currency === 'USD') return { type: 'account/deposit', payload: amount };

// 	// ASYNC FETCH OPERATION VIA REDUX THUNK
// 	return async function (dispatch, getState) {
// 		dispatch({ type: 'account/convertingCurrency' });
// 		//MAKE API CALL
// 		const res = await fetch(
// 			`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
// 		);
// 		const data = await res.json();
// 		// console.log(data);
// 		const converted = data.rates.USD;
// 		//RETURN ACTION VIA DISPATCH
// 		dispatch({ type: 'account/deposit', payload: converted });
// 	};
// }
// export function withdraw(amount) {
// 	return { type: 'account/withdraw', payload: amount };
// }
// export function requestLoan(amount, purpose) {
// 	return {
// 		type: 'account/requestLoan',
// 		payload: { amount, purpose },
// 	};
// }
// export function payLoan() {
// 	return {
// 		type: 'account/payLoan',
// 	};
// }
