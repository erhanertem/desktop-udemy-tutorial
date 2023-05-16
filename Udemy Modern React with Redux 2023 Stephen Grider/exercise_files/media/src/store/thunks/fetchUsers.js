import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk(
  'users/fetch', // Generates an action type called 'users/fetch/pending' or 'users/fetch/fulfilled' . We can type anything we wish but users/fetch makes sense logically

  async () => {
    const response = await axios.get('http://localhost:3005/users');

    //DEV ONLY!!
    await pause(1000);

    return response.data;
  }
);

// fetchUsers returns 3 different type of objects
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected';

//DEV ONLY!! ARTIFICIAL PAUSE FOR TESTING!!
const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
