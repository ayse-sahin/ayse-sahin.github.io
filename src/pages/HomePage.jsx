import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Summary from '../components/Summary'
import BlogPostsShort from '../components/BlogPostsShort'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Summary />
            <Services />
            <BlogPostsShort />
        </>
    )
}

export default HomePage
