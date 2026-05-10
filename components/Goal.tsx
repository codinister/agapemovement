'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Goal = () => {
  const { data, isSuccess } = useGetQuery('goal', '/goal');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className="sm:h-100 p-12 sm:py-10 flex flex-col sm:flex-row sm:justify-center items-center bg-secondary">
      <div className="sm:w-200">
        <h4 className="text-white sm:text-center">{res?.text}</h4>
      </div>
    </div>
  );
};

export default Goal;
