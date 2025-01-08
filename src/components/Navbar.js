import { useState } from 'react'
import React from 'react'
import '../styles/navbar.css'
import { Link } from 'gatsby'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">
                    <Link to="/">
                        <span className="colored-span">William</span> Mattsson
                    </Link>
                </div>

                <div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
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
                        <li>
                            <Link to="/projects" onClick={toggleMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
