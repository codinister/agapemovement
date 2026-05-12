'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { fadeDown } from '@/variants/variants';
import { motion } from 'motion/react';
const Goal = () => {
  const { data, isSuccess } = useGetQuery('goal', '/goal');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className="sm:h-100 p-12 sm:py-10 flex flex-col sm:flex-row sm:justify-center items-center bg-secondary">
      <motion.div
        className="sm:w-200"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <h4 className="text-white sm:text-center">{res?.text}</h4>
      </motion.div>
    </div>
  );
};

export default Goal;
