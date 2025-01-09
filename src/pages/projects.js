import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/projects.css'
import Seo from '../components/seo'

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
                            width: 500
                            height: 500
                            placeholder: BLURRED
                            layout: CONSTRAINED
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
            <p className="section-text-p1">
                See <span className="colored-span">All</span>
            </p>
            <h2 className="title">My projects</h2>

            <ul>
                {portfolioItems.map((item) => (
                    <li key={item.slug}>
                        <GatsbyImage
                            image={item.thumbnail.gatsbyImageData}
                            alt={item.image.description || item.title}
                        />
                        <h2>{item.title}</h2>
                        <p>{item.toolsUsed.join(' | ')}</p>
                        <button>
                            <Link to={item.slug}>See more</Link>
                        </button>
                        <a
                            href={item.githubLink}
                            aria-label={`View ${item.title} on GitHub`}
                        >
                            Github
                        </a>
                        <a
                            href={item.projectLink}
                            aria-label={`View ${item.title} project details`}
                        >
                            View Project
                        </a>
                        <GatsbyImage
                            image={item.image.gatsbyImageData}
                            alt={item.image.description || item.title}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const Head = () => <Seo title={'Projects'}></Seo>

export default ProjectsPage
