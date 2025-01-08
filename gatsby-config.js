/**
 * @type {import('gatsby').GatsbyConfig}
 */

/* .env för att gömma nycklar */
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Williams Portfolio`,
        description: `This is my portfolio`,
        author: `William Mattsson`,
        siteUrl: `https://williammattsson.se`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark'
    ]
}
