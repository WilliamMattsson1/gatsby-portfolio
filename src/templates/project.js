import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const Project = ({ data }) => {
    const { title, githubLink, projectLink, toolsUsed, image, description } =
        data.contentfulPortfolioItem
    return (
        <Layout>
            <h1>{title}</h1>
            <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.description || title}
            />
            <p>{description.description}</p>
            <p>{toolsUsed.join(' | ')}</p>
            <a href={githubLink}>Github</a>
            <a href={projectLink}>Project</a>
        </Layout>
    )
}

/* Page query */
export const query = graphql`
    query ($slug: String!) {
        contentfulPortfolioItem(slug: { eq: $slug }) {
            title
            githubLink
            projectLink
            toolsUsed
            description {
                description
            }
            image {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                description
            }
        }
    }
`

export const Head = ({ data }) => (
    <Seo title={`${data.contentfulPortfolioItem.title}`}></Seo>
)

export default Project
