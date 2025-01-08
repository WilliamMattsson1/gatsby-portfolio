import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    return (
        <>
            <title>
                {title} | {data.site.siteMetadata.title}
            </title>
            <meta
                name="description"
                content={description || data.site.siteMetadata.description}
            />
            <meta name="author" content={data.site.siteMetadata.author} />
        </>
    )
}

export default Seo
