import { createSlice } from '@reduxjs/toolkit'

//REDUCER INITIAL STATE
const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
	isLoading: false,
}

//CREATE A REDUCER - exported as default
const accountSlice = createSlice({
	name: 'account', //NAME OF THE SLICE
	initialState,
	//ACTION CREATORS
	reducers: {
		deposit(state, action) {
			state.balance += action.payload
			state.isLoading = false
		},
		withdraw(state, action) {
			// ACTION PAYLOAD ACCEPTS ONLY ONE ARGUMENT
			state.balance -= action.payload // WE ARE DIRECTLY OVERRIDING VIA IMMER
		},
		requestLoan: {
			// ACTION PAYLOAD ACCEPTS ONLY ONE ARGUMENT - IN ORDER TO CONSUME MULTIPLE STATE ARGUMENTS (NOT IN AN OBJECT LITERAL) IN A ACTION FUNCTION, WE NEED TO PREP THE STATE
			prepare(amount, purpose) {
				return {
					//PREP THE PAYLOAD AS AN OBJECT INTAKING TWO ARGUMENTS IN THIS CASE
					payload: { amount, purpose },
				}
			},
			//ISOLATED REDUCER FUNCTION THEN TAKES IN THIS PREPED ACTION PAYLOAD
			reducer(state, action) {
				if (state.loan > 0) return // WE DONOT RETURN STATE ANYMORE
				state.loan = action.payload.amount
				state.loanPurpose = action.payload.purpose
				state.balance += action.payload.amount
			},
		},
		payLoan(state, action) {
			//VERY IMPORTANT! BEWARE DIRECT MUTATION AFFECTS DEPENDANT STATES!!! SINCE THIS REQUIRES LOAN STATE: FIRST, WE DO OUR SUBSTRACTION AND THEN MUTATE THE LOAN TO ZERO.
			state.balance -= state.loan
			state.loan = 0
			state.loanPurpose = ''
		},
		convertingCurrency(state, action) {
			state.isLoading = true
		},
	},
})
// console.log(accountSlice)
//EXPORT ACTION CREATORS
// export const { deposit, payLoan, withdraw, requestLoan } = accountSlice.actions
export const { payLoan, withdraw, requestLoan } = accountSlice.actions
//ASYNC FETCH CUSTOMIZED ACTION CREATOR
export function deposit(amount, currency) {
	if (currency === 'USD') return { type: 'account/deposit', payload: amount }
	//REDUX THUNK FUNCTION MIDDLEWARE RECEIVES ALWAYS A DISPATCH AND GETSTATE PARAMETERS
	//REDUX THUNKS ARE AUTOMATICALLY PROVIDED INSIDE REDUX RTK
	return async function (dispatch, getState) {
		dispatch({ type: 'account/convertingCurrency' }) //isloading true
		//API CALL
		const res = await fetch(
			`https:\\api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
		)
		const data = await res.json()
		const converted = data.rates.USD
		//RETURN ACTION
		//NOTE: we dispatch the async result not return!!! in thunks
		dispatch({ type: 'account/deposit', payload: converted })
	}
}
//EXPORT REDUCER
export default accountSlice.reducer
