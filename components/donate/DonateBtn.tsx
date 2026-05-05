'use client';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { setCurrScreen } from '@/state/redux/donationSlice';

const DonateBtn = ({ title, info }: { info: string; title: string }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrScreen(info));
  };

  return (
    <Button onClick={handleClick} className="w-full" size="lg">
      {title} <FaLongArrowAltRight />
    </Button>
  );
};

export default DonateBtn;
