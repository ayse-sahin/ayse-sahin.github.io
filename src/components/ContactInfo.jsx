import React from 'react'

const ContactInfo = () => {
    return (
        <div className='text-darker'>
            <h2 className="text-4xl font-bold">İletişim Bilgilerim</h2>
            <p className="mt-10 text-lg">
                Randevu almak için mail veya mesaj yoluyla iletişime geçebilir ya da 
                <span className='inline md:hidden'> aşağıdaki </span>
                <span className='hidden md:inline'> sağdaki </span>
                panelden randevu oluşturabilirsiniz.
            </p>
            <p className="mt-8 text-lg">
                Soru sormak veya daha fazla bilgi almak için mail veya mesaj atabilirsiniz.
            </p>

            <div className="mt-8">
                <h3 className="text-lg font-serif-override font-semibold">Email</h3>
                <p className="mt-1">psk.aysesahin@gmail.com</p>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-serif-override font-semibold">Telefon Numarası</h3>
                <p className="mt-1">+90 533 423 8357</p>
            </div>
        </div>
    )
}

export default ContactInfo
