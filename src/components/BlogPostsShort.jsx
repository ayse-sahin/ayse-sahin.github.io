import React, { useState, useEffect } from 'react'
import BlogPostShort from './BlogPostShort'
import { Link } from 'react-router-dom'
import Background from '../assets/images/bg-light.jpg'


const BlogPostsShort = ({ title, subtitle = '', urlPrefix = ''}) => {
    const [posts, setPosts] = useState(null)
    const style = {
        backgroundImage: 'url("' + urlPrefix + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    useEffect(() => {
        fetch(urlPrefix + '/blogs.json')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <section style={style} className="py-16 text-dark-green bg-lighter">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="mt-4">{subtitle}</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    { posts && posts.items.map((blog, index) => {
                        return <BlogPostShort key={index} blog={blog} urlPrefix={urlPrefix}/>
                    }) }
                </div>
                <Link onClick={() => { window.scroll(0, 0); }} to="/blogs" className="transition-colors duration-500 mt-16 inline-block bg-darker text-light px-8 py-2 rounded-lg shadow-lg hover:bg-link-hover">Hepsini Gör</Link>
            </div>
        </section>
    )
}

export default BlogPostsShort
