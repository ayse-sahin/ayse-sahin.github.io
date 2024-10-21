import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services, setServices] = useState(null)

    useEffect(() => {
        fetch('src/assets/data/services.json')
        .then(response => response.json())
        .then(data => setServices(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <section className="gr-radial py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-950">Hizmetler</h2>
                <p className="mt-4 text-lg text-gray-600">Yetişkinlere Yönelik Terapi Hizmetleri</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    { services && services.items.map((service, index) => {
                        return <ServiceCard key={index} title={service.title} text={service.text}/>
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Services
