import React from 'react'

const TherapyApproach = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-indigo-600">Qualifications</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="text-lg text-gray-700">Ph.D. in Clinical Psychology - <span className="font-semibold">University of Istanbul</span></li>
                        <li className="text-lg text-gray-700">Certified Cognitive Behavioral Therapist (CBT)</li>
                        <li className="text-lg text-gray-700">Certified EMDR (Eye Movement Desensitization and Reprocessing) Therapist</li>
                        <li className="text-lg text-gray-700">10+ years of experience working in mental health clinics and private practice</li>
                        <li className="text-lg text-gray-700">Published numerous research papers on anxiety and trauma-related disorders</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-indigo-600">Therapeutic Approach</h3>
                    <p className="mt-4 text-lg text-gray-700">Ayşe Şahin believes in the importance of a collaborative approach, tailoring therapy to each client’s individual needs. She incorporates a variety of techniques in her practice:</p>
                    <ul className="mt-4 space-y-4">
                        <li><strong>Cognitive Behavioral Therapy (CBT)</strong> – Identifying and challenging negative thought patterns</li>
                        <li><strong>EMDR</strong> – A highly effective therapy for trauma and PTSD</li>
                        <li><strong>Mindfulness-Based Therapy</strong> – Using mindfulness techniques to reduce stress and anxiety</li>
                        <li><strong>Client-Centered Therapy</strong> – Creating a safe, empathetic environment for growth and healing</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TherapyApproach
