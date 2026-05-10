'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import Icon from './Icon';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { opacityVariants } from './variants';

const About = () => {
  const { data, isSuccess } = useGetQuery('about', '/about');
  const res = isSuccess ? data.data[0] : [];
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 'some',
  });

  return (
    <div ref={ref} className="cont my-15">
      <motion.div
        className="text-center mb-15 w-auto sm:w-160 mx-auto opacity-0"
        variants={opacityVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
          ease: 'easeIn',
          delay: 1,
        }}
      >
        <h4 className="mb-6">{res?.title}</h4>
        <p>{res?.text}</p>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-6 ">
        {isSuccess
          ? res.cards.map(
              (v: { text: string; title: string; id: string }, k: number) => (
                <div className="p-6 shadow-xl flex-1" key={k}>
                  <Icon id={v.id} />
                  <h6 className="mb-6">{v.title}</h6>
                  <p>{v.text}</p>
                </div>
              ),
            )
          : ''}
      </div>
    </div>
  );
};

export default About;
