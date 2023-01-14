import { baseApi } from './baseApi';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPaymentAccount: builder.mutation({
      query: (body) => ({
        url: 'emp/add-payment-account',
        method: 'POST',
        body: { ...body },
      }),
    }),

    createAccount: builder.mutation({
      query: (body) => ({
        url: 'emp/create',
        method: 'POST',
        body: { ...body },
      }),
    }),

    accountRecharge: builder.mutation({
        query: (body) => ({
          url: 'emp/customer-recharge',
          method: 'POST',
          body: { ...body },
        }),
    }),

    transactionHistory: builder.mutation({
        query: ({type, order}) => ({
          url: `emp/single-transfer-history/${type}/${order}`,
          method: 'POST',
          body: { },
        }),
    }),
  }),
});

export const { useAddPaymentAccountMutation, useCreateAccountMutation, useAccountRechargeMutation, useTransactionHistoryMutation } = employeeApi;