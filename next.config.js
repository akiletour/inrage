// @ts-check
/**
 * @type {import('next').NextConfig}
 * */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  //swcMinify: true,
  images: {
    domains: ['i2.wp.com', 'i0.wp.com', 'i1.wp.com'],
  },
  experimental: {
    turbo: {},
  },
}

module.exports = nextConfig
