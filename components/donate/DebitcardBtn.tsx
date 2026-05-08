'use client';

import { CiCreditCard1 } from "react-icons/ci";

const DebitcardBtn = () => {
  return (
    <button className="bg-black my-3  cursor-pointer p-3 flex justify-center text-white items-center w-full text-xl">
      <div className="flex gap-2 items-center">
        <span><CiCreditCard1 className="text-4xl" /></span>
        <span>Debit or Credit Card</span>
      </div>
    </button>
  );
};

export default DebitcardBtn;
