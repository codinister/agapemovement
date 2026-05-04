'use client';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '../ui/button';

const DonateBtn = ({ title }: { title: string }) => {
  return (
    <Button className="w-full" size="lg">
      {title} <FaLongArrowAltRight />
    </Button>
  );
};

export default DonateBtn;
