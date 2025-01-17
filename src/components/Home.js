import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/home.css'

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
        <>
            <h1 className="title home-title">{title}</h1>
            <section className="home-page">
                <div className="section-img-container">
                    {gatsbyImage && (
                        <GatsbyImage
                            image={gatsbyImage}
                            alt={image.description || 'Portfolio Image'}
                            className="home-image"
                        />
                    )}
                </div>

                <div className="section-text">
                    <h2>{content.content}</h2>
                    <Link to="/contact">
                        <button className="btn">Contact me</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home
