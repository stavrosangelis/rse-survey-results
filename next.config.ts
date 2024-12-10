import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/rse-survey-results' : '',
  assetPrefix: isProd ? '/rse-survey-results' : '',
  compiler: {
    styledComponents: true,
  }
}

export default nextConfig;
