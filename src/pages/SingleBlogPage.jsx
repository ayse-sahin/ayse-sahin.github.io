import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import NotFound from './NotFound'
import BlogCallToAction from '../components/BlogCallToAction'
import AboutCallToAction from '../components/AboutCallToAction'
import BlogPostsShort from '../components/BlogPostsShort'
import Background from '../assets/images/bg-light-vertical.jpg'

const SingleBlogPage = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('../blogs.json')
            .then(response => response.json())
            .then((data) => {
                const b = data.items.find((blog) => blog.id === id ) 
                setBlog(b);
                setLoading(false);
                return b
            })
            .then((b) => {
                document.title = b.shortTitle
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <Spinner loading={loading}/>
    }

    if (!loading && !blog) {
        return <NotFound />
    }

    const style1 = {
        backgroundImage: 'url(../' + blog.imgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    }

    const style2 = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    blog.imgUrl = '../' + blog.imgUrl

    return (
        <>
            <header style={style1} className="pt-40 pb-32 text-light">
                <div className='hero-overlay'></div>
                <div className="w-full mx-auto container px-8 relative z-10 text-center">
                    <h1 className="text-4xl font-bold"><ReactMarkdown>{blog.title}</ReactMarkdown></h1>
                    <p className="mt-4 text-lg">{blog.date}</p>
                </div>
            </header>
            <main style={style2} className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <article className="blog-content prose lg:prose-xl mx-auto text-dark-green"><ReactMarkdown>{blog.content}</ReactMarkdown></article>
                </div>
            </main>
            <BlogCallToAction />
            <BlogPostsShort title="Daha Fazla" urlPrefix='../'/>
            <AboutCallToAction />
        </>
    )
}

export default SingleBlogPage
