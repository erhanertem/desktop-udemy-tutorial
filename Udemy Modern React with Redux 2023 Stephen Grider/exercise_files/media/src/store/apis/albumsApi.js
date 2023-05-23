import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// //DEV ONLY!! ARTIFICIAL PAUSE FOR TESTING!!
// const pause = duration => {
//   return new Promise(resolve => {
//     setTimeout(resolve, duration);
//   });
// };

//API CONFIGURATION FILE
const albumsApi = createApi({
  reducerPath: 'albums', // as appears @ state { users: {isLoading: false, error: null, data: [], albums: {......}}}
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005', //root url of the json backend server

    // //DEV ONLY - REMOVE FOR PRODUCTION
    // fetchFn: async (...args) => {
    //   await pause(1000);
    //   return fetch(...args);
    // },
    // //**************
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        // invalidatesTags: ['Albums'], // Manually provide this reference as a source of refetching mechanism for re-fetching albums
        invalidatesTags: (result, error, user) => {
          return [{ type: 'UsersAlbums', id: user.id }];
        }, //Create invalidatesTag on the fly automatically

        query: user => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),

      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          // console.log(album);
          return [
            {
              type: 'Album',
              id: album.id,
            },
          ];
        },
        query: album => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),

      fetchAlbums: builder.query({
        // providesTags: ['Album'], // Manually provide a tag name to propogate refetching using useFetchAlbumsQuery hook
        providesTags: (result, error, user) => {
          // console.log(
          //   '🚀 | file: albumsApi.js:67 | endpoints | result:',
          //   result
          // );
          const tags = result.map(album => {
            return { type: 'Album', id: album.id };
          });
          tags.push({ type: 'UsersAlbums', id: user.id });
          // console.log('🚀 | file: albumsApi.js:67 | endpoints | result:', tags);
          return tags;
        }, //Create providesTags on the fly automatically

        // fetchAlbums is translated as a hook under the hood as albumsApi.useFetchAlbumsQuery()
        query: user => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi; // = albumsApi is where we extract those hooks from... and export

export { albumsApi };
