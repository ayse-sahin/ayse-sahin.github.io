import React, { useEffect, useState } from 'react'
import BlogPostCard from '../components/BlogPostCard'
import BlogsHero from '../components/BlogsHero'
import { Helmet } from 'react-helmet'
import Background from '../assets/images/bg-light-vertical.jpg'

const BlogsPage = () => {
    const [posts, setPosts] = useState(null)
    const style = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    useEffect(() => {
        fetch('/blogs.json')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <>
            <Helmet>
                <title>Psikoloji Blogları</title>
            </Helmet>
            <BlogsHero />
            <section style={style} className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
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
