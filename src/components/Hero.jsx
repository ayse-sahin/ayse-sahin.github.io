import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
        <section className="hero-background pt-36 pb-16 md:py-56 relative">
            <div className="hero-overlay"></div>
            <div className="flex mx-8">
                <div className="flex-auto w-full md:w-2/3 container md:mx-8 relative z-10 text-left text-light">
                    <h1 className="text-5xl">Hayatınızdaki Düğümleri Çözmeye Başlayın</h1>
                    <p className="mt-4 text-lg">Kendi Güvenli Ortamınızda İstediğiniz Zaman Online Terapi Alın</p>
                    <Link to="/contact" className="">
                        <div className="inline-block transition-colors duration-500 w-fit mt-14 text-center space-y-4 bg-darker px-6 py-3 rounded-lg shadow-lg hover:bg-link-hover">
                            Randevu Al
                        </div>
                    </Link>
                </div>
                <div className="flex-auto md:w-1/3">
                </div>
            </div>
        </section>
  )
}

export default Hero
