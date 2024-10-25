import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Summary from '../components/Summary'
import BlogPostsShort from '../components/BlogPostsShort'
import AboutCallToAction from '../components/AboutCallToAction'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Summary />
            <Services />
            <BlogPostsShort title="Blog Yazılarım" subtitle="Ruh sağlığı alanındaki güncel yazılarım"/>
            <AboutCallToAction />
        </>
    )
}

export default HomePage
