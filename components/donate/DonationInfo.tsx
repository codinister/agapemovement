'use client';

import DonationHeader from './DonationHeader';
import {} from '@/components/ui/form'
const DonationInfo = () => {
  return (
    <div>
      <DonationHeader
        title="Who's giving today?"
        progressBar="half"
        info="amount"
        showBackBtn={true}
      />
      <p className="my-5">We'll never share this information with anyone.</p>

      <div>


        
      </div>
    </div>
  );
};

export default DonationInfo;
