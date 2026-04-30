'use client'

import clientConfig from '@/state/sanity/client.config';
import { NextStudio } from 'next-sanity/studio';
const AdminDashbboard = () => {
  return <NextStudio config={clientConfig} />;
};

export default AdminDashbboard;
