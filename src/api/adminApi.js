import { baseApi } from './baseApi';

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({ query: () => '/admin/get-emp-list', providesTags: ['AUTH'] }),
    addEmployee: builder.mutation({
      query: (body) => ({ url: 'admin/create-emp-account', method: 'POST', body, providesTags: ['AUTH'] }),
    }),
    updateEmployee: builder.mutation({
      query: ({ empId, ...body }) => ({ url: `admin/update-emp/${empId}`, method: 'PUT', body: body }),
    }),
    deleteEmployee: builder.mutation({
      query: ({ _id }) => ({ url: `admin/delete-emp/${_id}`, method: 'DELETE' }),
      providesTags: ['AUTH'],
    }),
    getAllTransactions: builder.query({
      query: (fromDate, toDate) => ({ url: `/admin/for-control`, method: 'POST' }),
    }),
    getTransactions: builder.mutation({
      query: (fromDate, toDate) => ({ url: `/admin/for-control`, method: 'POST', body: { fromDate, toDate } }),
      providesTags: ['AUTH'],
    }),
    getTotals: builder.query({ query: () => ({ url: `/admin/for-control-total-amount`, method: 'POST' }) }),
    getTotalsByDate: builder.mutation({
      query: ({ fromDate, toDate }) => ({
        url: `/admin/for-control-total-amount`,
        method: 'POST',
        body: { fromDate, toDate },
      }),
    }),
  }),
});

export const {
  useGetTotalsQuery,
  useGetTotalsByDateMutation,
  useGetAllTransactionsQuery,
  useGetTransactionsMutation,
  useGetEmployeesQuery,
  useDeleteEmployeeMutation,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
} = adminApi;
