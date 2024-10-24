import React from 'react'
import { Link } from 'react-router-dom'
import NavLinksRegular from './NavLinksRegular'
import NavLinksBurger from './NavLinksBurger'

const Navbar = () => {
  return (
        <>
            <NavLinksBurger />
            <nav className="mt-4 bg-none text-white absolute w-full z-20">
                <div className="mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to='/' className="px-6 text-2xl "><h1>Psikolog <br className='md:hidden'/>Ayşe Şahin</h1></Link>
                    <NavLinksRegular />
                </div>
            </nav>
        </>
  )
}

export default Navbar
