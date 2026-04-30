'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import Icon from './Icon';

const About = () => {
  const { data, isSuccess } = useGetQuery('about', '/about');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div className="cont my-15">
      <div className="text-center mb-15 w-160 mx-auto">
        <h3 className="mb-6">{res?.title}</h3>
        <p>{res?.text}</p>
      </div>
      <div className="flex gap-6 ">
        {isSuccess
          ? res.cards.map(
              (v: { text: string; title: string; id: string }, k: number) => (
                <div className="p-6 shadow-xl flex-1" key={k}>
                  <Icon id={v.id} />
                  <h6 className="mb-6">{v.title}</h6>
                  <p>{v.text}</p>
                </div>
              ),
            )
          : ''}
      </div>
    </div>
  );
};

export default About;
