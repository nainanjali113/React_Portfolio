import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaHeart,
    FaArrowUp,
    FaCode,
    FaShieldAlt,
    FaReact,
    FaNodeJs
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:nainanjali113@gmail.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const techStack = [
        { icon: FaReact, label: 'React.js' },
        { icon: FaNodeJs, label: 'Node.js' },
        { icon: FaCode, label: 'MERN Stack' },
        { icon: FaShieldAlt, label: 'Cyber Security' },
    ];

    return (
        <footer className={`${isDark ? 'bg-navy' : 'bg-gray-50'} border-t ${isDark ? 'border-electric/20' : 'border-gray-200'} relative`}>
            {/* Back to Top Button */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full shadow-lg transition-all duration-300
            bg-gradient-to-r from-electric to-cyan text-white
            hover:shadow-electric/50`}
                    aria-label="Back to top"
                >
                    <FaArrowUp className="w-5 h-5" />
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-electric to-cyan flex items-center justify-center shadow-lg shadow-electric/30">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                                Anjani
                            </span>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-slate' : 'text-gray-500'} mb-4`}>
                            Full Stack Developer | CyberSecurity Enthusiast | AI Prompt Engineer
                        </p>
                        <p className={`text-xs ${isDark ? 'text-slate/60' : 'text-gray-400'}`}>
                            Building secure, scalable, and innovative web solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-navy'}`}>
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className={`text-sm transition-colors duration-300
                      ${isDark ? 'text-slate hover:text-cyan' : 'text-gray-500 hover:text-electric'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(link.href);
                                            if (target) {
                                                target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-navy'}`}>
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <span
                                        key={index}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                      ${isDark
                                                ? 'bg-electric/10 text-cyan border border-electric/20'
                                                : 'bg-electric/5 text-electric border border-electric/20'
                                            }`}
                                    >
                                        <Icon className="w-3 h-3" />
                                        {tech.label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-navy'}`}>
                            Connect
                        </h3>
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-2.5 rounded-lg transition-all duration-300
                      ${isDark
                                                ? 'bg-white/5 hover:bg-white/10 text-slate hover:text-cyan'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-electric'
                                            }`}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                        <p className={`text-xs ${isDark ? 'text-slate/60' : 'text-gray-400'}`}>
                            Available for freelance work
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className={`my-8 border-t ${isDark ? 'border-electric/20' : 'border-gray-200'}`} />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className={`text-sm ${isDark ? 'text-slate/60' : 'text-gray-400'}`}>
                        © {currentYear} Anjani. All rights reserved.
                    </p>
                    <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-slate/60' : 'text-gray-400'}`}>
                        Made with
                        <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                        using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}