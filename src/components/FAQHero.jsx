import React from 'react'
import { Link } from 'react-router-dom'

const FAQHero = () => {
    return (
        <section className="hero-background pt-40 md:pt-32 pb-20 relative text-light">
            <div className="hero-overlay"></div>
            <div className="container relative z-10 px-8 mx-auto text-center">
                <h1 className="text-5xl font-bold">Sık Sorulan Sorular</h1>
                <p className="mt-10 md:mt-4 text-lg">Daha fazla soru sormak için bana mail yoluyla ulaşabilirsiniz.</p>
                <div className="transition-colors duration-500 w-fit mx-auto mt-8 text-center space-y-4 bg-darker text-light px-6 py-3 rounded-lg shadow-lg hover:bg-link-hover">
                    <Link to="/contact" className="">İletişim</Link>
                </div>
            </div>
        </section>
    )
}

export default FAQHero
