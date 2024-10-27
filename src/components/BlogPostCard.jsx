import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

const BlogPostCard = ({ blog }) => {
    const style = {
        backgroundImage: 'url(' + blog.imgUrl + ')'
    }

    return (
        <div className='grid grid-cols-1 shadow-lg rounded-lg md:shadow-none md:rounded-none p-4 md:p-0 md:grid-cols-3 md:gap-10 items-center text-left'>
            <div className="bg-white shadow-lg rounded-lg my-8">
                <div style={style} className='flex w-full rounded-md h-64 justify-center bg-cover'></div>
            </div>
            <div className='col-span-2'>
                <h3 className="text-lg md:text-2xl font-bold text-darker font-serif-override">{blog.title}</h3>
                <div className="mt-2 md:text-justify text-dark-green">
                    <ReactMarkdown>
                        {blog.description}
                    </ReactMarkdown>
                </div>
                <Link onClick={() => { window.scroll(0, 0); }} to={`/blogs/${blog.id}`} className="mt-4 inline-block text-link-hover hover:underline">Devamını Oku</Link>
            </div>
        </div>
    )
}

export default BlogPostCard
