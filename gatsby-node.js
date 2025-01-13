exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Skapa sidor för Portfolio Items
    const portfolioResult = await graphql(`
        query {
            allContentfulPortfolioItem {
                nodes {
                    slug
                }
            }
        }
    `)

    portfolioResult.data.allContentfulPortfolioItem.nodes.forEach((node) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: require.resolve('./src/templates/project.js'),
            context: {
                slug: node.slug
            }
        })
    })

    // Skapa sidor för Contentful Pages
    const pagesResult = await graphql(`
        query {
            allContentfulPage {
                nodes {
                    slug
                }
            }
        }
    `)

    const pages = pagesResult.data.allContentfulPage.nodes
    pages.forEach((page) => {
        if (page.slug === '/') {
            return
        }
        createPage({
            path: `/${page.slug}`,
            component: require.resolve('./src/templates/page.js'),
            context: {
                slug: page.slug
            }
        })
    })
}
