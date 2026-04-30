'use client'

import { useQuery } from '@tanstack/react-query';
import fetch from './fetch';

const useGetQuery = (url: string, key: string) => {
  const fn = () => fetch({ url });

  const res = useQuery({ queryFn: fn, queryKey: [key] });

  return res;
};

export default useGetQuery;
