'use client';

import Amount from './Amount';
import Currency from './Currency';
import CustomAmount from './CustomAmount';
import DonateBtn from './DonateBtn';
import DonationFrequency from './DonationFrequency';
import DonationHeader from './DonationHeader';

const AmountBox = () => {
  return (
    <div>
      <DonationHeader
        title="How much would you like to donate today?"
        progressBar=""
        info=""
        showBackBtn={false}
      />
      <p className="my-5">
        All donations directly impact our organization and help us further our
        mission.
      </p>
      <DonationFrequency />
      <Currency />
      <Amount />
      <CustomAmount />
      <DonateBtn title="Donate now" info="donationInfo" />
    </div>
  );
};

export default AmountBox;
