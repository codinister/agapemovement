'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeRight } from '@/variants/variants';

const Mission = () => {
  const { data, isSuccess } = useGetQuery('mission', '/mission');
  const res = isSuccess ? data.data[0] : [];

  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="flex-1"
    >
      <Image
        alt=""
        className="rounded-2xl"
        width="1000"
        height="3000"
        src={isSuccess ? res?.image : '/empty.png'}
      />
      <h4 className="my-6">{res?.title}</h4>
      <p>{res?.text}</p>
    </motion.div>
  );
};

export default Mission;
