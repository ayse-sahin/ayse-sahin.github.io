import React from 'react'
import { Link } from 'react-router-dom';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a className="link" href={`mailto:${email}${params}`}>{children}</a>;
};

const Callto = ({ phone, children }) => {
  return <a className="link" href={`tel:${phone}`}>{children}</a>;
};

const ContactInfo = () => {
    const clickedButton = () => {
    //This will trigger the conversion 
    window.gtag('config', 'AW-16912307836');
    window.gtag('event', 'conversion', {'send_to': 'AW-16912307836/oElSCMrmuqoaEPystYA_'});
    }

    return (
        <div className='text-darker'>
            <h2 className="text-4xl font-bold">İletişim Bilgilerim</h2>
            <p className="mt-10 text-lg">
                Ücretsiz ön görüşme randevusu almak için aşağıdaki butona basarak formu doldurabilirsiniz.
            </p>
            <p className="mt-4 text-lg">
                Soru sormak veya daha fazla bilgi almak için mail veya mesaj atabilirsiniz.
            </p>

            <Link onClick={clickedButton} to="https://forms.gle/qXvyS8AvQqqMdXCL6" target='_blank' className="">
                <div className="inline-block transition-colors text-lighter duration-500 w-fit mt-8 text-center space-y-4 bg-darker px-6 py-3 rounded-lg shadow-lg hover:bg-link-hover">
                    Randevu Formu
                </div>
            </Link>

            <div className="mt-8">
                <h3 className="text-lg font-serif-override font-semibold">Email</h3>
                <p className="mt-1">
                    <Mailto email="psk.aysesahin@gmail.com">
                        psk.aysesahin@gmail.com
                    </Mailto>
                </p>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-serif-override font-semibold">Telefon Numarası</h3>
                <p className="mt-1">
                    <Callto phone="+905334238357">
                        +90 533 423 8357
                    </Callto>
                </p>
            </div>
        </div>
    )
}

export default ContactInfo
