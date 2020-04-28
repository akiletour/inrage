module.exports = {
  siteMetadata: {
    title: `inRage`,
    description: `inRage Website`,
    author: `inRage Team`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Accueil`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        crumbLabelUpdates: [
          {
            pathname: '/blog',
            crumbLabel: 'Blog',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      // these are plugin-specific options - see docs for each plugin if you want to know what the options are
      options: {
        path: `${__dirname}/src/pages`,
        name: 'page',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'post',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          removeViewBox: true,
          cleanupIDs: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
