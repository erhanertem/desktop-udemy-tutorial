import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeUser = createAsyncThunk('users/remove', async user => {
  // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
  // //FIX THIS!!
  // console.log(response);
  // console.log(response.data);
  // console.log(user);
  // return response.data;

  //NOTE: response.data would return no payload to track after the delete operation, so we can not update our list in return. In order to delere user and return that user to take it off the list we have to return the user.

  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // console.log(user);
  return user;
});
