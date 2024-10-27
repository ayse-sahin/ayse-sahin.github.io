import React from 'react'
import CalendlyInline from '../components/CalendlyInline'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import { Helmet } from 'react-helmet'
import Background from '../assets/images/bg-green.jpg'

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
                <div className="container mx-auto px-6 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='mt-4 md:mt-20'>
                        <ContactInfo />
                    </div>
                    <div>
                        <CalendlyInline />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactPage
