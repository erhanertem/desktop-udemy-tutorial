import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

//-->SOLUTION #2 - MANUAL ACTIONTYPE SOLUTION
export const reset = createAction('app/reset');
// console.log(reset.toString());

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
    // //-->SOLUTION #1 - CONJOINED SLICER SOLUTION
    // reset(state, action) {
    //   console.log(action);
    //   return [];
    // },
  },
  //-->SOLUTION #2 - MANUAL ACTIONTYPE SOLUTION
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const songsSlice = createSlice({
  //UNIQUE SLICE IDENTIFIER TAG NAME
  name: 'song',
  //DEFINES THE INITIAL STATE VALUE OF THE KEY REFERRED which is SONGS
  initialState: [],
  //REDUCER FUNCTIONS FOR SLICE
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong' is the reducer path
    addSong(state, action) {
      //IMPORTANT! STATE IS NOT THE BIG STATE, IT IS THE PIECE OF STATE MANAGED WITHIN THIS REDUCER
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong' is the reducer path
    removeSong(state, action) {
      // action.payload === string , the song we want to remove
      // //->#1 splice approach
      // //Find the index of payload we are interested in the state array
      // const index = state.indexOf(action.payload);
      // if (index === -1) {
      //   return;
      // }
      // //Remove the element at the specified index and mutate the state array
      // state.splice(index, 1);
      // //->#2 filter approach
      // const index = state.indexOf(action.payload);
      // if (index === -1) {
      //   return;
      // }
      // return state.toSpliced(index, 1);
      //->#3 filter approach
      return state.filter(el => el !== action.payload);
    },
  },
  // //-->SOLUTION #1 - CONJOINED SLICER SOLUTION
  //   //TELL songsSlice to sync with the movie/reset reducer path
  //   extraReducers(builder) {
  //     // builder.addCase('movie/reset', (state, action) => {
  //     builder.addCase(moviesSlice.actions.reset.type, (state, action) => {
  //       // state.push('New Song!!!')
  //       return [];
  //     });
  //   },
  //-->SOLUTION #2 - MANUAL ACTIONTYPE SOLUTION
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

//CREATE A STORE WITH A SONGS KEY WHICH HAS REDUCERS ASSGINED ONTO VIA SONGSSLICE
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(store.getState());

export { store };

// export const addSong = songsSlice.actions.addSong;
export const { addSong, removeSong } = songsSlice.actions; //NOTE: get access to addSong action type inside the importing file
// //-->SOLUTION #1 - CONJOINED SLICER SOLUTION
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;
//-->SOLUTION #2 - CONJOINED SLICER SOLUTION
export const { addMovie, removeMovie } = moviesSlice.actions;

// console.log(moviesSlice.actions.reset.type);
// console.log(moviesSlice.actions.reset.toString());

// // console.log(
// //   '🚀 | file: index.js:32 | songsSlice.actions:',
// //   songsSlice.actions.addSong('Some song!!')
// // );

// // // console.log(store);
// const startingState = store.getState();
// // console.log(startingState);
// console.log(JSON.stringify(startingState));

// // store.dispatch({
// //   type: 'song/addSong',
// //   payload: 'New Song!!!',
// // });
// store.dispatch(songsSlice.actions.addSong('Some song!!'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
