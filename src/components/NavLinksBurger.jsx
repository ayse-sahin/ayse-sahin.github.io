import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../burger.css'
import { Link } from 'react-router-dom'

const NavLinksBurger = () => {
    return (
        <div className='text-light md:hidden'>
            <Menu 
                right 
                itemListElement='nav' 
            >
                <Link to="/about" className="block m-4 hover:text-link-hover">Hakkımda</Link>
                <Link to="/blogs" className="block m-4 hover:text-link-hover">Blog</Link>
                <Link to="/faq" className="block m-4 hover:text-link-hover">Sık Sorulan Sorular</Link>
                <Link to="/contact" className="block m-4 hover:text-link-hover">İletişim</Link>
            </Menu>
        </div>
    )
}

export default NavLinksBurger
