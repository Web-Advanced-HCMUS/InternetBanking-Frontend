import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import config from 'config/config';
import {
  setAccessToken,
  logout,
} from 'redux/slices/authSlice';

const RTKQuery = fetchBaseQuery({
  baseUrl: config.path.REACT_APP_SERVER_PATH,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    headers.set('Access-Control-Allow-Credentials', 'true');
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const RTKQueryExprired = async (
  args,
  api,
  extraOptions,
) => {
  let result = await RTKQuery(args, api, extraOptions);

  //access token expired after 7 days
  if (result?.error?.status === 401) {
    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: RTKQueryExprired,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
