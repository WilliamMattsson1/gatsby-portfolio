import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/contact.css'

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
        <>
            <h1 className="title">{title}</h1>
            <section id="contact">
                <p className="about-details-p1 contact-text">
                    {content.content}
                </p>

                <div className="contacts-container">
                    <div className="contact-info-container">
                        <FaEnvelope className="icon contact-icon email-icon" />
                        <p>
                            <a
                                className="contact-link"
                                href={`mailto:${email}`}
                            >
                                Email
                            </a>
                        </p>
                    </div>
                    <div className="contact-info-container">
                        <FaLinkedin className="icon contact-icon" />
                        <p>
                            <a
                                className="contact-link"
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                    <div className="contact-info-container">
                        <FaGithub className="icon contact-icon" />
                        <p>
                            <a
                                className="contact-link"
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
