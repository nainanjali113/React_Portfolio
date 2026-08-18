// src/Components/Skills.jsx - Enhanced Headline
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiShield,
  FiCode,
  FiCpu,
  FiCloud,
  FiLock,
  FiZap,
  FiTrendingUp,
  FiTool,
  FiKey,
  FiEye,
  FiUserCheck,
  FiMessageSquare
} from 'react-icons/fi';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaShieldAlt
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiNginx,
  SiKubernetes,
  SiFirebase,
  SiGraphql
} from 'react-icons/si';
import { AiOutlineMessage, AiOutlineRobot } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { MdOutlineChat } from 'react-icons/md';

export default function Skills() {
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

  // Cyber Security Skills
  const cyberSecuritySkills = [
    { name: "Network Security", icon: FiShield },
    { name: "Ethical Hacking", icon: FiLock },
    { name: "Cryptography", icon: FiKey },
    { name: "Security Auditing", icon: FiEye },
    { name: "Penetration Testing", icon: FiZap },
    { name: "Security Compliance", icon: FiUserCheck },
    { name: "Threat Analysis", icon: FiTrendingUp },
    { name: "Vulnerability Assessment", icon: FaShieldAlt }
  ];

  // MERN Stack Skills
  const mernSkills = [
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "React.js", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer }
  ];

  // Prompt Engineering Skills
  const promptEngineeringSkills = [
    { name: "Prompt Optimization", icon: AiOutlineMessage },
    { name: "LLM Fine-tuning", icon: AiOutlineRobot },
    { name: "AI/ML Integration", icon: FiCpu },
    { name: "ChatGPT API", icon: MdOutlineChat },
    { name: "AI Model Deployment", icon: FiCloud },
    { name: "Natural Language Processing", icon: BsChatDots }
  ];

  // Additional Skills
  const additionalSkills = [
    { name: "Python", icon: FaPython },
    { name: "AWS Cloud", icon: FaAws },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Nginx", icon: SiNginx },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Firebase", icon: SiFirebase },
    { name: "GraphQL", icon: SiGraphql }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header - Enhanced Headline */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                My Skills
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-4 tracking-tight">
              What I <span className="text-[#0a0a0a] dark:text-white">Bring</span> to the <span className="text-[#0a0a0a] dark:text-white">Table</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning Cyber Security, Full Stack Development, and AI Integration
            </p>
          </motion.div>

          {/* Cyber Security Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiShield className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white">
                Cyber Security
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Security Specialist
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cyberSecuritySkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                      <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MERN Stack Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiCode className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white">
                Web Development (MERN Stack)
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Full Stack
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {mernSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                      <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prompt Engineering Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiCpu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white">
                Prompt Engineering
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                AI Integration
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {promptEngineeringSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                      <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiTool className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white">
                Additional Skills
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Tools & Technologies
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                      <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary Cards */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <FiShield className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">Cyber Security</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                8+ specialized security skills
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <FiCode className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">MERN Stack</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                8+ full stack technologies
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center">
              <FiCpu className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">Prompt Engineering</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                6+ AI integration skills
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}