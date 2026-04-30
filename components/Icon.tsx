'use client';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealingShield } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";


const Icon = ({ id }: { id: string }) => {
  const obj: any = {
    ['66234d1e3a38']: (
      <MdOutlinePersonalInjury className="text-6xl text-primary mb-6" />
    ),
    ['50ce06c5cbdb']: (
      <RiMentalHealthLine className="text-6xl text-primary mb-6" />
    ),
    ['837be25814eb']: (
      <GiHealingShield className="text-6xl text-primary mb-6" />
    ),
    ['a88c9b8ac659']: (
      <GiGloves className="text-6xl text-primary mb-6" />
    ),
  };

  return obj[id] || '';
};

export default Icon;
