'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Mission = () => {
  const { data, isSuccess } = useGetQuery('mission', '/mission');
  const res = isSuccess ? data.data[0] : [];

  return <div>Mission</div>;
};

export default Mission;
