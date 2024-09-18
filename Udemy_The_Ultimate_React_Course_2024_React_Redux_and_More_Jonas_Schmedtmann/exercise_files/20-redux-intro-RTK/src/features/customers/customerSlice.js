/**
 NOTE: CreateSlice has 3 benefits: 
 1. Action creators are automatically generated, 
 2. Writing reducers are much easier, 
 3. Allow mutating states via built -in Immer
 */
import { createSlice } from '@reduxjs/toolkit';

// #1. SET INITIAL STATE OBJECT
const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

// #2. SETUP RTK SLICER (REDUCER FUNCTION + ACTION CREATORS)
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    // action type --> 'customer/createCustomer'
    createCustomer: {
      // NOTE: RTK behind the scene, creates action creators that takes in only one argument. In cases such as this where multiple arguments are required, we need to prep the data before it hits the RTK reducer
      prepare(fullName, nationalID) {
        // Define payload object to include multiple arguments before hitting to reducer fn
        return {
          payload: {
            fullName,
            nationalID,
            // WE DO SIDE EFFECTS HERE NOT IN THE REDUCER BODY
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    // action type --> 'customer/updateName'
    updateName: (state, action) => {
      state.fullName = action.payload.fullName;
    },
  },
});

// EXPORT SYNC ACTION CREATOR FUNCTIONS
export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
