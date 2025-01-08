import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Index.js sidan</h1>
        </Layout>
    )
}

export const Head = () => <Seo title={'Home'}></Seo>

export default IndexPage
