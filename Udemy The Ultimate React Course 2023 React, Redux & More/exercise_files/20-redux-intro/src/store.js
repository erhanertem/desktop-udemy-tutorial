import { createStore } from 'redux'

//REDUCER INITIAL STATE
const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
}

//CREATE A REDUCER
function reducer(state = initialState, action) {
	switch (action.type) {
		case 'account/deposit':
			return {
				...state,
				balance: state.balance + action.payload,
			}
		case 'account/withdraw':
			return { ...state, balance: state.balance - action.payload }
		case 'account/requestLoan':
			if (state.loan > 0) return state
			return {
				...state,
				loan: action.payload.amount,
				loanPurpose: action.payload.purpose,
				balance: state.balance + action.payload.amount,
			}
		case 'account/payLoan':
			return {
				...state,
				loan: 0,
				loanPurpose: '',
				balance: state.balance - state.loan,
			}
		default:
			return state
	}
}

//CREATE REDUX STORE
const store = createStore(reducer)

// -> #1. TYPE IN ACTION OBJECT INSIDE DISPATCH DIRECTLY...PRONE TO ERROR
// store.dispatch({ type: 'account/deposit', payload: 500 })
// console.log(store.getState())
// store.dispatch({ type: 'account/withdraw', payload: 200 })
// console.log(store.getState())
// store.dispatch({
// 	type: 'account/requestLoan',
// 	payload: { amount: 1200, purpose: 'car financing' },
// })
// console.log(store.getState())
// store.dispatch({ type: 'account/payLoan' })
// console.log(store.getState())

// console.log('Hey Redux')

// -> #2. SETUP ACTION CREATORS - DESIGNATED FUNCTIONS TO BE CALLED BY DISPATCH
function deposit(amount) {
	return { type: 'account/deposit', payload: amount }
}
function withdraw(amount) {
	return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount, purpose) {
	return {
		type: 'account/requestLoan',
		payload: { amount, purpose },
	}
}
function payLoan() {
	return { type: 'account/payLoan' }
}

store.dispatch(deposit(1000))
console.log(store.getState())
store.dispatch(withdraw(500))
console.log(store.getState())
store.dispatch(requestLoan(500, 'car loan'))
console.log(store.getState())
store.dispatch(payLoan())
console.log(store.getState())
