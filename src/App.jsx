import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import SingleBlogPage from './pages/SingleBlogPage'
import BlogsPage from './pages/BlogsPage'
import NotFound from './pages/NotFound'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomePage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/blogs' element={<BlogsPage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                    <Route path='/faq' element={<FAQPage />}/>
                    <Route path='/blogs/:id' element={<SingleBlogPage />}/>
                    <Route path='*' element={<NotFound />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
