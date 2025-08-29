import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   globalNotFound: true
  // }
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
