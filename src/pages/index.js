import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/Home'

const IndexPage = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
}

export const Head = () => <Seo title={'Home'}></Seo>

export default IndexPage
