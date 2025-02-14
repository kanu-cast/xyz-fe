declare module 'next-images' {
  import { NextConfig } from 'next';

  interface WithImagesOptions extends NextConfig {
    fileExtensions?: string[];
    assetPrefix?: string;
    inlineImageLimit?: number;
    [key: string]: unknown;
  }

  const withImages: (nextConfig: WithImagesOptions) => NextConfig;
  export default withImages;
}
