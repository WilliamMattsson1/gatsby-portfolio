import { Link } from 'gatsby'
import * as React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>Portfolio sidan</h1>
                <Link to="/projects">Projects</Link>
            </header>

            <main>{children}</main>

            <footer>
                <p>&copy; William Mattsson {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}

export default Layout
