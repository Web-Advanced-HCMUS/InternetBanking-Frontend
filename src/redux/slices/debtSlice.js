import { createSlice } from '@reduxjs/toolkit';
import { debtApi } from 'api/debtApi';

const initialState = {
  accountNumber: null,
  currentBalance: null,
};

const debtSlice = createSlice({
  name: 'debt',
  initialState,
  reducers: {
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(debtApi.endpoints.getAccountInfor.matchFulfilled, (state, action) => {
      const { accountNumber, currentBalance } = action.payload.payload.accounts[0];
      state.accountNumber = accountNumber;
      state.currentBalance = currentBalance;
    });
  },
});

export const { setAccountNumber } = debtSlice.actions;
export default debtSlice.reducer;
