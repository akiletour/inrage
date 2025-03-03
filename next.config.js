// @ts-check
/**
 * @type {import('next').NextConfig}
 * */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
    ],
  },
  experimental: {
    turbo: {},
  },
}

module.exports = nextConfig
