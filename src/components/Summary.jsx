import React from 'react'
import aboutImg from '../assets/images/about-img.png'
import { Link } from 'react-router-dom'

const Summary = () => {
  return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6 grid place-items-center grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-10 items-center">
                <img src={aboutImg} alt="Profile Image" className="w-1/2 lg:w-full rounded-full shadow-md"/>
                <div className='text-justify col-span-2'>
                    <h2 className="text-4xl text-blue-950 italic">Hoş Geldiniz!</h2>
                    <p className="mt-4 text-gray-600">Psikoterapi, bireylerin zihinsel ve duygusal sağlıklarını güçlendirmelerine yardımcı olan önemli bir süreçtir. Düşüncelerinizi, duygularınızı ve davranışlarınızı anlama yolculuğunuzda yanınızda olmaktan mutluluk duyuyorum. Online terapi ile dünyanın dört bir yanındaki bireylere Türkçe hizmet vererek, kolay erişim ve esneklik sağlıyorum.</p>
                    <p className="mt-4 text-gray-600">Seanslarımda, her bireyin kendine özgü bir yolculukta olduğunu kabul ederek, size destek olmayı ve ihtiyaçlarınıza en uygun terapötik yaklaşımları sunmayı hedefliyorum. Bilişsel Davranışçı Terapi, Şema Terapi ve Cinsel Terapi gibi yöntemlerle, yaşam kalitenizi artırmak ve hedeflerinize ulaşmak için sizinle birlikte çalışmak istiyorum.</p>
                    <p className="mt-4 text-gray-600">Hedefiniz ne olursa olsun, bu süreçte yanınızda olmak için buradayım.</p>
                    <Link onClick={() => { window.scroll(0, 0); }} to="/about" className="mt-6 inline-block bg-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-900">Hakkımda</Link>
                </div>
            </div>
        </section>
  )
}

export default Summary
