import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <nav aria-label="Footer navigation">
                    <ul className="nav-links footer-links">
                        <li>
                            <a href="/" aria-label="Home page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/projects" aria-label="View projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/about" aria-label="Learn more about me">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" aria-label="Contact me">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <span className="underline"></span>
                <p>
                    Copyright &#169; {new Date().getFullYear()} William
                    Mattsson.
                </p>
            </footer>
        </>
    )
}

export default Footer
