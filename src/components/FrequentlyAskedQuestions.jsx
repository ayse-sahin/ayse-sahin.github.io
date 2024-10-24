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


import React from 'react'

const FrequentlyAskedQuestions = () => {
    return (
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
                            <ReactMarkdown>
                            {item.content}
                            </ReactMarkdown>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FrequentlyAskedQuestions
