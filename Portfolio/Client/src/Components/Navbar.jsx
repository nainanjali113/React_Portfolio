import { useState, useEffect, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMenu,
    FiX,
    FiSun,
    FiMoon,
    FiHome,
    FiAward,
    FiFolder,
    FiClock,
    FiSend,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Home', icon: FiHome },
        { id: 'skills', label: 'Skills', icon: FiAward },
        { id: 'project', label: 'Project', icon: FiFolder },
        { id: 'experience', label: 'Experience', icon: FiClock },
        { id: 'contact', label: 'ContactUs', icon: FiSend },
    ];

    // Social links
    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
    ];

    // Handle scroll effect for shadow and active section
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            let foundActive = false;
            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        if (navItems[index].id !== activeSection) {
                            setActiveSection(navItems[index].id);
                        }
                        foundActive = true;
                    }
                }
            });

            // If no section is found, set to home
            if (!foundActive && window.scrollY < 100) {
                if (activeSection !== 'home') {
                    setActiveSection('home');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check after component mounts
        setTimeout(handleScroll, 100);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const handleNavClick = (sectionId) => {
        setIsOpen(false);
        
        // Update active section
        setActiveSection(sectionId);
        
        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Check if current route matches section
    const isActive = (sectionId) => {
        return activeSection === sectionId;
    };

    return (
        <>
            {/* Navbar - Fixed position always */}
            <nav
                className={`
                    fixed top-0 left-0 right-0 z-50 w-full
                    transition-all duration-300
                    ${isScrolled || isOpen
                        ? 'bg-white dark:bg-[#0a0a0a] backdrop-blur-md shadow-lg'
                        : 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm'
                    }
                    border-b border-gray-200/50 dark:border-[#1a1a1a]/80
                `}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <a
                                href="#home"
                                className="text-2xl md:text-3xl font-bold text-[#0a0a0a] dark:text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('home');
                                }}
                            >
                                Portfolio
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.id);
                                    }}
                                    className={`
                                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                        ${isActive(item.id)
                                            ? 'text-[#0a0a0a] dark:text-white font-semibold'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white'
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-2">
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </span>
                                    {isActive(item.id) && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0a0a0a] dark:bg-white rounded-full"
                                            transition={{ type: 'spring', duration: 0.5 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Right side: Social icons & Theme toggle */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {/* Social Links - Desktop */}
                            <div className="hidden md:flex items-center gap-1">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-500 dark:text-gray-500 hover:text-[#0a0a0a] dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? (
                                    <FiSun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <FiMoon className="w-5 h-5 text-[#0a0a0a]" />
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <FiX className="w-6 h-6" />
                                ) : (
                                    <FiMenu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 z-50 w-[280px] max-w-[80vw] h-full bg-white dark:bg-[#0a0a0a] shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* Close button */}
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold text-[#0a0a0a] dark:text-white">
                                    Menu
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                                >
                                    <FiX className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <nav className="flex-1 space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.id);
                                        }}
                                        className={`
                                            flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                                            ${isActive(item.id)
                                                ? 'bg-gray-100 dark:bg-[#1a1a1a] text-[#0a0a0a] dark:text-white font-semibold'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
                                            }
                                        `}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive(item.id) ? 'text-[#0a0a0a] dark:text-white' : ''}`} />
                                        {item.label}
                                        {isActive(item.id) && (
                                            <motion.div
                                                layoutId="mobileActiveIndicator"
                                                className="ml-auto w-1 h-8 rounded-full bg-[#0a0a0a] dark:bg-white"
                                            />
                                        )}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Social Links - Mobile */}
                            <div className="pt-6 border-t border-gray-200 dark:border-[#1a1a1a]">
                                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-4">
                                    Connect with me
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white transition-colors flex-1 flex items-center justify-center"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer for fixed navbar */}
            <div className="h-16 md:h-20" />
        </>
    );
}