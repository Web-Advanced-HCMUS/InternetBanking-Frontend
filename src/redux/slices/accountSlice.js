import { createSlice } from '@reduxjs/toolkit';
import { accountApi } from 'api/accountApi';

const initialState = {
  list: [],
  payment: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccountList: (state, action) => {
      state.list = action.payload;
    },
    setAccountPayment: (state, action) => {
      state.payment = action.payload;
    },
  },
});
export const { setAccountList, setAccountPayment } = accountSlice.actions;
export default accountSlice.reducer;
