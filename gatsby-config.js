module.exports = {

  siteMetadata: {
    siteUrl: `https://myportfoliodawsonljmain.gatsbyjs.io/`,
    title: "Dawson L.A. Johnson",
    description: "Cybersecurity and Information Design",
    author: "Dawson Johnson"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Julius Sans One`,
          `Monserrat\:200,300,400,400i,700`
        ],
        display: `swap`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
  ],
}
