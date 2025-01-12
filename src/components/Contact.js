import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(title: { eq: "Contact" }) {
                title
                content {
                    content
                }
                email
                linkedin
                github
            }
        }
    `)

    const { title, content, email, linkedin, github } = data.contentfulPage

    return (
        <section>
            <h1>{title}</h1>
            <p>{content.content}</p>
            <ul>
                <li>
                    <a href={`mailto:${email}`}>
                        <FaEnvelope style={{ marginRight: '0.5rem' }} />
                        Email
                    </a>
                </li>
                <li>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin style={{ marginRight: '0.5rem' }} />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ marginRight: '0.5rem' }} />
                        GitHub
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default About
