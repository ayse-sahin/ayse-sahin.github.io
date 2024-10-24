import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../burger.css'
import { Link } from 'react-router-dom'

const NavLinksBurger = () => {
    return (
        <div className='md:hidden'>
            <Menu 
                right 
                itemListElement='nav' 
            >
                <Link to="/about" className="block m-4 text-white hover:text-blue-500">Hakkımda</Link>
                <Link to="/blogs" className="block m-4 text-white hover:text-blue-500">Blog</Link>
                <Link to="/faq" className="block m-4 text-white hover:text-blue-500">SSS</Link>
                <Link to="/contact" className="block m-4 text-white hover:text-blue-500">İletişim</Link>
            </Menu>
        </div>
    )
}

export default NavLinksBurger
