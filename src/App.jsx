import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import SingleBlogPage from './pages/SingleBlogPage'
import BlogsPage from './pages/BlogsPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/blogs' element={<BlogsPage />}/>
            <Route path='/blogs/:id' element={<SingleBlogPage />}/>
        </Route>
    )
)
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
