
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Button } from './ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Marquee from './Marquee';
import { useToast } from './ui/use-toast';
import TextRotate from './TextRotate';

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { toast } = useToast();

    return (
        <div id="hero" className="relative pt-28 md:pt-32 lg:pt-36 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-gray-950 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>
            
            <Container>
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20"
                    >
                        Announcing our new company's projects{' '}
                        <a href="#projects" className="font-semibold text-green-600 dark:text-green-500">
                            <span className="absolute inset-0" aria-hidden="true" />
                            See projects <span aria-hidden="true">&rarr;</span>
                        </a>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
                    >
                        We help founders{' '}
                        <span className="relative inline-flex">
                            <span className="text-green-600 hover:text-green-700 transition-colors">build startup</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-600 rounded-sm"></span>
                        </span>
                        <br />
                        ideas efficiently
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        We help founders bring ideas to life—AI-powered, beautifully designed MVPs delivered in weeks, not months. Get early validation and traction with minimum resources.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <Button asChild size="lg" className="px-8 py-6 text-base">
                            <a href="#contact">Contact Us</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base">
                            <Link to="/about">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-24 sm:mt-32 lg:mt-40"
                    >
                        <Marquee />
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
