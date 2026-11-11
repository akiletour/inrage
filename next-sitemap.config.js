module.exports = {
  siteUrl: 'https://www.inrage.fr',
  generateRobotsTxt: true,
  exclude: ['/icon.png', '/apple-icon.png', '/audit-site-internet-gratuit'],
  transform: async (_config, path) => ({
    loc: path,
    trailingSlash: path === '/',
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/monitoring', '/api/'],
      },
    ],
  },
}
