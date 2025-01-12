import React from 'react'
import Layout from '../components/layout'
import Home from '../components/Home'
import { graphql } from 'gatsby'
import About from '../components/About'
import Seo from '../components/seo'

const PageTemplate = ({ data }) => {
    const { title } = data.contentfulPage

    // Dynamiskt val av komponent baserat på titel
    const renderPageContent = () => {
        switch (title) {
            case 'Portfolio':
                return <Home />
            case 'About me':
                return <About />
            default:
                return (
                    <div>
                        <h2>Page Not Found</h2>
                    </div>
                )
        }
    }

    return <Layout>{renderPageContent()}</Layout>
}

export const Head = ({ data }) => (
    <Seo title={`${data.contentfulPage.title}`}></Seo>
)

export default PageTemplate

export const query = graphql`
    query ($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
        }
    }
`
