module.exports = {
  siteMetadata: {
    title: `Saurabh's Portfolio`,
    author: `Saurabh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-sharp`,
    },
  ],
}
