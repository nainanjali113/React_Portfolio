// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaHome,
    FaUser,
    FaBriefcase,
    FaCode,
    FaPhone,
    FaTools,
    FaMedal
} from 'react-icons/fa';
import {
    MdMenu,
    MdClose,
    MdLightMode,
    MdDarkMode
} from 'react-icons/md';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Nav links matching your App.jsx sections
    const navLinks = [
        { name: 'Home', href: '#home', icon: FaHome },
        // { name: 'Hero', href: '#hero', icon: FaUser },  
        { name: 'Skills', href: '#skills', icon: FaTools },
        { name: 'Projects', href: '#projects', icon: FaCode },
        { name: 'Experience', href: '#experience', icon: FaMedal },
        { name: 'ContactUs', href: '#contact', icon: FaPhone },
    ];

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:nainanjali113@gmail.com', label: 'Email' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                       dark:bg-navy/95 bg-white/95 backdrop-blur-lg
                       dark:shadow-xl shadow-xl
                       dark:border-navy border-white/20
                       ${scrolled ? 'dark:shadow-electric/10 shadow-electric/10' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={(e) => scrollToSection(e, '#home')}
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-electric to-cyan flex items-center justify-center shadow-lg shadow-electric/30">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="font-bold text-2xl dark:text-white text-navy">
                            Anjani
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium 
                                              transition-all duration-300 flex items-center space-x-2
                                              ${isActive
                                            ? 'text-electric bg-electric/10 dark:bg-electric/10'
                                            : 'text-slate dark:text-slate hover:text-navy dark:hover:text-white hover:bg-electric/10 dark:hover:bg-electric/10'
                                        }`}
                                >
                                    <Icon size={16} />
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric to-cyan"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Right side - Social & Theme Toggle */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        {/* Social Icons - Desktop */}
                        <div className="hidden md:flex items-center space-x-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg transition-all duration-300
                                                 text-navy dark:text-slate 
                                                 hover:text-electric dark:hover:text-cyan 
                                                 hover:bg-electric/10 dark:hover:bg-electric/10"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>

                        <div className="w-px h-6 bg-slate/30 hidden md:block" />

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="relative p-2 rounded-lg transition-all duration-300
                                     text-navy dark:text-white 
                                     hover:text-electric dark:hover:text-cyan 
                                     hover:bg-electric/10 dark:hover:bg-electric/10"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDark ? 'dark' : 'light'}
                                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isDark ? (
                                        <MdLightMode size={20} className="text-cyan" />
                                    ) : (
                                        <MdDarkMode size={20} className="text-navy" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg transition-all duration-300
                                     text-navy dark:text-white 
                                     hover:text-electric dark:hover:text-cyan
                                     hover:bg-electric/10 dark:hover:bg-electric/10"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t dark:border-electric/20 border-electric/20
                                 dark:bg-navy bg-white"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        whileHover={{ x: 10 }}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg 
                                                  transition-all duration-300
                                                  ${isActive
                                                ? 'text-electric bg-electric/10'
                                                : 'text-navy dark:text-slate hover:text-electric dark:hover:text-white hover:bg-electric/5 dark:hover:bg-electric/5'
                                            }`}
                                    >
                                        <Icon size={20} />
                                        <span className="font-medium">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobileActiveIndicator"
                                                className="ml-auto w-1 h-6 rounded-full bg-gradient-to-b from-electric to-cyan"
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}

                            <div className="pt-3 mt-3 border-t border-slate/20">
                                <div className="flex items-center justify-around px-4">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 rounded-lg transition-all duration-300
                                                         text-navy dark:text-slate 
                                                         hover:text-electric dark:hover:text-cyan"
                                            >
                                                <Icon size={22} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}