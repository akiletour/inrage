import createMDX from '@next/mdx'
import { NextConfig } from 'next'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/portfolio/prestashop',
        destination: '/portfolio/e-commerce',
        permanent: true,
      },
      {
        source: '/portfolio/prestashop/:slug*',
        destination: '/portfolio/e-commerce/:slug*',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
})

export default withMDX(nextConfig)
