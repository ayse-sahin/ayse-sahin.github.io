import React from 'react'
import { Link } from 'react-router-dom'

const NavLinksRegular = () => {
    return (
        <div className="hidden md:block space-x-6">
            <Link to="/about" className="hover:text-blue-950">Hakkımda</Link>
            <Link to="/blogs" className="hover:text-blue-950">Blog</Link>
            <Link to="/faq" className="hover:text-blue-950">SSS</Link>
            <Link to="/contact" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900">İletişim</Link>
        </div>
    )
}

export default NavLinksRegular
