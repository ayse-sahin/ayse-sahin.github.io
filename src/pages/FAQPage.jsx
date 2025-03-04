import React from 'react'
import FAQHero from '../components/FAQHero'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions'
import BlogCallToAction from '../components/BlogCallToAction'
import { Helmet } from 'react-helmet'

const FAQPage = () => {
    return (
        <>
            <Helmet>
                <title>Sık Sorulan Sorular - Psikoterapi</title>
            </Helmet>
            <FAQHero />
            <FrequentlyAskedQuestions />
            <BlogCallToAction />
        </>
    )
}

export default FAQPage
