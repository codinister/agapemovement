'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { opacityVariants } from '@/components/variants';

const Hero = () => {
  const { data, isSuccess } = useGetQuery('hero', '/hero');
  const res = isSuccess ? data.data[0] : [];

  const { data: settData, isSuccess: isComplete } = useGetQuery(
    'settings',
    '/settings',
  );
  const sett = isComplete ? settData.data[0] : '';

  const ref = useRef(null);
  const inVeiw = useInView(ref, {
    amount: 'some',
    once: false,
  });

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
      <div ref={ref} className="text-center">
        <motion.div
          className="opacity-0"
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: 'easeIn',
            delay: 1,
          }}
        >
          <Image
            src={isComplete ? sett?.logo : '/empty.png'}
            alt="Logo"
            quality={100}
            width={300}
            height={220}
            className="mx-auto"
          />
        </motion.div>

        <motion.p
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: 'easeIn',
            delay: 2,
          }}
          className="opacity-0 -mt-3  text-white"
        >
          {res?.motto}
        </motion.p>

        <motion.div
          className="opacity-0"
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: 'easeIn',
            delay: 4,
          }}
        >
          <Link href="/register">
            <Button className="mt-6 w-full" size="lg">
              Apply for membership <FaLongArrowAltRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
