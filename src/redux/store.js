import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import forgotReducer from './slices/forgotSlice';
import adminReducer from './slices/adminSlice';
import { baseApi } from 'api/baseApi';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const reducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  forgot: forgotReducer,
  admin: adminReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  devTools: true,
});

export let persistor = persistStore(store);
