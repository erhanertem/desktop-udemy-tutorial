import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeUser = createAsyncThunk('users/remove', async user => {
  // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
  // //FIX THIS!!
  // console.log(response);
  // console.log(response.data);
  // console.log(user);
  // return response.data;

  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
});
