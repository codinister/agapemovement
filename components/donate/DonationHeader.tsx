'use client';

import { setCurrScreen } from '@/state/redux/donationSlice';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const DonationHeader = ({
  showBackBtn,
  progressBar,
  title,
  info,
}: {
  showBackBtn: boolean;
  progressBar: string;
  title: string;
  info: string;
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrScreen(info));
  };

  return (
    <>
      <div className="flex justify-between pb-2 font-extrabold">
        <div>
          {showBackBtn && (
            <button className="cursor-pointer" onClick={handleClick}>
              <FaArrowLeft />
            </button>
          )}
        </div>
        <div>{title}</div>
      </div>

      <div className="w-full bg-gray-200">
        <div
          className={`p-1 ${progressBar === 'half' ? 'bg-secondary w-[50%]' : progressBar === 'full' ? 'bg-secondary w-full' : 'p-1'}  `}
        ></div>
      </div>
    </>
  );
};

export default DonationHeader;
