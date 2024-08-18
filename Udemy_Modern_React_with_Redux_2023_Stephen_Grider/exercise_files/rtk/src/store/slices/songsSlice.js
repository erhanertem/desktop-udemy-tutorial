import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
  //UNIQUE SLICE IDENTIFIER TAG NAME
  name: 'song',
  //DEFINES THE INITIAL STATE VALUE OF THE KEY REFERRED which is SONGS
  initialState: [],
  //REDUCER FUNCTIONS FOR SLICE
  reducers: {
    addSong(state, action) {
      //IMPORTANT! STATE IS NOT THE BIG STATE, IT IS THE PIECE OF STATE MANAGED WITHIN THIS REDUCER
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter(el => el !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions; //Export by individual name
export const songsReducer = songsSlice.reducer; //Export combined reducer
