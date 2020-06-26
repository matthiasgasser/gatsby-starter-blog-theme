module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Alternatives to Wirecard`,
    author: `Matthias Seiderer`,
    description: `This site shall be a public list containing all alternatives to the insolvent Wirecard AG.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/matthias_gasser`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
