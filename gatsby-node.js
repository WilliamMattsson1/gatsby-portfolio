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
