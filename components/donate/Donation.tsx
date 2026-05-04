'use client'
import AmountBox from './AmountBox';

const Donation = () => {
  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <h4 className="text-left text-primary">
          <span className="inline-block bg-secondary text-white p-2 ">
            Donate Now
          </span>{' '}
          to support the wellness and wholeness of society.
        </h4>
      </div>

      <div className="bg-white flex-1 min-h-60 p-10">
        <AmountBox />
      </div>
    </>
  );
};

export default Donation;
