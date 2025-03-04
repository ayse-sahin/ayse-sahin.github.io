import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
    return (
        <section className="py-16 text-darker">
            <div className="container mx-auto px-6 max-w-4xl">
                <h3 className="text-3xl font-bold text-center">Çalışma Alanlarım</h3>
                <p className="mt-6 text-lg text-center">Her bireyin yaşadığı zorlukların kendine özgü olduğunu kabul ederek, farklı alanlarda ihtiyaçlarına göre uyarlanmış bir destek sunuyorum. Çalışma alanlarım, duygusal, düşünsel ve ilişki odaklı zorlukları kapsayan çeşitli konuları içeriyor.</p>
                <ul className="mt-8 ml-8 space-y-4 text-lg list-disc">
                    <li>
                        <span className='text-xl font-bold'>Kaygı Bozuklukları (Anksiyete, Panik, Sosyal Fobi)</span>
                        <p className='my-2'>Yoğun endişe ve korku temelli zorlukların üstesinden gelmeye yönelik terapi ve danışmanlık.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Depresyon ve Duygu Durumu Bozuklukları</span>
                        <p className='my-2'>Süregelen mutsuzluk, umutsuzluk, enerji kaybı gibi belirtileri azaltmaya ve olumlu duygu durumunu yeniden inşa etmeye odaklanan destek.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Takıntılar ve Obsesif Kompulsif Bozukluk (OKB)</span>
                        <p className='my-2'>Tekrarlayan düşünce ve davranış döngülerini anlamak, kontrol altına almak ve özgürleşmek için uygulanacak yöntemler.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Travma Sonrası Stres (TSSB) ve Duygusal İyileşme</span>
                        <p className='my-2'>Travmatik deneyimlerin yarattığı olumsuz etkileri azaltarak, sağlıklı baş etme becerileri geliştirme süreci.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Özgüven, Kişisel Gelişim ve Sahtekârlık (Imposter) Sendromu</span>
                        <p className='my-2'>Kişinin kendi potansiyelini fark ederek olumlu benlik algısını güçlendirmesi, başarılarını içselleştirmesi ve özgüven kazanması.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>İlişki Danışmanlığı</span>
                        <p className='my-2'>Partner veya aile içi çatışmaları, iletişim sorunlarını ve duygusal mesafeleri gidermek için terapi desteği.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>İş ve Kariyer Stresi</span>
                        <p className='my-2'>İş-yaşam dengesini kurma, tükenmişlik (burnout) önleme ve stres yönetimi becerilerini geliştirmeye yönelik destek.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Mindfulness ve Kabul Kararlılık Terapisi (ACT)</span>
                        <p className='my-2'>“Şimdi ve burada” olma becerilerini artırarak düşünce, duygu ve davranışları daha sağlıklı bir şekilde düzenleme.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Hayat Geçişleri ve Farkındalık</span>
                        <p className='my-2'>Büyük değişimler, yeni başlangıçlar ve belirsizlik duygusu için duygusal destek almak, farkındalığı arttırmak.</p>
                    </li>
                    <li>
                        <span className='text-xl font-bold'>Göçmenlik Psikolojisi</span>
                        <p className='my-2'>Yeni bir ülkeye yerleşme dönemindeki zorlukları daha rahat aşabilmek için sosyokültürel farkları anlamak, yalnızlık hissini azaltmak ve yeni ortama sağlıklı bir şekilde uyum sağlamak için destek almak.</p>
                    </li>
                </ul>
                <p className="mt-6 text-lg">Bu alanlarda yürüttüğüm çalışmalarda, ihtiyaçlarınız ve hedefleriniz doğrultusunda size özel bir destek sağlamayı amaçlıyorum. Daha detaylı okumalar için <Link onClick={() => { window.scroll(0, 0); }} to="/blogs" className="text-link-hover">blog yazılarımı</Link> inceleyebilirsiniz.</p>
            </div>
        </section>
    )
}

export default Experience
