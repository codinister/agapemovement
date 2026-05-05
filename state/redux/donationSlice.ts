'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  frequency: string;
  amount: number;
  custAmount: number;
  totalAmnt: number;
  currScreen: string;
  info: {
    firstname: string;
    lastname: string;
    email: string;
  };
} = {
  frequency: 'One Time',
  amount: 10,
  custAmount: 0,
  totalAmnt: 0,
  currScreen: 'amount',
  info: {
    firstname: '',
    lastname: '',
    email: '',
  },
};
const donate = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setAmount(state, actions) {
      const amnt = actions.payload;
      state.amount = amnt;
      state.totalAmnt = amnt;
    },
    setCustAmount(state, actions) {
      const amnt = actions.payload;
      state.custAmount = amnt;

      if (Number(amnt) === 0) {
        state.amount = 10;
        state.totalAmnt = 10;
      } else {
        state.amount = 0;
        state.totalAmnt = amnt;
      }
    },
    setFrequency(state, actions) {
      const freq = actions.payload;
      state.frequency = freq;
    },
    setInfo(state, actions) {
      const info = actions.payload;
      state.info = info;
    },
    setCurrScreen(state, actions) {
      const cur = actions.payload;
      state.currScreen = cur;
    },
    resetState(state) {
      
        state.frequency = 'One Time'
        state.amount= state.amount
        state.custAmount= 0
        state.totalAmnt= 0
        state.currScreen = ''
        state.info = {
          firstname: '',
          lastname: '',
          email: '',
        }
      
    },
  },
});

export const {
  setAmount,
  setCustAmount,
  setFrequency,
  setInfo,
  setCurrScreen,
  resetState
} = donate.actions;

export default donate.reducer;
