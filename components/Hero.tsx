'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'motion/react';
import { opacityVariants } from '@/components/variants';
import { fadeUp, staggerChildren } from '@/variants/variants';

const Hero = () => {
  const { data, isSuccess } = useGetQuery('hero', '/hero');
  const res = isSuccess ? data.data[0] : [];

  const { data: settData, isSuccess: isComplete } = useGetQuery(
    'settings',
    '/settings',
  );
  const sett = isComplete ? settData.data[0] : '';

  return (
    <div
      style={{
        backgroundImage: `url(${res?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="sm:h-screen h-150 w-full  
      flex items-center justify-center
      z-2 relative
      before:content-['']
      before:absolute 
      before:inset-0 
      before:bg-black/60
      before:-z-2
      "
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.3,
          once: true,
        }}
        className="text-center"
      >
        <motion.div custom={0.1} variants={fadeUp}>
          <Image
            src={isComplete ? sett?.logo : '/empty.png'}
            alt="Logo"
            quality={100}
            width={300}
            height={220}
            className="mx-auto"
          />
        </motion.div>

        <motion.p custom={0.2} variants={fadeUp} className=" -mt-3  text-white">
          {res?.motto}
        </motion.p>

        <motion.div 
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.1}} custom={0.3} variants={fadeUp}>
          <Link href="/register">
            <Button className="mt-6 w-full" size="lg">
               Want to join? <FaLongArrowAltRight />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
