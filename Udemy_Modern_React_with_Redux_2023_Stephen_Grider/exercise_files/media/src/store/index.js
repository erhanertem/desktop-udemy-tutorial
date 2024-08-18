import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import albumsApi from './apis/albumsApi';
import photosApi from './apis/photosApi';

export const store = configureStore({
	reducer: {
		users: usersReducer,
		// albums: albumsApi.reducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[photosApi.reducerPath]: photosApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
	},
});

// window.store = store;

setupListeners(store.dispatch);

// RTK NATIVE THUNKS FROM USERS SLICER
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
// RTK QUERY THUNK FROM ALBUMS API
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';
