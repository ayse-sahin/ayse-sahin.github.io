import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

const BlogPostShort = ({ blog }) => {
    const style = {
        backgroundImage: 'url(' + blog.imgUrl + ')'
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <div style={style} className='flex w-full rounded-t-md h-24 mb-4 justify-center bg-cover'>
            </div>
            <h3 className="text-2xl font-bold text-blue-950">{blog.title}</h3>
            <div className="mt-2 text-justify text-gray-600">
                <ReactMarkdown>
                    {blog.description}
                </ReactMarkdown></div>
            <Link to={`/blog/${blog.id}`} className="mt-4 inline-block text-indigo-500 hover:underline">Devamını Oku</Link>
        </div>
    )
}

export default BlogPostShort
