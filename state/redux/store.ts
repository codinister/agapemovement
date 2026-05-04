'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import donationSlice from '@/state/redux/donationSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
  storage,
  key: 'root',
};

const comb = combineReducers({ donate: donationSlice });
const reducer = persistReducer(config,comb);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);
