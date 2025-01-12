import React from 'react'
import '../styles/footer.css'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem {
                nodes {
                    title
                    linkTo {
                        slug
                    }
                }
            }
        }
    `)

    const menuItems = data.allContentfulMenuItem.nodes

    return (
        <>
            <footer className="footer-container">
                <nav aria-label="Footer navigation">
                    <ul className="nav-links footer-links">
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    to={
                                        item.linkTo.slug === '/'
                                            ? '/'
                                            : `/${item.linkTo.slug}`
                                    }
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
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
