import { createClient } from 'next-sanity';

const env = process.env.SERVER_CONFIG;
const serverConfig = createClient({
  dataset: 'production',
  projectId: env,
  apiVersion: '2026-04-22',
  useCdn: true,
});

export default serverConfig;
