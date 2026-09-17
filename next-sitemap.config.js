module.exports = {
  siteUrl: 'https://www.inrage.fr',
  generateRobotsTxt: true,
  exclude: ['/icon.png', '/apple-icon.png', '/audit-site-internet-gratuit'],
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
