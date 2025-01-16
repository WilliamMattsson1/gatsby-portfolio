import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/projects.css'
import Seo from '../components/seo'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulFilterTool(sort: { order: ASC }) {
                nodes {
                    name
                }
            }
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

    // State for selected tool filter
    const allProjects = data.allContentfulFilterTool.nodes[0].name
    const [selectedTool, setSelectedTool] = React.useState(allProjects)

    // Function to filter projects based on selected tool
    const filteredProjects = portfolioItems.filter((item) => {
        return (
            selectedTool === allProjects ||
            item.toolsUsed.includes(selectedTool)
        )
    })

    const tools = data.allContentfulFilterTool.nodes.map((node) => node.name)

    return (
        <>
            <h1 className="title">{data.contentfulPage.title}</h1>

            <div className="filter-buttons">
                {tools.map((tool) => (
                    <button
                        key={tool}
                        className={`filter-btn ${
                            selectedTool === tool ? 'active' : ''
                        }`}
                        onClick={() => setSelectedTool(tool)}
                    >
                        {tool}
                    </button>
                ))}
            </div>

            {/* Display filtered projects */}
            <section>
                <ul className="cards-container">
                    {filteredProjects.map((item) => (
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
                                            View project
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
