import React, { useState, useEffect } from 'react'
import BlogPostShort from './BlogPostShort'
import { Link } from 'react-router-dom'


const BlogPostsShort = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('src/assets/data/blogs.json')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-950">Blog Yazılarım</h2>
                <p className="mt-4 text-gray-600">Ruh Sağlığı Alanındaki Güncel Yazılarım</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    { posts && posts.items.map((blog, index) => {
                        return <BlogPostShort key={index} blog={blog}/>
                    }) }
                </div>
                <Link onClick={() => { window.scroll(0, 0); }} to="/blogs" className="mt-6 inline-block bg-blue-950 text-white px-8 py-2 rounded-lg shadow-lg hover:bg-blue-900">Hepsini Gör</Link>
            </div>
        </section>
    )
}

export default BlogPostsShort
