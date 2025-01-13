import React from 'react'
import Layout from '../components/layout'
import Home from '../components/Home'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'
import About from '../components/About'
import Contact from '../components/Contact'
import Seo from '../components/seo'

const PageTemplate = ({ data }) => {
    const { template } = data.contentfulPage
    console.log(template)

    // Dynamiskt val av komponent baserat på titel
    const renderPageContent = () => {
        switch (template) {
            case 'Home':
                return <Home />
            case 'Projects':
                return <Projects />
            case 'About':
                return <About />
            case 'Contact':
                return <Contact />
            default:
                return (
                    <div>
                        <h2>Page Not Found</h2>
                    </div>
                )
        }
    }

    console.log(data)

    return <Layout>{renderPageContent()}</Layout>
}

export const Head = ({ data }) => (
    <Seo title={`${data.contentfulPage.title}`}></Seo>
)

export default PageTemplate

export const query = graphql`
    query ($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            template
            title
        }
    }
`
