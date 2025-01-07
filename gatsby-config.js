/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Gatsby Portfolio`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'accessToken',
                spaceId: ''
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark'
    ]
}
