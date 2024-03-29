module.exports = {
  siteMetadata: {
    title: `JSCamp Romania 2021`,
    description: `A JavaScript Conference for Romania and Eastern-Europe`,
    author: `Gabi Schiopu`,
    baseUrl: 'https://jscamp.ro',
    keywords: 'event, conference, JavaScript, React, Vue, Node JS, Webpack, PWA, Accessibility, Web development,Mobile, web performance',
    // image: 'https://jscamp.ro/images/fbcover.png'
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
    `gatsby-plugin-smoothscroll`,
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-280679-13",
        }
    },

    {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'en'
        }
    },
    
    {
    resolve: `gatsby-plugin-netlify-headers`,
        options: {
            headers: {
                "/ticketsdraft": [
                    // matching headers (by type) are replaced by netlify with more specific routes
                    "Access-Control-Allow-Origin: * ",
                ],
            }                             
        }
    },

    {
        resolve: `gatsby-plugin-facebook-pixel`,
            options: {
            pixelId: "221141151409426",
        },
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
