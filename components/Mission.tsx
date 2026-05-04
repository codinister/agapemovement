'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';

const Mission = () => {
  const { data, isSuccess } = useGetQuery('mission', '/mission');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className='flex-1'>
      <Image
        alt=""
        className="rounded-2xl"
        width="1000"
        height="3000"
        src={isSuccess ? res?.image : '/empty.png'}
      />
      <h4 className="my-6">{res?.title}</h4>
      <p>{res?.text}</p>
    </div>
  );
};

export default Mission;
