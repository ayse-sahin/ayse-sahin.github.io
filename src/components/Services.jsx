import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import Background from '../assets/images/bg-green.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
    const [services, setServices] = useState(null)

    const style = {
        backgroundImage: 'url("' + Background + '")',
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
        <section style={style} className="text-darker pt-24 pb-14 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl">Size nasıl yardım edebilirim?</h2>
                <div className="pt-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-12">
                    { services && services.items.map((service, index) => {
                        return <ServiceCard key={index} title={service.title} text={service.text}/>
                    }) }
                </div>
                <Link onClick={() => { window.scroll(0, 0); }} to="/about" className="mt-4 text-lg inline-block text-darker underline">Daha Fazla</Link>
            </div>
        </section>
    )
}

export default Services
