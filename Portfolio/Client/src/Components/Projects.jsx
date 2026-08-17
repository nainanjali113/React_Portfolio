import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaCommentDots, 
  FaStore, 
  FaGithub, 
  FaExternalLinkAlt,
  FaDatabase,
  FaLock,
  FaShoppingBag,
  FaUsers,
  FaChartLine,
  FaEthereum,
  FaGraduationCap,
  FaLaptopCode,
  FaBook,
  FaUserGraduate,
  FaShieldAlt,
  FaCode,
  FaServer,
  FaCloud
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiSocketdotio, 
  SiRedux, 
  SiWeb3Dotjs,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
  SiDjango
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { isDark } = useTheme();

  const projects = [
    // Hartron Advanced Skill Centre Projects
    {
      id: 1,
      title: 'Hartron LMS (Learning Management System)',
      description: 'Enterprise Learning Management System developed for Hartron Advanced Skill Centre. Features course management, student enrollment, progress tracking, and certification management.',
      icon: FaBook,
      type: 'Hartron Project',
      tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'JWT Auth'],
      features: ['Course Management', 'Student Enrollment', 'Progress Tracking', 'Certification Generation', 'Admin Dashboard', 'Payment Integration'],
      github: 'https://github.com/nainanjali113/hartron-lms',
      demo: 'https://dashboard.hartronindia.com',
      color: 'from-blue-500 to-cyan-500',
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss],
      isHartron: true
    },
    {
      id: 2,
      title: 'Hartron Dashboard & Admin Panel',
      description: 'Comprehensive admin dashboard for Hartron India with real-time analytics, user management, content management, and security monitoring for the entire platform.',
      icon: FaChartLine,
      type: 'Hartron Project',
      tech: ['MERN Stack', 'Redux Toolkit', 'Web Security', 'Penetration Testing', 'Real-time Analytics'],
      features: ['Real-time Analytics', 'User Management', 'Content Management', 'Security Monitoring', 'Vulnerability Assessment', 'Performance Tracking'],
      github: 'https://github.com/nainanjali113/hartron-dashboard',
      demo: 'https://dashboard.hartronindia.com',
      color: 'from-green-500 to-emerald-500',
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedux],
      isHartron: true
    },

    // Freelancing Projects
    {
      id: 3,
      title: 'E-Commerce Platform (Freelance)',
      description: 'Full-featured e-commerce platform with authentication, CRUD operations, shopping cart, order management, and REST API integration. Built for a client with custom requirements.',
      icon: FaShoppingCart,
      type: 'Freelance Project',
      tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'Payment Gateway'],
      features: ['Authentication & Authorization', 'CRUD Operations', 'Cart Management', 'Order Processing', 'Payment Integration', 'Admin Dashboard'],
      github: 'https://github.com/nainanjali113/ecommerce-basic',
      demo: 'https://ecommerce-basic-demo.netlify.app',
      color: 'from-purple-500 to-pink-500',
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiFirebase],
      isFreelance: true
    },
    {
      id: 4,
      title: 'Cyber Security Assessment Tool',
      description: 'Professional cybersecurity assessment tool with vulnerability scanning, penetration testing reports, network security analysis, and security audit generation.',
      icon: FaShieldAlt,
      type: 'Freelance Project',
      tech: ['React.js', 'Node.js', 'Cyber Security', 'Penetration Testing', 'Network Analysis', 'Report Generation'],
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Network Security Analysis', 'Audit Reports', 'Security Recommendations', 'Compliance Check'],
      github: 'https://github.com/nainanjali113/cyber-security-tool',
      demo: 'https://cyber-security-tool-demo.netlify.app',
      color: 'from-red-500 to-orange-500',
      techIcons: [SiReact, SiNodedotjs, FaShieldAlt, FaLock],
      isFreelance: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-navy' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate' : 'text-gray-600'}`}>
            Showcasing my work in web development, real-time applications, and blockchain
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Hartron Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
              <FaGraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
              Hartron Advanced Skill Centre Projects
            </h3>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.filter(p => p.isHartron).map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group relative p-6 rounded-2xl transition-all duration-500
                    ${isDark 
                      ? 'bg-navy/80 border border-electric/20 hover:border-electric/40' 
                      : 'bg-white border border-gray-200 hover:border-electric/40 shadow-lg'
                    } hover:shadow-2xl hover:shadow-electric/10 hover:scale-[1.02]`}
                >
                  {/* Hartron Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                    Hartron
                  </div>

                  {/* Project Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-navy'}`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techIcons.map((TechIcon, idx) => (
                      <span
                        key={idx}
                        className={`p-1.5 rounded-lg transition-all duration-300
                          ${isDark 
                            ? 'bg-white/5 hover:bg-white/10' 
                            : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                      >
                        <TechIcon className={`w-4 h-4 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${isDark 
                            ? 'bg-electric/10 text-cyan border border-electric/20' 
                            : 'bg-electric/5 text-electric border border-electric/20'
                          }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${isDark 
                            ? 'bg-white/5 text-slate' 
                            : 'bg-gray-100 text-gray-600'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        ${isDark 
                          ? 'bg-white/5 text-slate hover:bg-white/10 hover:text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-navy'
                        }`}
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                               bg-gradient-to-r from-electric to-cyan text-white
                               hover:shadow-lg hover:shadow-electric/30 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Freelancing Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <FaLaptopCode className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
              Freelancing Projects
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.filter(p => p.isFreelance).map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group relative p-6 rounded-2xl transition-all duration-500
                    ${isDark 
                      ? 'bg-navy/80 border border-electric/20 hover:border-electric/40' 
                      : 'bg-white border border-gray-200 hover:border-electric/40 shadow-lg'
                    } hover:shadow-2xl hover:shadow-electric/10 hover:scale-[1.02]`}
                >
                  {/* Freelance Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                    Freelance
                  </div>

                  {/* Project Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-navy'}`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techIcons.map((TechIcon, idx) => (
                      <span
                        key={idx}
                        className={`p-1.5 rounded-lg transition-all duration-300
                          ${isDark 
                            ? 'bg-white/5 hover:bg-white/10' 
                            : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                      >
                        <TechIcon className={`w-4 h-4 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${isDark 
                            ? 'bg-electric/10 text-cyan border border-electric/20' 
                            : 'bg-electric/5 text-electric border border-electric/20'
                          }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${isDark 
                            ? 'bg-white/5 text-slate' 
                            : 'bg-gray-100 text-gray-600'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        ${isDark 
                          ? 'bg-white/5 text-slate hover:bg-white/10 hover:text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-navy'
                        }`}
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                               bg-gradient-to-r from-electric to-cyan text-white
                               hover:shadow-lg hover:shadow-electric/30 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/nainanjali113"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
              ${isDark 
                ? 'border border-electric/30 text-slate hover:text-white hover:border-electric/60' 
                : 'border border-gray-300 text-gray-600 hover:text-navy hover:border-electric/60'
              }`}
          >
            <FaGithub className="w-5 h-5" />
            View All Projects on GitHub
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}