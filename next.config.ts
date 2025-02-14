import { NextConfig } from 'next';
import withImages from 'next-images';

const nextConfig: NextConfig = {
  env: {
    customKey: 'my-value',
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  webpack(config) {
    return config;
  },
};

export default withImages(nextConfig);
