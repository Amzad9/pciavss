import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },

  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/request-quote',
        destination: '/contact',
        statusCode: 301,
      },
      {
        source: '/services',
        destination: '/',
        statusCode: 301,
      },
    ]
  },
};

export default nextConfig;
