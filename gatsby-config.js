module.exports = {
  siteMetadata: {
    title: `inRage`,
    description: `inRage Website`,
    author: `inRage Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    // Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'post',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: `Cobalt2`,
              extensions: [`theme-cobalt2`],
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
