import React, { useState } from 'react';
import { Container } from './ui/container';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alex Johnson',
            title: 'CEO, Tech Innovations Inc.',
            quote: 'Zenith Studio transformed our vision into a stunning reality. Their AI-powered solutions and beautiful design exceeded our expectations.',
            rating: 5,
            image: '/images/08b48e64-0210-4f80-b81b-942a339622a9.png',
        },
        {
            name: 'Sarah Williams',
            title: 'Founder, EcoLife Organics',
            quote: 'The MVP developed by Zenith Studio helped us validate our idea quickly and efficiently. Their team is incredibly talented and dedicated.',
            rating: 4,
            image: '/images/109e990b-ee2c-458e-8383-158a22aa6437.png',
        },
        {
            name: 'Michael Brown',
            title: 'CTO, FutureTech Solutions',
            quote: 'Zenith Studio delivered an exceptional product with a focus on user experience and cutting-edge technology. Highly recommended!',
            rating: 5,
            image: '/images/08b48e64-0210-4f80-b81b-942a339622a9.png',
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    
    return (
        <div id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        What our clients are saying
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
                    >
                        We pride ourselves on delivering exceptional results and building long-lasting relationships with our clients.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 relative"
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-20 rounded-2xl blur-lg"></div>
                        <div className="px-8 py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg relative">
                            <div className="flex items-center justify-center mb-6">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                                    <Star key={index} className="h-5 w-5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-xl italic text-gray-700 dark:text-gray-300 text-center">
                                "{testimonials[currentTestimonial].quote}"
                            </p>
                            <div className="mt-6 text-center">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {testimonials[currentTestimonial].name}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {testimonials[currentTestimonial].title}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                        <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default Testimonials;
