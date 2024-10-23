import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="mt-4 bg-none text-white absolute w-full z-20">
            <div className="mx-auto px-6 py-4 flex justify-between items-center">
                <Link to='/' className="grow px-6 text-2xl "><h1>Psikolog <br className='md:hidden'/>Ayşe Şahin</h1></Link>
                <div className="grid grid-col-1 space-y-2 md:block md:space-x-6">
                    <Link to="/about" className="hover:text-blue-950">Hakkımda</Link>
                    <Link to="/blogs" className="hover:text-blue-950">Blog</Link>
                    <Link to="#" className="hover:text-blue-950">SSS</Link>
                    <Link to="/contact" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900">İletişim</Link>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
