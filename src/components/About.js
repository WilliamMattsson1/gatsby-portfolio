import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(title: { eq: "About me" }) {
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
        <section className="About-section">
            <h1 className="About-title">{title}</h1>
            <div className="About-content">
                <p>{content.content}</p>
            </div>
            {gatsbyImage && (
                <GatsbyImage
                    image={gatsbyImage}
                    alt={image.description || 'About me Image'}
                    className="About-image"
                />
            )}
        </section>
    )
}

export default About
