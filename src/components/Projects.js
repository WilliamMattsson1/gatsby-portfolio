import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/projects.css'
import Seo from '../components/seo'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioItem {
                nodes {
                    title
                    slug
                    toolsUsed
                    thumbnail {
                        gatsbyImageData(
                            width: 300
                            height: 300
                            placeholder: BLURRED
                        )
                    }
                }
            }
            contentfulPage(slug: { eq: "projects" }) {
                title
            }
        }
    `)

    const portfolioItems = data.allContentfulPortfolioItem.nodes

    return (
        <>
            <h1 className="title">{data.contentfulPage.title}</h1>

            <section>
                <ul className="cards-container">
                    {portfolioItems.map((item) => (
                        <li key={item.slug} className="card">
                            <GatsbyImage
                                image={item.thumbnail.gatsbyImageData}
                                alt={item.thumbnail.description || item.title}
                            />
                            <div className="card-content">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">
                                    {item.toolsUsed.join(' | ')}
                                </p>
                                <div className="btn-container">
                                    <button className="card-btn btn">
                                        <Link
                                            to={item.slug}
                                            className="btn-text"
                                        >
                                            See project
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export const Head = () => <Seo title={'Projects'}></Seo>

export default ProjectsPage
