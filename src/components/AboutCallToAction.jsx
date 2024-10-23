import React from 'react'
import { Link } from 'react-router-dom'

const AboutCallToAction = () => {
    return (
        <section className="py-20 bg-blue-950 px-6 text-white text-center">
            <h3 className="text-3xl italic">Kendinizi Anlamak ve İyileşmek İçin Bir Yolculuğa Çıkın!</h3>
            <p className="mt-4 text-lg">Hemen bir randevu oluşturun ve kendiniz için ilk adımı atın.</p>
            <Link onClick={() => { window.scroll(0, 0); }} to="/contact" className="transition-colors duration-500 mt-8 inline-block bg-white text-blue-950 px-8 py-3 rounded-lg hover:bg-gray-300">Randevu Oluştur</Link>
        </section>
    )
}

export default AboutCallToAction
