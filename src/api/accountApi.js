import { baseApi } from './baseApi';
import { selectLoggedInUser } from 'redux/slices/authSlice';
import { setAccountList, setAccountPayment } from 'redux/slices/accountSlice';

export const accountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountList: builder.query({
      query: (userId) => ({
        url: `api/account/get-list/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Accounts'],

      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        const currentUser = selectLoggedInUser(getState());
        const { userId } = currentUser;
        if (userId === id) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setAccountList(data));
          } catch (err) {
            dispatch(setAccountList([]));
          }
        }
      },
    }),
    getAccountPayment: builder.query({
      query: (userId) => ({
        url: `api/account/get-payment/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Accounts'],

      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        const currentUser = selectLoggedInUser(getState());
        const { userId } = currentUser;
        if (userId === id) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setAccountPayment(data));
          } catch (err) {
            console.log(err);
            dispatch(setAccountPayment([]));
          }
        }
      },
    }),

    getAccountByAccountNumber: builder.query({
      query: (accountNumber) => ({
        url: `api/account/get-one/${accountNumber}`,
        method: 'GET',
      }),
      providesTags: ['Accounts'],
    }),

    getExtAccountByAccountNumber: builder.query({
      query: (accountNumber) => ({
        url: `api/interbank/get-account-external/${accountNumber}?bankCode=SWEN`,
        method: 'GET',
      }),
      providesTags: ['Accounts'],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: 'user/change-pass',
        method: 'PUT',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAccountListQuery,
  useGetAccountPaymentQuery,
  useGetAccountByAccountNumberQuery,
  useLazyGetAccountByAccountNumberQuery,
  useLazyGetExtAccountByAccountNumberQuery,
  useChangePasswordMutation,
} = accountApi;
