'use client';
import { setAmount, setCustAmount } from '@/state/redux/donationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
const CustomAmount = () => {
  const state = useSelector((state: any) => state.donate).custAmount;
  const dispatch = useDispatch();

  const handleChange = (val: string) => {
    dispatch(setCustAmount(Number(val)));
  };

  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className="my-6 w-full border border-gray-400 p-2"
      type="text"
      placeholder="Enter custom amount"
      defaultValue={state === 0 ? '' : state}
    />
  );
};

export default CustomAmount;
