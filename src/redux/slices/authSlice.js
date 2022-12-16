import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'api/authApi';
import decode from 'jwt-decode';

const initialState = {
  loggedInUser: {
    userId: null,
    accountNumber: null,
    username: null,
  },
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => initialState,
    setUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        const { token } = action.payload;
        const { userId, accountNumber, username } =
          decode(token);

        state.loggedInUser = {
          userId,
          accountNumber,
          username,
        };
        state.accessToken = token;
      },
    );
  },
});

export const { logout, setUser, setAccessToken } =
  authSlice.actions;
export const selectToken = (state) =>
  state.auth.accessToken;
export const selectLoggedInUser = (state) =>
  state.auth.loggedInUser;
export const selectAccessToken = (state) =>
  state.auth.accessToken;
export default authSlice.reducer;
