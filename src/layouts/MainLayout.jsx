import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className="theme-font bg-gray-50 leading-relaxed tracking-wide text-gray-800">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
