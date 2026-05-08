'use client';

import Image from 'next/image';
import DonationHeader from './DonationHeader';
import { useSelector } from 'react-redux';
import PaypalBtn from './PaypalBtn';
import DebitcardBtn from './DebitcardBtn';
import PoweredBy from './PoweredBy';
const Paypal = () => {
  const state = useSelector((state: any) => state.donate);

  return (
    <div>
      <DonationHeader
        title="Payment Details"
        progressBar="full"
        info="donationInfo"
        showBackBtn={true}
      />
      <p className="my-5">How would you like to pay for your donation?</p>

      <div>
        <div className="bg-gray-100 p-4">
          <p className="font-extrabold">Donation Summary</p>

          <div className="flex justify-between mt-4">
            <div>Payment Amount</div>
            <div>${state.totalAmnt}.00</div>
          </div>

          <div className="flex justify-between mt-4">
            <div>Giving Frequency</div>
            <div>{state.frequency}</div>
          </div>

          <div className="flex justify-between mt-4">
            <div>Donation Total</div>
            <div>${state.totalAmnt}.00</div>
          </div>
        </div>

        <div className="border border-primary p-4 flex justify-between mt-6">
          <p>Donate with paypal</p>{' '}
          <Image src="/paypal.png" alt="" width="20" height="40" />
        </div>

        <div className="border border-primary p-4  mt-3">
          <PaypalBtn />
          <DebitcardBtn />
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Paypal;
