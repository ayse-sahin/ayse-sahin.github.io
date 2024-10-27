import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../burger.css'
import { Link } from 'react-router-dom'

const NavLinksBurger = () => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <div className='text-light md:hidden'>
            <Menu 
                right 
                itemListElement='nav' 
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
            >
                <Link to="/" onClick={closeSideBar} className="block m-4 hover:text-link-hover">Ana Sayfa</Link>
                <Link to="/about" onClick={closeSideBar} className="block m-4 hover:text-link-hover">Hakkımda</Link>
                <Link to="/blogs" onClick={closeSideBar} className="block m-4 hover:text-link-hover">Blog</Link>
                <Link to="/faq" onClick={closeSideBar} className="block m-4 hover:text-link-hover">Sık Sorulan Sorular</Link>
                <Link to="/contact" onClick={closeSideBar} className="block m-4 hover:text-link-hover">İletişim</Link>
            </Menu>
        </div>
    )
}

export default NavLinksBurger
