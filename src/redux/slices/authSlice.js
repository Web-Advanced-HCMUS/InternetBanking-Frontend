import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'api/authApi';

const initialState = {
  loggedInUser: {
    userId: null,
    accountNumber: null,
    username: null,
  },
  accessToken: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token } = payload.payload;
        const { userId, accountNumber, username } =
          payload.payload.userData;

        state.loggedInUser = {
          userId,
          accountNumber,
          username,
        };
        state.accessToken = token;
        state.isLogged = true;
      },
    );
  },
});

export const { logout, setUser, setAccessToken } =
  authSlice.actions;
export default authSlice.reducer;
