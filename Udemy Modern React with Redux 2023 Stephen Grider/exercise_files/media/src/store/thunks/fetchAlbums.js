import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAlbums = createAsyncThunk('albums/fetch', async id => {
  const response = await axios.get(`http://localhost:3005/albums?userId=${id}`);
  return response.data;
});

export { fetchAlbums };
