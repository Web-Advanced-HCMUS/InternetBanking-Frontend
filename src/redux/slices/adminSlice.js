import { adminApi } from 'api/adminApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  transactions: [],
  totalAmounts: {},
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setTotals: (state, action) => {
      state.totalAmounts = action.payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(adminApi.endpoints.getAllTransactions.matchFulfilled, (state, action) => {
      const { sendPayload, receivePayload } = action.payload.payload;

      state.transactions = [...sendPayload, ...receivePayload];
    });
    builder.addMatcher(adminApi.endpoints.getTotals.matchFulfilled, (state, action) => {
      const { sendPayload, receivePayload } = action.payload.payload;
      state.totalAmounts = { sendPayload, receivePayload };
    });
    builder.addMatcher(adminApi.endpoints.getTotalsByDate.matchFulfilled, (state, action) => {
      const { sendPayload, receivePayload } = action.payload.payload;
      state.totalAmounts = { sendPayload, receivePayload };
    });
    builder.addMatcher(adminApi.endpoints.getTotalsByDate.matchFulfilled, (state, action) => {
      // console.log(action.payload.payload);
      const { sendPayload, receivePayload } = action.payload.payload;
      state.totalAmounts = { sendPayload, receivePayload };
    });
  },
});
export const { setTotals } = adminSlice.actions;
export default adminSlice.reducer;
