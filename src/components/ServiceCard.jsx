import React from 'react'

const ServiceCard = ({ title = "Placeholder Service", text = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." }) => {
    return (
        <div className="rounded-lg p-2">
            <h3 className="text-2xl">{title}</h3>
            <p className="mt-2">{text}</p>
        </div>
    )
}

export default ServiceCard
