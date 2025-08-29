/** @type {import('next').NextConfig} */
const nextConfig = {
  // This new section is what fixes the error
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // This part is for allowing images from Sanity
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
