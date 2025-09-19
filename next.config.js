/** @type {import('next').NextConfig} */
const nextConfig = {
  // NO output property at all - let Next.js use default server-side rendering
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;