import React from 'react'

const Hero = () => {
  return (
        <section className="hero-background py-56 relative">
            <div className="hero-overlay"></div>
            <div className="flex mx-8">
                <div className="flex-auto w-full md:w-2/3 container mx-8 relative z-10 text-left text-white">
                    <h1 className="text-5xl">Herkes İçin Erişilebilir Terapi</h1>
                    <p className="mt-4 text-lg">Kendi Güvenli Ortamınızda İstediğiniz Zaman Online Terapi Alın</p>
                    <div className="w-fit mt-14 text-center space-y-4 bg-blue-950 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-900"> <a href="#" className="">
                            Ücretsiz Ön Görüşme<br className='md:hidden'/>İçin Randevu Al
                        </a>
                    </div>
                </div>
                <div className="flex-auto md:w-1/3">
                </div>
            </div>
        </section>
  )
}

export default Hero
