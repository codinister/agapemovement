'use client';

import Amount from './Amount';
import Currency from './Currency';
import CustomAmount from './CustomAmount';
import DonateBtn from './DonateBtn';
import DonationFrequency from './DonationFrequency';

const AmountBox = () => {
  return (
    <div>
      <p className="pb-2 font-extrabold border-b-3 border-b-gray-200">
        How much would you like to donate today?
      </p>

      <p className="my-5">
        All donations directly impact our organization and help us further our
        mission.
      </p>
      <DonationFrequency />
      <Currency />
      <Amount />
      <CustomAmount />
      <DonateBtn title="Donate now" />
    </div>
  );
};

export default AmountBox;
