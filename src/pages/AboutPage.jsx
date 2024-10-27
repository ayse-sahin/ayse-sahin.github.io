import React from 'react'
import AboutHero from '../components/AboutHero'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import AboutCallToAction from '../components/AboutCallToAction'
import { Helmet } from 'react-helmet'

const AboutPage = () => {
    const style = {
        backgroundImage: 'url("src/assets/images/bg-light-vertical.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    return (
        <div style={style}>
            <Helmet>
                <title>Hakkımda - Psikolog Ayşe Şahin</title>
            </Helmet>
            <AboutHero />
            <Introduction />
            <Experience />
            <AboutCallToAction />
        </div>
    )
}

export default AboutPage
