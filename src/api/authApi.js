import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body: { ...body },
        providesTags: ['AUTH'],
      }),
    }),
    refresh: builder.mutation({
      query: (params) => ({
        url: 'user/refresh-token',
        method: 'POST',
        params: { params },
        providesTags: ['AUTH'],
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'user/logout',
        method: 'POST',
        providesTags: ['AUTH'],
      }),
    }),

    getUserInfo: builder.query({
      query: () => ({
        url: 'user/get-user-info-by-token',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation, useLogoutMutation, useGetUserInfoQuery } = authApi;
