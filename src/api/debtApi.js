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
      query: ({ body, debtID }) => ({
        url: `emp/single-transfer-history/${debtID}`,
        method: 'POST',
        body: { ...body },
      }),
    }),
  }),
});

export const { useGetAccountInforMutation, useGetAccountInforByIdMutation, useGetDebtListMutation, useCreateDebtMutation, useCancelDebtMutation, usePayDebtMutation } = debtApi;
