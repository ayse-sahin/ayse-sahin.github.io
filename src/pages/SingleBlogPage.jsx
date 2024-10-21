import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const SingleBlogPage = () => {
    const [blog, setBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('../src/assets/data/blogs.json')
        .then(response => response.json())
        .then(data => setBlog(data.items.find((blog) => blog.id === id )))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    if (!blog) {
        return <h1 className='text-7xl text-center py-64'>404 Not Found</h1>
    }

    const style = {
        backgroundImage: 'url(' + blog.imgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    }

    return (
        <>
            <header style={style} className="pt-40 pb-32 text-white mb-4">
                <div className='hero-overlay'></div>
                <div className="w-full container mx-8 relative z-10 text-center text-white">
                    <h1 className="text-4xl font-bold"><ReactMarkdown>{blog.title}</ReactMarkdown></h1>
                    <p className="mt-4 font-bold text-lg">Published on {blog.date} by {blog.author}</p>
                </div>
            </header>
            <main className="py-8 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <article className="blog-content prose lg:prose-xl mx-auto text-gray-700"><ReactMarkdown>{blog.content}</ReactMarkdown></article>
                </div>
            </main>
        </>
    )
}

export default SingleBlogPage
