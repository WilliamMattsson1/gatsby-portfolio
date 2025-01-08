import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioItem {
                nodes {
                    title
                    githubLink
                    projectLink
                    slug
                    toolsUsed
                    image {
                        gatsbyImageData(
                            width: 300
                            height: 300
                            placeholder: BLURRED
                        )
                        description
                    }
                    thumbnail {
                        gatsbyImageData(
                            width: 150
                            height: 150
                            placeholder: BLURRED
                        )
                    }
                }
            }
        }
    `)

    const portfolioItems = data.allContentfulPortfolioItem.nodes

    return (
        <Layout>
            <h1>Projects</h1>
            <ul>
                {portfolioItems.map((item) => (
                    <li key={item.slug}>
                        <h2>{item.title}</h2>
                        <GatsbyImage
                            image={item.image.gatsbyImageData}
                            alt={item.image.description || item.title}
                        />
                        <p>{item.toolsUsed.join(' | ')}</p>
                        <Link
                            to={item.githubLink}
                            aria-label={`View ${item.title} on GitHub`}
                        >
                            Github
                        </Link>
                        <Link
                            to={item.projectLink}
                            aria-label={`View ${item.title} project details`}
                        >
                            View Project
                        </Link>
                        <GatsbyImage
                            image={item.thumbnail.gatsbyImageData}
                            alt={item.image.description || item.title}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default ProjectsPage
