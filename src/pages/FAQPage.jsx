import React from 'react'
import FAQHero from '../components/FAQHero'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions'
import AboutCallToAction from '../components/AboutCallToAction'
import { Helmet } from 'react-helmet'

const FAQPage = () => {
    return (
        <>
            <Helmet>
                <title>Sık Sorulan Sorular - Psikoterapi</title>
            </Helmet>
            <FAQHero />
            <FrequentlyAskedQuestions />
            <AboutCallToAction />
        </>
    )
}

export default FAQPage
