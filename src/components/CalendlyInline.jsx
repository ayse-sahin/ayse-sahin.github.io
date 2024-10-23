import React from 'react'
import { InlineWidget } from 'react-calendly'

const CalendlyInline = () => {
    return (
        <InlineWidget
            url="https://calendly.com/psk-aysesahin/45min"
            styles={{
              height: '825px'
            }}
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '000000'
            }}

        />
    )
}

export default CalendlyInline
