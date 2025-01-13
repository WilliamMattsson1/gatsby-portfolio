import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/about.css'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(title: { eq: "About me" }) {
                title
                content {
                    content
                }
                image {
                    gatsbyImageData(
                        width: 400
                        height: 400
                        placeholder: BLURRED
                    )
                }
            }
        }
    `)

    const { title, content, image } = data.contentfulPage

    const gatsbyImage = getImage(image)
    return (
        <section className="about-section">
            <h1 className="title">{title}</h1>
            <div className="about-content">
                {gatsbyImage && (
                    <div className="about-image">
                        <GatsbyImage
                            image={gatsbyImage}
                            alt={image.description || 'About me Image'}
                        />
                    </div>
                )}
                <div className="about-text">
                    <div className="about-paragraph">{content.content}</div>
                </div>
            </div>
        </section>
    )
}

export default About
