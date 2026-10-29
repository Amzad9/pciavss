import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
