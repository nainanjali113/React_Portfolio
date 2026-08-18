// src/Components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiCode,
  FiArrowUp,
  FiShield,
  FiZap
} from 'react-icons/fi';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Social Links with colors
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: "https://github.com/nainanjali113", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: FiLinkedin, 
      href: "https://www.linkedin.com/in/anjani-nain-465292389/", 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      icon: FiMail, 
      href: "mailto:nainanjali113@gmail.com", 
      label: "Email",
      color: "hover:text-red-500 dark:hover:text-red-400"
    }
  ];

  // Quick Links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  // Tech stack badges
  const techStack = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion"
  ];

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-[#1a1a1a] transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section - ENHANCED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]">
                  <FiShield className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                  Anj<span className="text-cyan-500 dark:text-cyan-400">ani</span>
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Building <span className="font-medium text-[#0a0a0a] dark:text-white">secure web applications</span> with MERN Stack 
                and integrating <span className="font-medium text-[#0a0a0a] dark:text-white">AI solutions</span> through prompt engineering.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCode className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Full Stack Developer</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <FiZap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Cyber Security</span>
              </div>

              {/* Tech Stack Badges - NEW */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-[#1a1a1a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - ENHANCED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-0.5 bg-cyan-500 dark:bg-cyan-400"></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:pl-1.5 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact - ENHANCED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-0.5 bg-cyan-500 dark:bg-cyan-400"></span>
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-gray-600 dark:text-gray-400 ${social.color} hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-md`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4.5 h-4.5" />
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                  <FiMail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <a
                  href="mailto:nainanjali113@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
                >
                  nainanjali113@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200 dark:border-[#1a1a1a]"></div>

          {/* Bottom Bar - ENHANCED */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright - ENHANCED */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} <span className="font-medium text-[#0a0a0a] dark:text-white">Anjani</span>. 
              All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {/* Made with ❤️ - ENHANCED */}
              <motion.p 
                className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5"
                whileHover={{ scale: 1.02 }}
              >
                Made with
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    transition: { 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FiHeart className="w-3.5 h-3.5 text-red-500" />
                </motion.span>
                using React & Tailwind
              </motion.p>
              
              {/* Scroll to Top Button - ENHANCED with visibility */}
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Scroll to top"
                  >
                    <FiArrowUp className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}