// src/Components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiShoppingCart,
  FiMessageSquare,
  FiTrendingUp,
  FiGithub,
  FiExternalLink,
  FiShield,
  FiServer,
  FiAward,
  FiBriefcase,
  FiCode,
  FiFolder,
  FiZap
} from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiSocketdotio, SiRedux, SiBlockchaindotcom } from 'react-icons/si';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  // All Projects Data
  const allProjects = [
    // Hartron Advanced Skill Centre Projects
    {
      id: 1,
      title: "Hartron E-Commerce Platform",
      subtitle: "(MERN Stack)",
      description: "Full-featured e-commerce platform developed for Hartron Advanced Skill Centre with authentication, CRUD operations, cart management, orders tracking, and MongoDB integration.",
      icon: FiShoppingCart,
      type: "Hartron Advanced Skill Centre",
      category: "Institute Project",
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
      github: "https://github.com/yourusername/hartron-ecommerce",
      demo: "https://hartron-ecommerce-demo.vercel.app",
      isLive: true
    },
    {
      id: 2,
      title: "Hartron LMS",
      subtitle: "(Learning Management System)",
      description: "Complete Learning Management System for Hartron Advanced Skill Centre with course management, student enrollment, instructor dashboard, and online learning content.",
      icon: FiServer,
      type: "Hartron Advanced Skill Centre",
      category: "Institute Project",
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
      github: "https://github.com/yourusername/hartron-lms",
      demo: "https://hartron-lms-demo.vercel.app",
      isLive: true
    },

    // Freelancing Projects
    {
      id: 3,
      title: "Hartron India Dashboard",
      subtitle: "(Admin Panel)",
      description: "Comprehensive admin dashboard for Hartron India with real-time analytics, user management, content management, and security monitoring. Built with MERN Stack with integrated security features.",
      icon: FiTrendingUp,
      type: "Freelancing Project",
      category: "Dashboard Development",
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Cyber Security"],
      github: "https://github.com/yourusername/hartron-dashboard",
      demo: "http://dashboard.hartronindia.com",
      isLive: true,
      isHartron: true
    },
    {
      id: 4,
      title: "Cyber Security Assessment Tool",
      subtitle: "(Penetration Testing)",
      description: "Professional cybersecurity assessment tool with vulnerability scanning, penetration testing reports, network security analysis, and security audit generation for web applications.",
      icon: FiShield,
      type: "Freelancing Project",
      category: "Cyber Security",
      tech: ["MERN Stack", "Python", "Penetration Testing", "Vulnerability Assessment"],
      github: "https://github.com/yourusername/security-assessment-tool",
      demo: "https://security-assessment-demo.vercel.app",
      isLive: true
    },

    // MERN AI Learning Projects
    {
      id: 5,
      title: "E-Commerce Platform",
      subtitle: "(MERN Stack)",
      description: "Full-featured e-commerce platform with authentication, CRUD operations, shopping cart, order management, and REST API integration.",
      icon: FiShoppingCart,
      type: "Learning Project",
      category: "MERN Stack",
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      github: "https://github.com/yourusername/mern-ecommerce",
      demo: "https://mern-ecommerce-demo.vercel.app",
      isLive: true
    },
    {
      id: 6,
      title: "Real-Time Chat Application",
      subtitle: "(MERN + Socket.IO)",
      description: "Full-featured real-time chat application with Socket.IO integration for instant messaging, online user tracking, and typing indicators.",
      icon: FiMessageSquare,
      type: "Learning Project",
      category: "MERN + Socket.IO",
      tech: ["MERN Stack", "Socket.IO", "WebSockets", "JWT"],
      github: "https://github.com/yourusername/chat-app",
      demo: "https://chat-app-demo.vercel.app",
      isLive: true
    },
    {
      id: 7,
      title: "Real-Time E-Commerce Platform",
      subtitle: "(MERN + Redux + Socket.IO)",
      description: "Advanced e-commerce platform with Redux Toolkit and Socket.IO for live product updates, real-time cart synchronization, and admin dashboard.",
      icon: FiTrendingUp,
      type: "Learning Project",
      category: "MERN + Redux + Socket.IO",
      tech: ["MERN Stack", "Redux Toolkit", "Socket.IO", "Admin Dashboard"],
      github: "https://github.com/yourusername/real-time-ecommerce",
      demo: "https://real-time-ecommerce-demo.vercel.app",
      isLive: true
    },
    {
      id: 8,
      title: "Blockchain DApp",
      subtitle: "(Web3 Basics)",
      description: "Introduction to blockchain and Web3 with wallet connection, smart contract basics, and decentralized application development.",
      icon: SiBlockchaindotcom,
      type: "Learning Project",
      category: "Blockchain Basics",
      tech: ["Web3", "Blockchain", "Smart Contracts", "Ethereum", "DApp"],
      github: "https://github.com/yourusername/blockchain-dapp",
      demo: "https://blockchain-dapp-demo.vercel.app",
      isLive: true
    }
  ];

  // Filter projects based on active tab
  const getFilteredProjects = () => {
    if (activeTab === 'all') return allProjects;
    if (activeTab === 'hartron') {
      return allProjects.filter(p => p.type === "Hartron Advanced Skill Centre");
    }
    if (activeTab === 'freelance') {
      return allProjects.filter(p => p.type === "Freelancing Project");
    }
    if (activeTab === 'learning') {
      return allProjects.filter(p => p.type === "Learning Project");
    }
    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  // Tab configuration
  const tabs = [
    { key: 'all', label: 'All Projects', icon: FiFolder },
    { key: 'hartron', label: '🏛️ Hartron', icon: FiAward },
    { key: 'freelance', label: '💼 Freelance', icon: FiBriefcase },
    { key: 'learning', label: '📚 Learning', icon: FiCode },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Stats for summary
  const stats = [
    { count: '2', label: 'Hartron Projects' },
    { count: '2', label: 'Freelancing Projects' },
    { count: '4', label: 'Learning Projects' },
    { count: '8', label: 'Total Projects' },
  ];

  return (
    <section 
      id="project" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header - ENHANCED */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <FiFolder className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                My Portfolio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-3 tracking-tight">
              Featured <span className="text-[#0a0a0a] dark:text-white">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work including Hartron Advanced Skill Centre projects, freelancing work, and MERN AI learning projects
            </p>
          </motion.div>

          {/* Filter Tabs - ENHANCED */}
          <motion.div variants={itemVariants} className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] shadow-lg'
                    : 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - With AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  {/* Card Header */}
                  <div className="p-5 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-[#1a1a1a]">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#0a0a0a] dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {project.subtitle}
                            </span>
                          )}
                          {project.isHartron && (
                            <span className="ml-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                              hartronindia.com
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-full whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack - ENHANCED */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a] hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - ENHANCED */}
                    <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-200 dark:border-[#1a1a1a]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-[#2a2a2a] hover:text-[#0a0a0a] dark:hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] rounded-lg text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {project.isLive ? 'Live Demo' : 'View Demo'}
                      </a>
                      {project.isLive && (
                        <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 ml-auto">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                          </span>
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Project Statistics - ENHANCED */}
          <motion.div
            variants={itemVariants}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-white">
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}