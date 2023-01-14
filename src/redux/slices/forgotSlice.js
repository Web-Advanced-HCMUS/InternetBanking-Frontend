import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  otp: null,
};

const forgotSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    setUsernameForgot: (state, action) => {
      state.username = action.payload;
    },
    setOTPForgot: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const { setUsernameForgot, setOTPForgot } = forgotSlice.actions;
export default forgotSlice.reducer;
