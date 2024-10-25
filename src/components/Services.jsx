import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services, setServices] = useState(null)

    const style = {
        backgroundImage: 'url("src/assets/images/watercolor3.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    useEffect(() => {
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setServices(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <section style={style} className="text-blue-950 pt-24 pb-10 bg-gray-100">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl">Danışanlarım bana hangi sebeplerle gelir?</h2>
                <div className="pt-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
                    { services && services.items.map((service, index) => {
                        return <ServiceCard key={index} title={service.title} text={service.text}/>
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Services
