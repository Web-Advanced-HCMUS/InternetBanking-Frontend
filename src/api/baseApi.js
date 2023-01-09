import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config/config';
import { logout, setAccessToken, setRefreshToken } from 'redux/slices/authSlice';

const RTKQuery = fetchBaseQuery({
  baseUrl: config.path.REACT_APP_SERVER_PATH,

  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const refreshToken = getState().auth.refreshToken;
    headers.set('Access-Control-Allow-Headers', '*');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', '*');
    headers.set('Access-Control-Allow-Credentials', 'true');
    if (refreshToken) {
      headers.set('Authorization', `Bearer ${refreshToken}`);
    }
    return headers;
  },
});

const RTKQueryExpired = async (args, api, extraOptions) => {
  let result = await RTKQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await RTKQuery({ url: 'user/refresh-token', method: 'POST' }, api, extraOptions);
    if (refreshResult?.data) {
      api.dispatch(setAccessToken(refreshResult.data.result));
      result = await RTKQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: RTKQueryExpired,
  tagTypes: ['AUTH'],
  endpoints: (builder) => ({}),
});
