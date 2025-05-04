import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/img/**', // Gambar di path /img/
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/public/**', // Gambar di path /img/
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Contoh domain lain
        pathname: '/assets/images/**', // Gambar di path /assets/images/
      },
    ],
  },
};

export default nextConfig;
