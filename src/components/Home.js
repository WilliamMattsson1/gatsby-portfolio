import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(title: { eq: "Portfolio" }) {
                slug
                title
                content {
                    content
                }
                image {
                    gatsbyImageData(width: 700, placeholder: BLURRED)
                }
            }
        }
    `)

    const { title, content, image } = data.contentfulPage

    const gatsbyImage = getImage(image)

    return (
        <div className="home-page">
            <h1 className="home-title">{title}</h1>
            {gatsbyImage && (
                <GatsbyImage
                    image={gatsbyImage}
                    alt={image.description || 'Portfolio Image'}
                    className="home-image"
                />
            )}
            {
                <div>
                    <p>{content.content}</p>
                </div>
            }
        </div>
    )
}

export default Home
