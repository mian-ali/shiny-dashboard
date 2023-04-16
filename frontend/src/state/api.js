import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000' }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
