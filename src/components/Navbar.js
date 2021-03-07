import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">FaQih</Link>
            </div>
            <Link to="/about">About</Link>
        </nav>
    )
}
export default Navbar;