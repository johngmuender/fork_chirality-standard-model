import type { NextConfig } from 'next';

// The project page lives under the repository name; a fork can override it with
// PAGES_BASE_PATH so the same export works for any repository name.
const basePath =
  process.env.GITHUB_PAGES === 'true'
    ? (process.env.PAGES_BASE_PATH ?? '/fork_chirality-standard-model')
    : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
};

export default nextConfig;
