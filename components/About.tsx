'use client';
import useGetQuery from '@/state/query/useGetQuery';
import Icon from './Icon';
import { motion } from 'motion/react';
import { opacityVariants } from './variants';
import { fadeDown, fadeUp, staggerChildren } from '@/variants/variants';

const About = () => {
  const { data, isSuccess } = useGetQuery('about', '/about');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className="cont my-15">

      <motion.div 
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.6, 
        once: true
      }}
      className="text-center mb-15 w-auto sm:w-160 mx-auto opacity-0">
        <h4 className="mb-6">{res?.title}</h4>
        <p>{res?.text}</p>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row gap-6 "
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.3, once: true}}
      >
        {isSuccess
          ? res.cards.map(
              (v: { text: string; title: string; id: string }, k: number) => (
                <motion.div 
                custom={k * 0.2}
                variants={fadeUp}
                animate="visible"
                className="p-6 shadow-xl flex-1" key={k}>
                  <Icon id={v.id} />
                  <h6 className="mb-6">{v.title}</h6>
                  <p>{v.text}</p>
                </motion.div>
              ),
            )
          : ''}
      </motion.div>
    </div>
  );
};

export default About;
