'use client';
import { setFrequency } from '@/state/redux/donationSlice';
import { useSelector, useDispatch } from 'react-redux';
const DonationFrequency = () => {
  
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.donate).frequency

  const handleClick = (val: string) => {
    dispatch(setFrequency(val));
  };

  return (
    <div>
      <label>Choose your donation frequency</label>

      <div className="border-2 border-primary p-1 mb-6 mt-3 flex">
        <button className={`cursor-pointer p-2 flex-1 ${state === 'One Time' && 'bg-primary'} text-black`} onClick={()=> handleClick('One Time')}>One Time</button>
        <button className={`cursor-pointer ${state === 'Monthly'? 'bg-primary': ''} p-2 flex-1  text-black`} onClick={()=> handleClick('Monthly')}>Monthly</button>
      </div>
    </div>
  );
};

export default DonationFrequency;
