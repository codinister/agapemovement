'use client';
import useGetQuery from '@/state/query/useGetQuery';

const Donate = () => {
  const { data, isSuccess } = useGetQuery('donate', '/donate');
  const res = isSuccess ? data.data[0] : [];



  return <div>Donate</div>;
};

export default Donate;
