import React from 'react'
import CalendlyInline from '../components/CalendlyInline'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import { Helmet } from 'react-helmet'
import BlogCallToAction from '../components/BlogCallToAction'
import Background from '../assets/images/bg-green.jpg'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    const style = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    return (
        <>
            <Helmet>
                <title>İletişim - Ayşe Şahin</title>
            </Helmet>
            <ContactHero />
            <section style={style} className="py-16 bg-white">
                <div className="container mt-4 mx-auto px-6 max-w-4xl">
                    <ContactInfo />
                </div>
            </section>
            <BlogCallToAction />
        </>
    )
}

export default ContactPage
