// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import ProfileImg from '../assets/anjani.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Hero() {
    const { isDark } = useTheme();

    return (
        <section id="home" className={`min-h-screen flex items-center justify-center
                                    ${isDark ? 'dark:bg-navy' : 'bg-white'} pt-20`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Hero Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4
                                     dark:text-white text-navy"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
                                Anjani
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl dark:text-slate text-gray-600 mb-3"
                        >
                            Full Stack Developer | CyberSecurity Enthusiast | AI Prompt Engineer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base dark:text-slate/80 text-gray-500 mb-8 max-w-lg"
                        >
                            Passionate about building secure, scalable web applications and exploring
                            the intersection of AI and cybersecurity.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-electric to-cyan 
                                         text-white rounded-lg font-medium
                                         hover:shadow-lg hover:shadow-electric/30 
                                         transition-all duration-300 cursor-pointer"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-3 rounded-lg font-medium
                                          border-2 transition-all duration-300 cursor-pointer
                                          dark:border-electric/50 border-electric/30
                                          dark:text-white text-navy
                                          hover:bg-electric hover:text-white
                                          dark:hover:bg-electric`}
                            >
                                Contact Me
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-3 rounded-lg font-medium
                                          flex items-center gap-2 transition-all duration-300 cursor-pointer
                                          dark:bg-white/5 bg-gray-100
                                          dark:text-slate text-gray-600
                                          border border-transparent hover:border-electric/30`}
                            >
                                <FaDownload className="w-4 h-4" />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <span className={`text-sm font-medium ${isDark ? 'text-slate' : 'text-gray-500'}`}>
                                Connect with me:
                            </span>
                            <div className="flex gap-3">
                                {[
                                    { icon: FaGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
                                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
                                    { icon: FaEnvelope, href: 'mailto:nainanjali113@gmail.com', label: 'Email' },
                                ].map((social, index) => {
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
                                                        ? 'dark:bg-white/5 dark:hover:bg-white/10 text-slate hover:text-cyan' 
                                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-electric'
                                                      }`}
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Animated background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-electric to-cyan 
                                          rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            {/* Profile Image Container */}
                            <div className="relative w-64 h-75 md:w-80 md:h-80 lg:w-96 lg:h-96 
                                          rounded-full overflow-hidden border-4 
                                          border-gradient-to-r from-electric to-cyan
                                          shadow-2xl shadow-electric/30">
                                <img
                                    src={ProfileImg}
                                    alt="Anjani - Portfolio"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}