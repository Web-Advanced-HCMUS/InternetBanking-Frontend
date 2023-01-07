import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  otp: null,
  isForgot: false,
  isVerify: false,
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
    setIsForgot: (state, action) => {
      state.isForgot = true;
    },
    setIsVerify: (state, action) => {
      state.isVerify = true;
    },
  },
});

export const { setUsernameForgot, setOTPForgot, setIsForgot, setIsVerify } =
  forgotSlice.actions;
export default forgotSlice.reducer;
