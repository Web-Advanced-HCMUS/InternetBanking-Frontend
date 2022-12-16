import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    getCurrentUser: builder.mutation({
      query: () => ({
        url: 'user/get-user-info-by-token',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
