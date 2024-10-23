import React from 'react'
import CalendlyInline from '../components/CalendlyInline'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'

const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='mt-20'>
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
