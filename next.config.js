// @ts-check

/**
 * @type {import('next').NextConfig}
 * */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i2.wp.com', 'i0.wp.com', 'i1.wp.com'],
  },
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
};

module.exports = nextConfig;
