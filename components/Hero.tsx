'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Image from 'next/image';

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
      className="h-screen w-full z-2 relative 
      flex items-center justify-center
      before:content-['']
      before:absolute 
      before:inset-0 
      before:bg-black/40
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
        <p className='text-primary'>{res?.motto}</p>
      </div>
    </div>
  );
};

export default Hero;
