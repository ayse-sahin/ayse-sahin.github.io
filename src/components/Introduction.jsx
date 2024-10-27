import aboutImg from '../assets/images/about-img.png'
import React from 'react'

const Introduction = () => {
    return (
        <section className="py-16 text-lg text-justify text-darker">
            <div className="container mx-auto px-6 grid grid-cols-1  gap-12 lg:flex">
                <div className='pt-12 lg:w-3/5'>
                    <h3 className="text-4xl font-bold mb-4">Psikolog Ayşe Şahin</h3>
                    <p className="self-center mt-6">Ege Üniversitesi Psikoloji bölümünden yüksek onur derecesiyle mezun oldum. Psikoloji alanında farklı yaş grupları ve çeşitli toplumsal konularla çalışarak geniş bir deneyim kazandım. Lisans eğitimimin bir döneminde Hollanda'da, Fontys Üniversitesi'nde eğitim gördüm ve burada üniversitemin de desteğiyle yurt dışında çalışan Türkiye vatandaşlarının adaptasyon süreciyle ilgili çalışmalar yürüttüm.</p>
                    <p className="self-center mt-6">Aile ve Sosyal Hizmetler Bakanlığı’nda staj yaparak şiddet mağduru kadın ve çocuklarla birebir çalışma deneyimi kazandım. Milli Eğitim Bakanlığı ve Ege Üniversitesi desteğiyle, lise çağındaki ergenlerin sağlıklı ve güvenli ilişkiler kurabilmesi için projeler yürüttüm. Çocuk koruma alanında aldığım eğitimlerle, çocukların güvenliğini ve psikolojik gelişimlerini desteklemeyi amaçlayan projelerde rol aldım.</p>
                    <p className="self-center mt-6">Ek olarak, okul öncesi çocukların gelişimi, davranışsal bağışıklık sistemi, sosyal baskınlık ve güzellik normları gibi konulara odaklanan üç farklı TÜBİTAK projesinde görev aldım.</p>
                    <p className="self-center mt-6">Şu anda İspanya'da, Barselona Özerk Üniversitesi’nde araştırma asistanı olarak çalışıyor ve aynı zamanda online terapi hizmeti sunuyorum. Bilişsel Davranışçı Terapi ve Cinsel Terapi alanlarında eğitim ve süpervizyon almaya devam ederek, terapilerimde bireylerin ihtiyaçlarına uygun, güvenli ve profesyonel bir destek sunmayı amaçlıyorum.</p>
                </div>
                <div className='order-first lg:order-last lg:w-2/5 lg:pt-36'>
                    <img src={aboutImg} alt="Profile Image" className="w-full rounded-lg shadow-md"/>
                </div>
            </div>
        </section>
    )
}

export default Introduction
