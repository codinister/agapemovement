import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemaTypes from './index';

const env = process.env.NEXT_PUBLIC_CLIENT_CONFIG || '';
const clientConfig = defineConfig({
  title: 'Agape Movement',
  dataset: 'production',
  projectId: env,
  basePath: '/admindashboard',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});

export default clientConfig;
