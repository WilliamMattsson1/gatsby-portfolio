exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allContentfulPortfolioItem {
                nodes {
                    slug
                }
            }
        }
    `)
    result.data.allContentfulPortfolioItem.nodes.forEach((node) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: require.resolve('./src/templates/project.js'),
            context: {
                slug: node.slug
            }
        })
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allContentfulPage {
                nodes {
                    slug
                }
            }
        }
    `)
    const pages = result.data.allContentfulPage.nodes
    pages.forEach((page) => {
        createPage({
            path: `/${page.slug}`,
            component: require.resolve('./src/templates/page.js'),
            context: {
                slug: page.slug
            }
        })
    })
}
