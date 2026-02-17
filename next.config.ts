import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
