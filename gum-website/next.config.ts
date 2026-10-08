import type { NextConfig } from 'next';
import { basePath } from './site-address.mjs';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
};

export default nextConfig;
