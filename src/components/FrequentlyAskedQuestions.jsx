import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../accordion.css'
import faq from '../assets/data/faq.json'
import ReactMarkdown from 'react-markdown'
import Background from '../assets/images/bg-paper.jpg'


import React from 'react'

const FrequentlyAskedQuestions = () => {
    const style = {
        backgroundImage: 'url("' + Background + '")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        position: 'relative'
    } 

    return (
        <section style={style}>
        <div className='container mx-auto py-10 px-6 md:px-20'>
            <Accordion allowZeroExpanded>
                {faq.items.map((item) => (
                    <AccordionItem key={item.uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {item.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ReactMarkdown className="faq-answer">
                            {item.content}
                            </ReactMarkdown>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        </section>
    )
}

export default FrequentlyAskedQuestions
