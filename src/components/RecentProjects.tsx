
import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const RecentProjects = () => {
    const projects = [
        {
            title: 'AI-Driven Healthcare Platform',
            description: 'Revolutionizing patient care with AI-powered diagnostics and personalized treatment plans.',
            image: '/images/08b48e64-0210-4f80-b81b-942a339622a9.png',
            link: '/projects/healthcare-ai',
        },
        {
            title: 'Sustainable Energy Solutions',
            description: 'Developing innovative solutions for renewable energy generation and distribution.',
            image: '/images/109e990b-ee2c-458e-8383-158a22aa6437.png',
            link: '/projects/sustainable-energy',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div id="projects" className="py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        Our Recent Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
                    >
                        We partner with forward-thinking organizations to develop innovative solutions that drive meaningful impact.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-300 flex items-center justify-center">
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300">{project.description}</p>
                                    <Button asChild variant="outline" size="sm" className="mt-4">
                                        <Link to={project.link}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Button asChild size="lg" className="px-8 py-6 text-base">
                        <Link to="/projects">View All Projects</Link>
                    </Button>
                </motion.div>
            </Container>
        </div>
    );
};

export default RecentProjects;
