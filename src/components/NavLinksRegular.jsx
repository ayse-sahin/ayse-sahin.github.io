import React from 'react'
import { Link } from 'react-router-dom'

const NavLinksRegular = () => {
    return (
        <div className="hidden md:block space-x-6">
            <Link to="/about" className="transition-colors duration-500 hover:text-link-hover">Hakkımda</Link>
            <Link to="/blogs" className="transition-colors duration-500 hover:text-link-hover">Blog</Link>
            <Link to="/faq" className="transition-colors duration-500 hover:text-link-hover">SSS</Link>
            <Link to="/contact" className="transition-colors duration-500 bg-darker text-light px-4 py-2 rounded-lg hover:bg-link-hover">İletişim</Link>
        </div>
    )
}

export default NavLinksRegular
