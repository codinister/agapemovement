'use client';
import useGetQuery from '@/state/query/useGetQuery';
import Donation from './donate/Donation';
import { useSelector } from 'react-redux';

const Donate = () => {
  const { data, isSuccess } = useGetQuery('donate', '/donate');
  const res = isSuccess ? data.data[0] : [];
  const state = useSelector((state: any)=> state.donate)

  console.log(state)

  return (
    <div
      className="
        z-2 relative
      before:content-['']
      before:absolute 
      before:inset-0 
      before:bg-black/60
      before:-z-2
      p-12 
      flex 
      gap-6
      items-center 
      flex-end"
      style={{
        backgroundImage: `url(${res?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
      }}
    >
  
      <Donation />
    </div>
  );
};

export default Donate;
