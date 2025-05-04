
import React, { useEffect, useState } from 'react';
import HeaderLogo from './header/HeaderLogo';
import NavigationItems from './header/NavigationItems';
import MobileMenu from './header/MobileMenu';
import TimeDisplay from './header/TimeDisplay';
import { Container } from '@/components/ui/container';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const sectionNavItems = isHomePage ? [
        { label: 'Hero', href: '#hero' },
        { label: 'Features', href: '#features' },
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' }
    ] : [];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <HeaderLogo scrollToTop={scrollToTop} />
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <NavigationItems isActive={isActive} scrollToTop={scrollToTop} />
                        
                        {isHomePage && (
                            <div className="flex items-center space-x-4 ml-8">
                                {sectionNavItems.map((item) => (
                                    <a 
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-500 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="hidden lg:flex items-center">
                        <TimeDisplay />
                    </div>

                    <div className="lg:hidden">
                        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} sectionNavItems={sectionNavItems} />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
