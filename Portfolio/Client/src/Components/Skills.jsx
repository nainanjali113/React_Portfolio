// src/Components/Skills.jsx
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
  FiUserCheck,  // ✅ ADDED
  FiAward       // ✅ ADDED
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

  // Category configuration - ENHANCED
  const categories = {
    cyber: {
      icon: FiShield,
      title: "Cyber Security",
      badge: "Security Specialist",
      iconBg: "bg-gray-100 dark:bg-[#1a1a1a]",
      borderColor: "hover:border-gray-300 dark:hover:border-gray-700"
    },
    mern: {
      icon: FiCode,
      title: "Web Development (MERN Stack)",
      badge: "Full Stack",
      iconBg: "bg-gray-100 dark:bg-[#1a1a1a]",
      borderColor: "hover:border-gray-300 dark:hover:border-gray-700"
    },
    prompt: {
      icon: FiCpu,
      title: "Prompt Engineering",
      badge: "AI Integration",
      iconBg: "bg-gray-100 dark:bg-[#1a1a1a]",
      borderColor: "hover:border-gray-300 dark:hover:border-gray-700"
    },
    tools: {
      icon: FiTool,
      title: "Additional Skills",
      badge: "Tools & Technologies",
      iconBg: "bg-gray-100 dark:bg-[#1a1a1a]",
      borderColor: "hover:border-gray-300 dark:hover:border-gray-700"
    }
  };

  // Skill Data
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

  const promptEngineeringSkills = [
    { name: "Prompt Optimization", icon: AiOutlineMessage },
    { name: "LLM Fine-tuning", icon: AiOutlineRobot },
    { name: "AI/ML Integration", icon: FiCpu },
    { name: "ChatGPT API", icon: MdOutlineChat },
    { name: "AI Model Deployment", icon: FiCloud },
    { name: "Natural Language Processing", icon: BsChatDots }
  ];

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

  // DRY Render Function - ENHANCED
  const renderSkillGrid = (skills, categoryKey) => {
    const category = categories[categoryKey];
    if (!category) return null;

    return (
      <motion.div variants={itemVariants} className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${category.iconBg}`}>
            <category.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white">
            {category.title}
          </h3>
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
            {category.badge}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500 ml-auto">
            {skills.length} skills
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                transition: { type: "spring", stiffness: 400 }
              }}
              className={`group p-3 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] ${category.borderColor} transition-all duration-300 cursor-default shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-sm font-medium text-[#0a0a0a] dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle Background - Preserved */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header - ENHANCED */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <FiAward className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-3 tracking-tight">
              What I <span className="text-[#0a0a0a] dark:text-white">Bring</span> to the Table
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning Cyber Security, Full Stack Development, and AI Integration
            </p>
          </motion.div>

          {/* All Skill Sections - Using DRY function */}
          {renderSkillGrid(cyberSecuritySkills, 'cyber')}
          {renderSkillGrid(mernSkills, 'mern')}
          {renderSkillGrid(promptEngineeringSkills, 'prompt')}
          {renderSkillGrid(additionalSkills, 'tools')}

          {/* Skills Summary Cards - ENHANCED */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { 
                icon: FiShield, 
                title: "Cyber Security", 
                count: "8+", 
                label: "Specialized Security Skills"
              },
              { 
                icon: FiCode, 
                title: "MERN Stack", 
                count: "8+", 
                label: "Full Stack Technologies"
              },
              { 
                icon: FiCpu, 
                title: "Prompt Engineering", 
                count: "6+", 
                label: "AI Integration Skills"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 dark:bg-[#0a0a0a] p-3 mb-3 shadow-sm">
                  <card.icon className="w-full h-full text-gray-700 dark:text-gray-300" />
                </div>
                <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">{card.title}</h4>
                <p className="text-2xl font-bold text-[#0a0a0a] dark:text-white mt-1">
                  {card.count}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}