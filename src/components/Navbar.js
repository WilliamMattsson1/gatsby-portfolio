import { useState } from 'react'
import React from 'react'
import '../styles/navbar.css'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
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

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header>
            <nav id="desktop-nav">
                <div className="logo">
                    <Link to="/">
                        <span className="colored-span">William</span> Mattsson
                    </Link>
                </div>

                <ul className="nav-links">
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
            <nav id="hamburger-nav">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <span className="colored-span">William</span> Mattsson
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="hamburger-menu">
                    <div
                        className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                toggleMenu()
                            }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar
