import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CLIENT_CONFIG
  },
});

const fetch = ({ ...options }) => {
  return client(options)
    .then((data) => data)
    .catch((err) => err);
};

export default fetch;