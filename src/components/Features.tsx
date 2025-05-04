
import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        {
            title: 'AI-powered Applications',
            description: 'Leverage cutting-edge AI technologies to create intelligent applications that learn and adapt to user behavior, providing personalized experiences.',
            icon: '/images/AI.png',
        },
        {
            title: 'UI/UX Excellence',
            description: 'Create intuitive, engaging, and accessible user interfaces that delight users and make your product stand out from the competition.',
            icon: '/images/UI-UX.png',
        },
        {
            title: 'Growth & Analytics',
            description: 'Implement robust analytics and growth strategies to help you understand user behavior, optimize conversion, and scale your business.',
            icon: '/images/GA.png',
        },
        {
            title: 'MVP Development',
            description: 'Build and launch your minimum viable product quickly to validate your idea, gather user feedback, and iterate towards product-market fit.',
            icon: '/images/MVP.png',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        Everything you need to build your next big thing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
                    >
                        From idea to execution, we provide all the expertise and tools you need to bring your vision to life quickly and effectively.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 mb-6">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16"
                >
                    <Card className="bg-gray-900 dark:bg-gray-800 text-white overflow-hidden">
                        <CardContent className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                    Ready to transform your idea into reality?
                                </h3>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Schedule a call with our experts to discuss how we can help you build and scale your startup.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Free consultation call', 'No-obligation quotes', 'Expert advice'].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild size="lg" className="px-8 py-6 text-base">
                                    <Link to="/contact">Book a free consultation</Link>
                                </Button>
                            </div>
                            <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                                <img
                                    src="/images/53ba9584-ecb7-4e75-95ee-504dc9872b0f.png"
                                    alt="Team collaboration"
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </Container>
        </div>
    );
};

export default Features;
