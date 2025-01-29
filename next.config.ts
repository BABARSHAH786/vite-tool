import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      
    ]
  }
  /* config options here */
};

export default nextConfig;
