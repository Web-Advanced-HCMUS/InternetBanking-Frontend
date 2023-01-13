import { baseApi } from './baseApi';

export const debtApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountInfor: builder.mutation({
      query: () => ({
        url: `user/get-user-info-by-token`,
        method: 'GET',
      }),
    }),

    getAccountInforById: builder.mutation({
      query: (userID) => ({
        url: `api/account/get-one/${userID}`,
        method: 'GET',
      }),
    }),

    getOtp: builder.mutation({
      query: (body) => ({
        url: `api/otp/get-transaction-otp`,
        method: 'POST',
        body: {...body}
      }),
    }),

    getDebtList: builder.mutation({
      query: ({ accountNumber, debtType }) => ({
        url: `api/debt/debt-list/${accountNumber}?debtType=${debtType}`,
        method: 'GET',
      }),
    }),

    createDebt: builder.mutation({
      query: (body) => ({
        url: 'api/debt/create-debt',
        method: 'POST',
        body: { ...body },
      }),
    }),

    cancelDebt: builder.mutation({
      query: ({ debtID, fromAccountNumber, content }) => ({
        url: `api/debt/request-cancel-debt/${debtID}`,
        method: 'PUT',
        body: { fromAccountNumber: fromAccountNumber, content: content },
      }),
    }),

    payDebt: builder.mutation({
      query: ({ fromAccountNumber, content, userId, otp, debtId }) => ({
        url: `api/debt/pay-debt/${debtId}`,
        method: 'POST',
        body: { fromAccountNumber, content, userId, otp },
      }),
    }),
  }),
});

export const { useGetAccountInforMutation, useGetAccountInforByIdMutation, useGetOtpMutation, useGetDebtListMutation, useCreateDebtMutation, useCancelDebtMutation, usePayDebtMutation } = debtApi;
