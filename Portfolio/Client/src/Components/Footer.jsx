import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiCode,
  FiArrowUp
} from 'react-icons/fi';

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Social Links
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/nainanjali113", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/anjani-nain-465292389/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:nainanjali113@gmail.com", label: "Email" }
  ];

  // Quick Links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-[#1a1a1a] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Portfolio
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Building secure web applications with MERN Stack and integrating AI solutions through prompt engineering.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCode className="w-4 h-4" />
                <span>Full Stack Developer</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a
                  href="mailto:nainanjali113@gmail.com"
                  className="hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                >
                  nainanjali113@gmail.com
                </a>
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200 dark:border-[#1a1a1a]"></div>

          {/* Bottom Bar - With both parts uncommented */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {/* Made with ❤️ - CREDIT LINE */}
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                Made with
                <FiHeart className="w-3.5 h-3.5 text-red-500 inline animate-pulse" />
                using React & Tailwind CSS
              </p>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}