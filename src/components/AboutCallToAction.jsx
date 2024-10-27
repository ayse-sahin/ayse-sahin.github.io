import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../assets/images/bg-red.jpg'

const AboutCallToAction = () => {

    const style = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    return (
        <section style={style} className="py-20 px-6 text-light text-center">
            <h3 className="text-4xl">Kendinizi Anlamak ve İyileşmek İçin Bir Yolculuğa Çıkın!</h3>
            <p className="mt-4 text-lg">Hemen bir randevu oluşturun ve kendiniz için ilk adımı atın.</p>
            <Link onClick={() => { window.scroll(0, 0); }} to="/contact" className="transition-colors duration-500 mt-8 inline-block bg-light text-darker px-8 py-3 rounded-lg hover:bg-link-hover hover:text-light">Randevu Oluştur</Link>
        </section>
    )
}

export default AboutCallToAction
