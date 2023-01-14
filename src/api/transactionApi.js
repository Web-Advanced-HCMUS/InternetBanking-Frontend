import { baseApi } from './baseApi';

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    internalTransfer: builder.mutation({
      query: (body) => ({
        url: `api/transaction/internal-transfer`,
        method: 'POST',
        body: body,
      }),
    }),
    externalTransfer: builder.mutation({
      query: (body) => ({
        url: `/api/interbank/rsa-transfer`,
        method: 'POST',
        body: body,
      }),
    }),
    confirmTransOtp: builder.mutation({
      query: (body) => ({
        url: `/api/otp/get-transaction-otp`,
        method: 'POST',
        body: body,
      }),
    }),
    getAllTransUser: builder.mutation({
      query: (accountNumber) => ({
        url: `/api/transaction/get-transactions/${accountNumber}`,
        method: 'GET',
      }),
    }),
    getBankList: builder.query({
      query: () => ({
        url: `api/interbank/get-bank-list`,
        method: 'GET',
      }),
    }),
    getTransactionOfAccountReceive: builder.query({
      query: ({ accountNumber, type }) => ({
        url: `api/transaction/get-transactions/${accountNumber}?type=${type}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useInternalTransferMutation,
  useExternalTransferMutation,
  useConfirmTransOtpMutation,
  useGetAllTransUserMutation,
  useGetBankListQuery,
  useGetTransactionOfAccountReceiveQuery,
} = transactionApi;
