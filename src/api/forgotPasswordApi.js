import { baseApi } from './baseApi';

export const forgotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: 'user/forgot-pass',
        method: 'POST',
        body: { body },
      }),
    }),
    sendEmailRecovery: builder.mutation({
      query: (username) => ({
        url: 'user/send-mail-forgot-pass',
        method: 'POST',
        body: { ...username },
      }),
    }),
  }),
});

export const { useForgotPasswordMutation, useSendEmailRecoveryMutation } = forgotApi;
