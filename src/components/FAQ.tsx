import React from 'react';
import { Container } from './ui/container';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
    const faqData = [
        {
            question: 'What types of projects do you work on?',
            answer: 'We specialize in building AI-powered MVPs for startups, focusing on web and mobile applications. Our expertise includes e-commerce, SaaS platforms, and data-driven solutions.',
        },
        {
            question: 'How long does it take to build an MVP?',
            answer: 'Our AI-powered processes enable us to deliver MVPs in weeks, not months. The exact timeline depends on the complexity of the project, but we prioritize speed and efficiency.',
        },
        {
            question: 'What technologies do you use?',
            answer: 'We leverage a modern tech stack including React, Node.js, Python, and various AI/ML frameworks. Our technology choices are driven by project requirements and scalability considerations.',
        },
        {
            question: 'How much does it cost to build an MVP?',
            answer: 'The cost varies depending on the scope and complexity of the project. We offer flexible pricing models and work closely with our clients to align our services with their budget and goals.',
        },
        {
            question: 'What is your approach to project management?',
            answer: 'We follow an agile methodology, ensuring transparency and collaboration throughout the development process. Our project managers keep you informed and involved at every stage.',
        },
        {
            question: 'Do you offer post-launch support?',
            answer: 'Yes, we provide comprehensive post-launch support and maintenance services to ensure your MVP continues to perform optimally. We also offer ongoing development and scaling services.',
        },
    ];
    
    return (
        <div id="faq" className="py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        Frequently asked questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
                    >
                        Everything you need to know about our services and process.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible>
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="font-semibold text-gray-900 dark:text-white">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 dark:text-gray-400">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </Container>
        </div>
    );
};

export default FAQ;
