import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/404.css'
import Seo from '../components/seo'

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-description">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link to="/" className="btn not-found-btn">
                    Go Home
                </Link>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title={'Not found'}></Seo>

export default NotFoundPage
