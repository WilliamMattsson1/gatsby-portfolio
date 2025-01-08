import * as React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>{children}</main>

            <footer>
                <p>&copy; William Mattsson {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}

export default Layout
