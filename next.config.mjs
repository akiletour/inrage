import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-operations-string-loader',
    });

    return config;
  },

  experimental: {
    appDir: true,
  },
};

export default withContentlayer(nextConfig);
