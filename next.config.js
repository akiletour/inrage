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
    turbo: {
      rules: {
        '*.graphql': {
          loaders: ['graphql-operations-string-loader'],
          as: 'graphql',
        },
      },
    },
  },
}

module.exports = nextConfig
