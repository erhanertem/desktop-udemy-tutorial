import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {}, //Omittable
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      //Update our state to show that we are loading at the moment
      state.isLoading = true;
    }); //pending case
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //Update our state to show that we have retrieved the data succesfully
      state.isLoading = false;
      state.data = action.payload; //Action is comprised of payload and type keys
    }); //fulfilled case
    builder.addCase(fetchUsers.rejected, (state, action) => {
      //Update our state to show that we have failed loading the data
      state.isLoading = false;
      state.error = action.error; // Action returns type and error keys - error key holds an error object
    }); // error case
  },
});

export const usersReducer = usersSlice.reducer;
