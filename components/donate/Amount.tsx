'use client';

import { setAmount } from '@/state/redux/donationSlice';
import { useDispatch, useSelector } from 'react-redux';

const Amount = () => {
  const data = [10, 25, 50, 100, 250, 500];

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.donate).amount;

  const handleClick = (val: number) => {
    dispatch(setAmount(val));
  };

  return (
    <div className="flex gap-3 mt-2 flex-wrap">
      {data.map((v, k) => (
        <button
          onClick={() => handleClick(v)}
          className={`${state === v && 'bg-primary'}
          cursor-pointer
          text-black basis-40 grow rounded-xl p-2 border border-gray-400`}
          key={k}
        >
          ${v}.00
        </button>
      ))}
    </div>
  );
};

export default Amount;
