module.exports = {
  siteUrl: 'https://www.inrage.fr',
  generateRobotsTxt: true,
  exclude: ['/icon.png', '/apple-icon.png', '/audit-site-internet-gratuit'],
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
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
