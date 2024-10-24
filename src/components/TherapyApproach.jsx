import aboutImg from '../assets/images/about-img.png'
import React from 'react'

const TherapyApproach = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className='place-content-center'>
                    <h3 className="text-4xl font-bold text-blue-950">Terapi Yaklaşımım</h3>
                    <p className="self-center mt-4 text-lg text-gray-700">Danışanlarımla iş birliği içinde çalışmanın önemine inanıyorum ve her bireyin ihtiyaçlarına göre terapiyi şekillendiriyorum. Terapi sürecinde, bilişsel davranışçı terapi (BDT), cinsel terapi, şema terapi ve kısa süreli çözüm odaklı terapi gibi yöntemleri kullanıyorum. Bu yaklaşımlar, olumsuz düşünce kalıplarını tanımak ve değiştirmek, bireyin kendini daha iyi anlamasına yardımcı olmak ve kısa sürede çözüm odaklı ilerlemeyi desteklemek üzerine odaklanıyor. Hedefim, her danışanın kendini güvende ve anlaşılmış hissettiği bir ortam sunarak iyileşme sürecine rehberlik etmek.</p>
                </div>
                <div>
                    <img src={aboutImg} alt="Profile Image" className="w-full rounded-full shadow-md"/>
                </div>
            </div>
        </section>
    )
}

export default TherapyApproach
