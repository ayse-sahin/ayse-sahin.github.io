import React from 'react'
import CalendlyInline from '../components/CalendlyInline'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'

const ContactPage = () => {
    const style = {
        backgroundImage: 'url("src/assets/images/bg-green.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    return (
        <>
            <ContactHero />
            <section style={style} className="py-16 bg-white">
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
