import { createSlice } from '@reduxjs/toolkit'

//REDUCER INITIAL STATE
const initialState = {
	fullName: '',
	nationalID: '',
	createdAt: '',
}

//CREATE A REDUCER - exported as default
const customerSlice = createSlice({
	//NAME OF THE SLICE
	name: 'customer',
	initialState,
	//ACTION CREATORS
	reducers: {
		createCustomer: {
			// preapre: function(fullName, nationalID) {} //--> same as writing like below
			prepare(fullName, nationalID) {
				return {
					payload: { fullName, nationalID, createdAt: new Date().toString() },
				}
			},
			reducer(state, action) {
				state.fullName = action.payload.fullName
				state.nationalID = action.payload.nationalID
				state.createdAt = action.payload.createdAt
			},
		},
		updateName(state, action) {
			state.fullName = action.payload.fullName
		},
	},
})

export const { createCustomer, updateName } = customerSlice.actions

export default customerSlice.reducer
