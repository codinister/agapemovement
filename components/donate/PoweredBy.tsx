'use client';
import Image from 'next/image';

const PoweredBy = () => {
  return (
    <div className="flex gap-2 justify-center">
      <p className="italic">Powered By</p> 
      <Image src="/paypal2.png" alt="" width="80" height="5" />
    </div>
  );
};

export default PoweredBy;
