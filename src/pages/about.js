import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About sidan</h1>
        </Layout>
    )
}

export const Head = () => <Seo title={'About'}></Seo>

export default AboutPage
