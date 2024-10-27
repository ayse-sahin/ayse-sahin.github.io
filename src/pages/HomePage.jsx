import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Summary from '../components/Summary'
import BlogPostsShort from '../components/BlogPostsShort'
import AboutCallToAction from '../components/AboutCallToAction'
import { Helmet } from 'react-helmet'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Ayşe Şahin - Online Terapi</title>
            </Helmet>
            <Hero />
            <Summary />
            <Services />
            <BlogPostsShort title="Blog Yazılarım" subtitle="Ruh sağlığı alanındaki güncel yazılarım"/>
            <AboutCallToAction />
        </>
    )
}

export default HomePage
