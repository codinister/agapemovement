'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {
  const { data, isSuccess } = useGetQuery('hero', '/hero');
  const res = isSuccess ? data.data[0] : [];

  const { data: settData, isSuccess: isComplete } = useGetQuery(
    'settings',
    '/settings',
  );
  const sett = isComplete ? settData.data[0] : '';

  return (
    <div
      style={{
        backgroundImage: `url(${res?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="h-screen w-full  
      flex items-center justify-center
      z-2 relative
      before:content-['']
      before:absolute 
      before:inset-0 
      before:bg-black/60
      before:-z-2
      "
    >
      <div className="text-center">
        <Image
          src={isComplete ? sett?.logo : '/empty.png'}
          alt="Logo"
          quality={100}
          width={300}
          height={220}
          className="mx-auto"
        />
        <p className="-mt-3  text-white">{res?.motto}</p>

        <Button className="mt-6 w-full" size="lg">
          Apply for membership <FaLongArrowAltRight />{' '}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
