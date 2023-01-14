import { baseApi } from './baseApi';
import { setRecipientList, setStatusAPI } from 'redux/slices/recipientSlice';
import { selectLoggedInUser } from 'redux/slices/authSlice';

export const recipientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecipientList: builder.query({
      query: (userId) => ({
        url: `/api/beneficiary/get-list/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Recipient'],

      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        const currentUser = selectLoggedInUser(getState());
        const { userId } = currentUser;
        if (userId === id) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setRecipientList(data));
            dispatch(setStatusAPI({ isLoading: false }));
          } catch (err) {
            dispatch(setRecipientList([]));
            dispatch(setStatusAPI({ isLoading: false, isError: true }));
          }
        }
      },
    }),
    insertRecipient: builder.mutation({
      query: (body) => ({
        url: `api/beneficiary/insert-one`,
        method: 'POST',
        body,
      }),
      providesTags: ['Recipient'],
    }),
    updateRecipient: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/beneficiary/update-one/${id}`,
        method: 'PUT',
        body: body,
      }),
      providesTags: ['Recipient'],
    }),
    deleteRecipient: builder.mutation({
      query: (id) => ({
        url: `api/beneficiary/delete-one/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Recipient'],
    }),
  }),
});

export const { useGetRecipientListQuery, useInsertRecipientMutation, useUpdateRecipientMutation, useDeleteRecipientMutation } = recipientApi;
