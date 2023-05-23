import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    // isLoading: false,
    // error: null,
  },
  reducers: {}, //Omittable
  extraReducers(builder) {
    //-->FETCH ACTIONS
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
    //-->POST ACTIONS
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //-->DELETE ACTIONS
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;

      // // //FIX THIS!!
      // console.log(action);
      state.data = state.data.filter(user => user.id !== action.payload.id);
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
