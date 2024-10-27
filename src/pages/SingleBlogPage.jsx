import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import NotFound from './NotFound'
import BlogCallToAction from '../components/BlogCallToAction'
import BlogPostsShort from '../components/BlogPostsShort'
import { Helmet } from 'react-helmet'

const SingleBlogPage = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('../blogs.json')
            .then(response => response.json())
            .then((data) => {
                setBlog(data.items.find((blog) => blog.id === id ));
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spinner loading={loading}/>
    }

    if (!loading && !blog) {
        return <NotFound />
    }

    const style1 = {
        backgroundImage: 'url(' + blog.imgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    }

    const style2 = {
        backgroundImage: 'url("../src/assets/images/bg-light-vertical.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    blog.imgUrl = '../' + blog.imgUrl

    return (
        <>
            <Helmet>
                <title>{blog.shortTitle}</title>
            </Helmet>
            <header style={style1} className="pt-40 pb-32 text-light">
                <div className='hero-overlay'></div>
                <div className="w-full container mx-8 relative z-10 text-center">
                    <h1 className="text-4xl font-bold"><ReactMarkdown>{blog.title}</ReactMarkdown></h1>
                    <p className="mt-4 font-bold text-lg">{blog.date}</p>
                </div>
            </header>
            <main style={style2} className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <article className="blog-content prose lg:prose-xl mx-auto text-dark-green"><ReactMarkdown>{blog.content}</ReactMarkdown></article>
                </div>
            </main>
            <BlogCallToAction />
            <BlogPostsShort title="Daha Fazla" urlPrefix='../'/>
        </>
    )
}

export default SingleBlogPage
