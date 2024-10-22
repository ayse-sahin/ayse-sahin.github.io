import React from 'react'
import { Link } from 'react-router-dom'

const AboutCallToAction = () => {
    return (
        <section className="py-16 bg-blue-950 px-6 text-white text-center">
            <h3 className="text-3xl font-bold">Ready to Start Your Journey to Healing?</h3>
            <p className="mt-4 text-lg">Book an appointment with Ayşe Şahin today and take the first step towards mental well-being.</p>
            <Link to="#" className="transition-colors mt-8 inline-block bg-white text-blue-950 px-8 py-3 rounded-lg hover:bg-gray-300">Book Appointment</Link>
        </section>
    )
}

export default AboutCallToAction
