import React from 'react'
import aboutImg from '../assets/images/about-img.png'
import { Link } from 'react-router-dom'

const BlogCallToAction = () => {
    return (
        <section className="py-20 bg-blue-950 text-white">
            <div className="container mx-auto px-6 grid place-items-center grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-10 items-center">
                <img src={aboutImg} alt="Profile Image" className="w-1/2 lg:w-full rounded-full shadow-md"/>
                <div className='text-justify col-span-2'>
                    <h2 className="text-4xl text-white italic">Merhaba!</h2>
                    <p className="mt-4">Ben Ayşe, bir psikolog olarak danışanlarıma yaşamlarındaki zorlukların üstesinden gelmeleri için yardımcı oluyorum. Online terapi ile kişisel yolculuklarında danışanlarıma rehberlik ediyor, kendi içsel gücünü keşfetmelerine katkıda bulunuyorum.</p>
                    <p className="mt-4">Kaygı, travma ve yas süreçleri, ilişkisel çatışmalar, cinsel sorunlar ve göçmenlik psikolojisi gibi konularda destek sağlarken güvenilir bir alan sunuyorum. Online terapi hizmetlerimle, dünyanın dört bir yanındaki bireylerin ihtiyaçlarına yanıt veriyorum.</p>
                    <p className="mt-4">Eğer siz de kendi hikayenizi güvenle paylaşabileceğiniz bir destek arıyorsanız, birlikte yol alabiliriz.</p>
                    <Link onClick={() => { window.scroll(0, 0); }} to="/about" className="mt-6 inline-block bg-white text-blue-950 px-4 py-2 rounded-lg shadow-lg hover:bg-slate-300">Hakkımda</Link>
                </div>
            </div>
        </section>
    )
}

export default BlogCallToAction
