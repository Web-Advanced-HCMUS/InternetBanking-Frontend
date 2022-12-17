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
  isLogged: false,
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
          action.payload;

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
