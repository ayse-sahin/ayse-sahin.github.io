import React from 'react'
import aboutImg from '../assets/images/about-img.png'
import { Link } from 'react-router-dom'
import Background from '../assets/images/bg-light.jpg'

const Summary = () => {
    const style = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

  return (
        <section style={style} className="py-20 text-dark-green bg-lighter">
            <div className="container mx-auto px-6 grid place-items-center grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-10 items-center">
                <img src={aboutImg} alt="Profile Image" className="w-2/3 lg:w-full rounded-full shadow-md"/>
                <div className='text-left md:text-justify col-span-2'>
                    <h2 className="text-4xl italic">Hoş Geldiniz!</h2>
                    <p className="mt-4">Ben Ayşe, bir psikolog olarak danışanlarıma yaşamlarındaki zorlukların üstesinden gelmeleri için yardımcı oluyorum. Online terapi ile kişisel yolculuklarında danışanlarıma rehberlik ediyor, kendi içsel gücünü keşfetmelerine katkıda bulunuyorum.</p>
                    <p className="mt-4">Kaygı, depresyon, travma ve yas süreçleri, ilişkisel çatışmalar ve göçmenlik psikolojisi gibi konularda destek sağlarken güvenilir bir alan sunuyorum. Online terapi hizmetlerimle, dünyanın dört bir yanındaki bireylerin ihtiyaçlarına yanıt veriyorum.</p>
                    <p className="mt-4">Eğer siz de kendi hikayenizi güvenle paylaşabileceğiniz bir destek arıyorsanız, birlikte yol alabiliriz.</p>
                    <Link onClick={() => { window.scroll(0, 0); }} to="/about" className="transition-colors duration-500 mt-6 inline-block bg-darker text-light px-4 py-2 rounded-lg shadow-lg hover:bg-link-hover">Hakkımda</Link>
                </div>
            </div>
        </section>
  )
}

export default Summary
