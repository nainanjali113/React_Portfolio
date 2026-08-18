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
    FiShield,
    FiMail,
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: FiHome },
        { id: 'skills', label: 'Skills', icon: FiAward },
        { id: 'project', label: 'Projects', icon: FiFolder },
        { id: 'experience', label: 'Experience', icon: FiClock },
        { id: 'contact', label: 'Contact', icon: FiSend },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:nainanjali113@email.com', label: 'Email' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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

            if (!foundActive && window.scrollY < 100) {
                if (activeSection !== 'home') {
                    setActiveSection('home');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

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
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const isActive = (sectionId) => activeSection === sectionId;

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 right-0 z-50 w-full
                    transition-all duration-500 ease-in-out
                    ${isScrolled || isOpen
                        ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                        : 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm'
                    }
                    border-b border-gray-200/30 dark:border-[#1a1a1a]/60
                `}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo/Brand - Changed to "AN" with modern styling */}
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('home');
                            }}
                            className="flex items-center gap-3 group"
                        >
                            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                AN
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></span>
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-[#0a0a0a] dark:text-white">
                                Anj<span className="text-cyan-500 dark:text-cyan-400">ani</span>
                            </span>
                        </a>

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
                                        relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                                        ${isActive(item.id)
                                            ? 'text-[#0a0a0a] dark:text-white'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-[#1a1a1a]/50'
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-2">
                                        <item.icon className={`w-4 h-4 transition-colors duration-300 ${isActive(item.id) ? 'text-cyan-500 dark:text-cyan-400' : ''}`} />
                                        {item.label}
                                    </span>
                                    {isActive(item.id) && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                            transition={{ type: 'spring', duration: 0.6, bounce: 0.3 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Right side */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Social Links - Always visible on mobile too */}
                            <div className="flex items-center gap-1">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-500 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-[#1a1a1a]/50 hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Theme Toggle - Enhanced */}
                            <button
                                onClick={toggleTheme}
                                className="relative p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-[#1a1a1a]/50 transition-all duration-300 hover:scale-105"
                                aria-label="Toggle theme"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                                    transition={{ duration: 0.4, type: 'spring' }}
                                >
                                    {isDarkMode ? (
                                        <FiSun className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <FiMoon className="w-5 h-5 text-[#0a0a0a]" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-[#1a1a1a]/50 transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? (
                                        <FiX className="w-6 h-6" />
                                    ) : (
                                        <FiMenu className="w-6 h-6" />
                                    )}
                                </motion.div>
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
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/50 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu - Enhanced */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 z-50 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0a0a0a] shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200/50 dark:border-[#1a1a1a]/50">
                                <span className="text-lg font-bold text-[#0a0a0a] dark:text-white flex items-center gap-2">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-[10px] font-bold">AN</span>
                                    Menu
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-[#1a1a1a]/50 transition-colors"
                                >
                                    <FiX className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <nav className="flex-1 space-y-1.5">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.06, type: 'spring' }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.id);
                                        }}
                                        className={`
                                            flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
                                            ${isActive(item.id)
                                                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 text-[#0a0a0a] dark:text-white shadow-inner'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50/50 dark:hover:bg-[#1a1a1a]/50'
                                            }
                                        `}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive(item.id) ? 'text-cyan-500 dark:text-cyan-400' : ''}`} />
                                        {item.label}
                                        {isActive(item.id) && (
                                            <motion.div
                                                layoutId="mobileActiveIndicator"
                                                className="ml-auto w-1.5 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"
                                                transition={{ type: 'spring', duration: 0.5 }}
                                            />
                                        )}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Social Links - Mobile */}
                            <div className="pt-6 border-t border-gray-200/50 dark:border-[#1a1a1a]/50">
                                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-4 font-medium">
                                    Connect with me
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 p-3 bg-gray-100/50 dark:bg-[#1a1a1a]/50 rounded-xl text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-200/50 dark:hover:bg-[#1a1a1a] transition-all duration-300 flex items-center justify-center hover:scale-105"
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

            {/* Spacer */}
            <div className="h-16 md:h-20" />
        </>
    );
}