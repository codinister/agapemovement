'use client';
import useGetQuery from '@/state/query/useGetQuery';
import Donation from './donate/Donation';
import { useSelector } from 'react-redux';
import DonationInfo from './donate/DonationInfo';
import Paypal from './donate/Paypal';

const Donate = () => {
  const { data, isSuccess } = useGetQuery('donate', '/donate');
  const res = isSuccess ? data.data[0] : [];
  const state = useSelector((state: any) => state.donate).currScreen;

  return (
    <div
      className="
        z-2 relative
      before:content-['']
      before:absolute 
      before:inset-0 
      before:bg-black/60
      before:-z-2
      sm:p-12 
      p-6
      flex 
      flex-col 
      sm:flex-row 
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
      <div className="flex-1 flex justify-center items-center">
        <h4 className="text-left text-primary">
          <span className="inline-block bg-secondary text-white p-2 ">
            Donate Now
          </span>{' '}
          to support the wellness and wholeness of society.
        </h4>
      </div>

      <div className="bg-white flex-1 min-h-60 p-10">
        {state === 'amount' ? (
          <Donation />
        ) : state === 'donationInfo' ? (
          <DonationInfo />
        ) : state === 'paypal' ? (
          <Paypal />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Donate;
