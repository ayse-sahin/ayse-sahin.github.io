import React, { useEffect, useState } from 'react'
import AboutHero from '../components/AboutHero'
import BlogPostCard from '../components/BlogPostCard'

const BlogsPage = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('src/assets/data/blogs.json')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <>
            <AboutHero />
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-950">Blog Yazılarım</h2>
                    <p className="mt-4 text-gray-600">Latest insights and articles on mental health.</p>
                    <div className="mt-10 grid grid-cols-1 gap-8">
                        { posts && posts.items.map((blog, index) => {
                            return <BlogPostCard key={index} blog={blog}/>
                        }) }
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogsPage
