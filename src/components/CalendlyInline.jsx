import React from 'react'
import { InlineWidget } from 'react-calendly'

const CalendlyInline = () => {
    return (
        <InlineWidget
            url="https://calendly.com/psk-aysesahin/45min"
            styles={{
                height: '827px',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: '#450a0a'
            }}
            pageSettings={{
                backgroundColor: 'd5ddc9',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: '450a0a',
                textColor: '450a0a'
            }}

        />
    )
}

export default CalendlyInline
