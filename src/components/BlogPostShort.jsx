import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

const BlogPostShort = ({ blog, urlPrefix = '' }) => {
    const style = {
        backgroundImage: 'url(' + urlPrefix + blog.imgUrl + ')'
    }

    return (
        <div className="grid grid-cols-1 shadow-xl rounded-lg p-4">
            <div style={style} className='flex w-full rounded-t-md h-24 mb-4 justify-center bg-cover'> </div>
            <h3 className="text-xl font-serif-override font-bold text-dark-green">{blog.title}</h3>
            <div className="mt-2 text-justify text-dark-green">
                <ReactMarkdown>
                    {blog.description}
                </ReactMarkdown></div>
            <Link onClick={() => { window.scroll(0, 0); }} to={`/blogs/${blog.id}`} className="self-end mt-4 inline-block text-link-hover hover:underline">Devamını Oku</Link>
        </div>
    )
}

export default BlogPostShort
