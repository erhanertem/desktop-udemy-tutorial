import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
//RTK QUERY
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,

    //NOTE: A slicer is automatically created when an API is created. That slicer would have its reducer. So that slicer reducer should be incorporated into store
    // //#1.First way of creating reducer for albums
    // albums: albumsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer, ///same as writing albums: .... middleware property below auto slices for albums behind the scene
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  }, //middleware property provides connection between the store and albumsApi, etc.
});

setupListeners(store.dispatch); //Finally, setup listener for connecting API to store

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';
