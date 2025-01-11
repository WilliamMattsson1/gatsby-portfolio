import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/project.css'

const Project = ({ data }) => {
    const { title, githubLink, projectLink, toolsUsed, image, description } =
        data.contentfulPortfolioItem
    return (
        <Layout>
            <div className="project-container">
                <h1 className="project-title">{title}</h1>
                <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={image.description || title}
                    className="project-image"
                />
                <p className="project-description">{description.description}</p>
                <p className="project-tools">{toolsUsed.join(' | ')}</p>
                <div className="project-links">
                    <a
                        href={githubLink}
                        className="btn project-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        href={projectLink}
                        className="btn project-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project
                    </a>
                </div>
            </div>
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
