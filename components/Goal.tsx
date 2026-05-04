'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Goal = () => {
  const { data, isSuccess } = useGetQuery('goal', '/goal');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className="h-100 py-10 flex justify-center items-center bg-secondary">
      <div className="w-200">
        <h4 className="text-white text-center">{res?.text}</h4>
      </div>
    </div>
  );
};

export default Goal;
