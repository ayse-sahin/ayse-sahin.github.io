import React, { useState, useEffect } from 'react'
import BlogPostShort from './BlogPostShort'


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
                <h2 className="text-3xl font-bold text-blue-950">Blog Yazıları</h2>
                <p className="mt-4 text-gray-600">Latest insights and articles on mental health.</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    { posts && posts.items.map((blog, index) => {
                        return <BlogPostShort key={index} blog={blog}/>
                    }) }
                </div>
            </div>
        </section>
    )
}

export default BlogPostsShort
