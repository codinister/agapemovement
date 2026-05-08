'use client';

import { createPortal } from 'react-dom';
import EmailForm from './EmailForm';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const EmailModal = ({ val, setVal }: { val: boolean; setVal: Function }) => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  const ModalBox = () => {
    const handleClick = () => {
      document.body.style.overflow = 'scroll';
      setVal(false);
    };

    return val ? (
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: val ? 1 : 0,
            transition: {
              ease: 'easeIn',
              duration: 0.2,
            },
          }}
          onClick={handleClick}
          className="z-50 fixed inset-0  bg-black/70"
        ></motion.div>
  
        <EmailForm />
      </>
    ) : (
      ''
    );
  };
  return pageReady
    ? createPortal(
        <ModalBox />,
        document.querySelector('body') as HTMLBodyElement,
      )
    : '';
};

export default EmailModal;
