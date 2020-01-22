module.exports = {
  siteMetadata: {
    title: `JSCamp Romania 2020`,
    description: `JAMstack conferences host speakers, workshops, and more for learning to design, develop, & deploy modern web projects. 2020 Conf locations in London and SF - check it out.`,
    author: `Gabi Schiopu`
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
        background_color: `#354BF0`,
        theme_color: `#354BF0`,
        display: `minimal-ui`,
        icon: `src/images/jscamp-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: `rpycx3mvhnbr`,
            accessToken: `d2FMMwa8O-s_rxz6dcq2hWihJy8A5OiY3HCjz67siCk`
        }
    },
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
            fonts: [
            `quicksand\:300,400,700`
        ],
        display: 'swap'
        },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
