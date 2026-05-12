'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { fadeLeft } from '@/variants/variants';
import Image from 'next/image';
import {motion} from 'motion/react'

const Service = () => {
  const { data, isSuccess } = useGetQuery('service', '/service');
  const res = isSuccess ? data.data[0] : [];

  return (
    <motion.div 
    variants={fadeLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.3, once: true}}
    
    
    className="flex-1">
      <h4>{res?.title}</h4>
      <p className="my-6">{res?.text}</p>
      <Image
        alt=""
        className="rounded-2xl"
        width="1000"
        height="3000"
        src={isSuccess ? res?.image : '/empty.png'}
      />
    </motion.div>
  );
};

export default Service;
