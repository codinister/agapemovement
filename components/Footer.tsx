'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import { Button } from './ui/button';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { GrLocation } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import Connect from './connect/Connect';

const Footer = () => {
  const { data, isSuccess } = useGetQuery('settings', '/settings');
  const res = isSuccess ? data.data[0] : [];



  return (
    <>
      <footer className="bg-black px-12 py-12">
        <div className="container mx-auto">
          <div className="text-white text-center mb-6">
            <h3>Get In Touch</h3>
            <p className="mt-4 mx-auto text-white/70 sm:w-150">
              Getting in touch with Agape Movement is a meaningful step for
              anyone seeking connection, spiritual growth, or a community
              centered on love and service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 my-10">
            <div className="flex-1 text-center">
              <FiPhone className="text-black bg-primary mx-auto w-12 h-12 rounded-full flex justify-center items-center p-3" />
              <strong className="my-3 block text-primary">Phone</strong>
              <strong className="block text-white">{res?.phone1}</strong>
            </div>
            <div className="flex-1 text-center">
              <RxEnvelopeClosed className="text-black bg-primary mx-auto w-12 h-12 rounded-full flex justify-center items-center p-3" />
              <strong className="my-3 block text-primary">Email</strong>
              <strong className="block text-white">{res?.email}</strong>
            </div>
            <div className="flex-1 text-center">
              <GrLocation className="text-black bg-primary mx-auto w-12 h-12 rounded-full flex justify-center items-center p-3" />
              <strong className="my-3 block text-primary">Location</strong>
              <strong className="block text-white">{res?.location}</strong>
            </div>
            <div className="flex-1 text-center">
              <FiInstagram className="text-black bg-primary mx-auto w-12 h-12 rounded-full flex justify-center items-center p-3" />
              <strong className="my-3 block text-primary">Instagram</strong>
              <strong className="block text-white">{res?.instagram}</strong>
            </div>
          </div>

          <div className="my-6">
            <Link href="/register" className="block mx-auto ms:w-80">
              <Button className="flex mx-auto" size="lg">
                Apply for membership <FaLongArrowAltRight />
              </Button>
            </Link>
          </div>

          <div className="py-6 text-center border-t border-t-gray-700">
            <span className="text-white">
              &copy; {new Date().getUTCFullYear()} Agape Movement. All rights
              reserved. |
            </span>
            <span className="text-primary">Wellness. Wholeness.</span>
          </div>
        </div>
      </footer>
      <Connect />
    </>
  );
};

export default Footer;
