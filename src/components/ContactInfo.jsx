import React from 'react'

const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-blue-950">İletişim Bilgilerim</h2>
            <p className="mt-10 text-lg text-gray-700">
                Randevu almak için mail yoluyla iletişime geçebilir ya da 
                <span className='inline md:hidden'> aşağıdaki </span>
                <span className='hidden md:inline'> sağdaki </span>
                panelden randevu oluşturabilirsiniz.
            </p>
            <p className="mt-8 text-lg text-gray-700">
                Soru sormak veya daha fazla bilgi almak için mail atabilirsiniz.
            </p>

            <div className="mt-8">
                <h3 className="text-lg font-serif-override font-semibold text-blue-950">Email</h3>
                <p className="text-gray-700 mt-1">psk.aysesahin@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactInfo
