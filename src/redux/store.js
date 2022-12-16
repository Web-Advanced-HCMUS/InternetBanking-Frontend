import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { baseApi } from 'api/baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
  devTools: true,
});

export default store;
