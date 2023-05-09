import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  //UNIQUE SLICE IDENTIFIER TAG NAME
  name: 'movie',
  //DEFINES THE INITIAL STATE VALUE OF THE KEY REFERRED which is SONGS
  initialState: [],
  //REDUCER FUNCTIONS FOR SLICE
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      return state.filter(el => el !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions; //Export by individual name
export const moviesReducer = moviesSlice.reducer; //Export combined reducer
