import React from 'react';
import { motion } from 'framer-motion';
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
  FiLink,
  FiDatabase,
  FiLock,
  FiUsers,
  FiBox
} from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiSocketdotio, SiRedux, SiBlockchaindotcom } from 'react-icons/si';

export default function Projects() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // All Projects
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
      features: ["Authentication", "CRUD Operations", "Cart Management", "Order Tracking", "MongoDB Integration"],
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST API", "JWT Auth"],
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
      features: ["Course Management", "Student Enrollment", "Instructor Dashboard", "Progress Tracking", "Certification Generation"],
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Redux"],
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
      features: ["Real-time Analytics", "User Management", "Content Management", "Security Monitoring", "Penetration Testing"],
      tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Cyber Security", "Web App Penetration Testing"],
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
      features: ["Vulnerability Scanning", "Penetration Testing", "Network Security Analysis", "Audit Reports", "Security Compliance"],
      tech: ["MERN Stack", "Python", "Cyber Security", "Penetration Testing", "Vulnerability Assessment", "Network Analysis"],
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
      features: ["Authentication", "CRUD Operations", "Cart Management", "Order Processing", "REST API"],
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
      features: ["Real-time Messaging", "Online Users", "Typing Indicator", "User Authentication", "Message History"],
      tech: ["MERN Stack", "Socket.IO", "Real-time", "WebSockets", "JWT"],
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
      features: ["Live Product Updates", "Real-time Cart", "Admin Dashboard", "Inventory Management", "Order Tracking"],
      tech: ["MERN Stack", "Redux Toolkit", "Socket.IO", "Real-time", "Admin Dashboard"],
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
      features: ["Wallet Connection", "Smart Contract Interaction", "Transaction History", "DApp Architecture", "Web3 Integration"],
      tech: ["Web3", "Blockchain", "Smart Contracts", "Ethereum", "DApp"],
      github: "https://github.com/yourusername/blockchain-dapp",
      demo: "https://blockchain-dapp-demo.vercel.app",
      isLive: true
    }
  ];

  // Filter projects by type
  const hartronProjects = allProjects.filter(p => p.type === "Hartron Advanced Skill Centre");
  const freelancingProjects = allProjects.filter(p => p.type === "Freelancing Project");
  const learningProjects = allProjects.filter(p => p.type === "Learning Project");

  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                My Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-4 tracking-tight">
              Featured <span className="text-[#0a0a0a] dark:text-white">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work including Hartron Advanced Skill Centre projects, freelancing work, and MERN AI learning projects
            </p>
          </motion.div>

          {/* Hartron Advanced Skill Centre Projects */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiAward className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Hartron Advanced Skill Centre
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Institute Projects
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hartronProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a]">
                          <project.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0a0a0a] dark:text-white">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {project.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-[#1a1a1a]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {project.isLive ? '🔴 Live' : 'View Demo'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Freelancing Projects */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiBriefcase className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Freelancing Projects
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Professional Work
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freelancingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a]">
                          <project.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0a0a0a] dark:text-white">
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
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-[#1a1a1a]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {project.isLive ? '🔴 Live' : 'View Demo'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MERN AI Learning Projects */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiCode className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                MERN AI Learning Projects
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Portfolio Projects
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {learningProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a]">
                          <project.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0a0a0a] dark:text-white">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {project.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-[#1a1a1a]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {project.isLive ? '🔴 Live' : 'View Demo'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">2</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hartron Projects</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">2</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Freelancing Projects</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">4</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Learning Projects</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">8</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Total Projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}