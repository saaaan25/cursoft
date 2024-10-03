import * as Accordion from "@radix-ui/react-accordion"
import PropTypes from 'prop-types';
import { useState } from "react";

const AccordionTemplate = ({list1, list2}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <Accordion.Root
        type="single" 
        collapsible 
        className="rounded-lg bg-white shadow-lg"
        >
            {list1.map((item, index) => (
                <Accordion.Item
                key={index}
                value={`item-${index}`} 
                className="border-b last:border-b-0" 
                >
                    <Accordion.Header>
                        <Accordion.Trigger className="w-full text-left py-4 px-5 font-medium bg-purple-50 
                                            hover:bg-purple-200 transition-all duration-200 flex items-center 
                                            justify-between"
                                            onClick={() => handleToggle(index)}
                                            >
                            {item}
                            <span className="text-gray-400">
                                {openIndex === index ? "▲" : "▼"}
                            </span>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-5 py-4 text-gray-700 bg-white transition-all duration-200">
                        {list2[index]}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}

AccordionTemplate.propTypes = {
    list1: PropTypes.array.isRequired,
    list2: PropTypes.array.isRequired
};
 
export default AccordionTemplate;