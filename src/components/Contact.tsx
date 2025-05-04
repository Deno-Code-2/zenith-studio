import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast({
                title: 'Error',
                description: 'Please fill in all fields.',
                variant: 'destructive',
            });
            return;
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                toast({
                    title: 'Success',
                    description: 'Your message has been sent!',
                });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.json();
                toast({
                    title: 'Error',
                    description: errorData.error || 'Failed to send message. Please try again later.',
                    variant: 'destructive',
                });
            }
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'An unexpected error occurred. Please try again later.',
                variant: 'destructive',
            });
        }
    };
    
    return (
        <div id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        Contact Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
                    >
                        We’d love to hear from you. Get in touch and let us know how we can help.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="rounded-lg bg-white dark:bg-gray-800 shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            info@zenithstudio.dev
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Monday - Friday: 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            123 Tech Park, Innovation Avenue, CA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="rounded-lg bg-white dark:bg-gray-800 shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Send us a message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                                <Button className="w-full" size="lg">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
