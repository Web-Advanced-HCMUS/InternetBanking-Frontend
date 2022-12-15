import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/userService';
import storageService from 'utils/storage';
import authService from 'services/authService';
import { auth } from 'utils/auth';

export const checkAuth = createAsyncThunk(
  'login/checkAuth',
  async () => {
    if (auth.isAuthenticated()) {
      const token = storageService.getAccessToken();
      const user = await getCurrentUser();
      return { token, user };
    }

    return { token: null, user: null };
  },
);

export const login = createAsyncThunk(
  'user/login',
  authService.login,
);

const initialState = {
  loading: true,
  error: null,
  loggedIn: false,
  loggedInUser: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, startLoading)
      .addCase(
        checkAuth.fulfilled,
        (state, { payload }) => {
          const { token = null, user = null } = payload;

          Object.assign(state, {
            loading: false,
            error: null,
            loggedIn: !!token,
            loggedInUser: user,
            token,
          });
        },
      )
      .addCase(checkAuth.rejected, receiveError);

    builder
      .addCase(login.pending, startLoading)
      .addCase(login.fulfilled, (state, { payload }) => {
        const { token, user } = payload;

        Object.assign(state, {
          loading: false,
          loggedIn: true,
          loggedInUser: user,
          token,
        });
      })
      .addCase(login.rejected, receiveError);
  },
});

function startLoading(state) {
  Object.assign(state, {
    loading: true,
    error: null,
  });
}

function receiveError(state, action) {
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectAuth = (state) => state.auth;

export const authReducer = authSlice.reducer;
