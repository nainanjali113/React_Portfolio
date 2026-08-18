import React from 'react';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/anjani.png';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiShield,
  FiCode,
  FiCpu,
  FiArrowRight,
  FiMapPin
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFramer } from 'react-icons/si';

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Education & Skills Data
  const educationData = [
    {
      title: "Cyber Security",
      icon: FiShield,
      description: "Network Security, Ethical Hacking, Cryptography, Security Auditing"
    },
    {
      title: "Web Development (MERN Stack)",
      icon: FiCode,
      description: "MongoDB, Express.js, React.js, Node.js, REST APIs, Full Stack Development"
    },
    {
      title: "Prompt Engineering",
      icon: FiCpu,
      description: "AI/ML Integration, Prompt Optimization, ChatGPT API, LLM Fine-tuning"
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/nainanjali113', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:nainanjali113@email.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Hero Text */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
            </motion.div>

            {/* Main Heading - Enhanced */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-[#0a0a0a] dark:text-white">
                Anjani
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 dark:text-gray-400 mt-1">
                Cyber Security &amp; Full Stack Developer
              </span>
            </motion.h1>

            {/* Description with enhanced styling */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              Passionate about building <span className="font-semibold text-[#0a0a0a] dark:text-white">secure web applications</span>
              with the MERN Stack and integrating <span className="font-semibold text-[#0a0a0a] dark:text-white">AI solutions</span>
              through prompt engineering.
            </motion.p>

            {/* Education Cards with enhanced design */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-200 dark:bg-[#0a0a0a] group-hover:bg-gray-300 dark:group-hover:bg-gray-800 transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="font-semibold text-sm text-[#0a0a0a] dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons with enhanced design */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/resume.pdf"
                download='Anjani_Resume.pdf'
                className="group inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0a0a0a] dark:border-white text-[#0a0a0a] dark:text-white rounded-lg font-medium hover:bg-[#0a0a0a] hover:text-white dark:hover:bg-white dark:hover:text-[#0a0a0a] transition-all duration-300 hover:shadow-lg"
              >
                <FiDownload className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links with enhanced design */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Connect with me:
              </span>
              <div className="flex items-center gap-1">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Profile Image with enhanced styling */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-[#1a1a1a] dark:to-[#2a2a2a] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-[#0a0a0a] overflow-hidden border-2 border-white dark:border-[#0a0a0a]">
                  <img
                    src={ProfileImg}
                    alt="Anjani - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-gray-200/50 dark:border-gray-700/50 animate-pulse"></div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}