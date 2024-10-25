import React from 'react'
import { Link } from 'react-router-dom'

const FAQHero = () => {
    return (
        <section className="hero-background pt-32 pb-20 relative text-white">
            <div className="hero-overlay"></div>
            <div className="container relative z-10 px-8 mx-auto text-center">
                <h1 className="text-4xl font-bold">Sık Sorulan Sorular</h1>
                <p className="mt-4 text-lg">Daha fazla soru sormak için bana mail yoluyla ulaşabilirsiniz.</p>
                <div className="w-fit mx-auto mt-8 text-center space-y-4 bg-blue-950 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-900">
                    <Link to="/contact" className="">İletişim</Link>
                </div>
            </div>
        </section>
    )
}

export default FAQHero
