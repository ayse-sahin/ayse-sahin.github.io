import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../src/accordion.css'


import React from 'react'

const FrequentlyAskedQuestions = () => {
    const items = [
        {
            "uuid": "f5ff8d5a-c696-4208-aac4-34d233849eb3",
            "heading": "Test 1",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        {
            "uuid": "e2f07039-4012-4c3e-aa96-4d1b4af1fbef",
            "heading": "Test 2",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        {
            "uuid": "619f8369-097d-4b7e-8722-2a8a031f892d",
            "heading": "Test 3",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }
    ]
    return (
        <div className='container mx-auto'>
            <Accordion allowZeroExpanded>
                {items.map((item) => (
                    <AccordionItem key={item.uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {item.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {item.content}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FrequentlyAskedQuestions
