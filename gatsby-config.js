require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Grounds For Coffee`,
    description: `A great place to buy Coffee.`,
    author: `Jacob`,
  },
  plugins: [
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'MzUyOWE3MjQtMDY3My00OGY1LTg1NDYtOThiY2ZhNzc2OTRiNjM3MDczOTM4NzE5Nzk2NTcz'
			}
		},
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hwvaqsuc3c9z`,        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
