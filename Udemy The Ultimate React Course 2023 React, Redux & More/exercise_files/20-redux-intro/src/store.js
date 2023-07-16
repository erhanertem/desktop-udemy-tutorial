import { combineReducers, createStore } from 'redux'

//REDUCER INITIAL STATE
const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
}

const initialStateCustomer = {
	fullName: '',
	nationalID: '',
	createdAt: '',
}

//CREATE A REDUCER
function accountReducer(state = initialStateAccount, action) {
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
function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case 'customer/createCustomer':
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			}
		case 'customer/updateName':
			return { ...state, fullName: action.payload }
		default:
			return state
	}
}
//COMBINED REDUCERS
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
})
//CREATE REDUX STORE
// const store = createStore(accountReducer)
const store = createStore(rootReducer)

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

function createCustomer(fullName, nationalID) {
	return {
		type: 'customer/createCustomer',
		payload: { fullName, nationalID, createdAt: new Date().toISOString() },
	}
}
function updateName(fullName) {
	return {
		type: 'customer/updateName',
		payload: fullName,
	}
}

store.dispatch(createCustomer('Ernie Walters', '124545478'))
console.log(store.getState())
store.dispatch(updateName('Ernie Sanders'))
console.log(store.getState())
