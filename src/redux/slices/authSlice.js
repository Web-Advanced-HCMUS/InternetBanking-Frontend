import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'api/authApi';

const initialState = {
  loggedInUser: {
    userId: null,
    username: null,
    role: null,
  },
  accessToken: null,
  refreshToken: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => initialState,
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      const { accessToken, refreshToken, userId, username, role } = action.payload.payload;

      state.loggedInUser = {
        userId,
        role,
        username,
      };
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLogged = true;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state, action) => {
      state.loggedInUser = {
        userId: null,
        role: null,
        username: null,
      };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLogged = false;
    });
  },
});

export const { logout, setAccessToken, setRefreshToken } = authSlice.actions;
export default authSlice.reducer;
