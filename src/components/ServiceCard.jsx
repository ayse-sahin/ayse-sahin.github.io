import React from 'react'

const ServiceCard = ({ title = "Placeholder Service", text = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-950">{title}</h3>
            <p className="mt-2 text-gray-600">{text}</p>
        </div>
    )
}

export default ServiceCard
