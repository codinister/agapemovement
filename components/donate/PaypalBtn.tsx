'use client';

import Image from 'next/image';

const PaypalBtn = () => {
  return (
    <button className="bg-yellow-400 hover:bg-yellow-500  cursor-pointer p-4.5 flex justify-center items-center w-full text-xl">
      <Image src="/paypal2.png" alt="" width="80" height="40" />
    </button>
  );
};

export default PaypalBtn;
