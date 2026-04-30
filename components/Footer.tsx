'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Footer = () => {
  const { data, isSuccess } = useGetQuery('settings', '/settings');
  const res = isSuccess ? data.data[0] : [];


  return <div>Footer</div>;
};

export default Footer;
