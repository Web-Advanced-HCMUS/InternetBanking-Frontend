import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import forgotReducer from './slices/forgotSlice';
import { baseApi } from 'api/baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    forgot: forgotReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
  devTools: true,
});

export default store;
