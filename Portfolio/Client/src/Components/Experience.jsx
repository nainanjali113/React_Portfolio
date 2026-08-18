// src/Components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiBriefcase,
  FiShield,
  FiClock,
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiUserCheck,
  FiZap
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
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

  // Education Data
  const educationData = [
    {
      id: 1,
      title: "10th Standard",
      institution: "S.D Public School, Narwana",
      period: "2020 - 2021",
      location: "Narwana, Haryana",
      icon: FaGraduationCap,
      percentage: "87.6%",
      description: "Completed 10th standard with excellent academic performance in Science & Mathematics.",
      achievements: ["Science & Mathematics", "Computer Fundamentals"]
    },
    {
      id: 2,
      title: "12th Standard",
      institution: "S.D Public School, Narwana",
      period: "2022 - 2023",
      location: "Narwana, Haryana",
      icon: FaGraduationCap,
      percentage: "62.5%",
      description: "Completed 12th standard with a focus on science stream and computer applications.",
      achievements: ["Science Stream", "Computer Applications"]
    },
    {
      id: 3,
      title: "Diploma in Computer Applications (DCA)",
      institution: "Hartron Advanced Skill Centre, Kaithal",
      period: "2024 - 2025",
      location: "Kaithal, Haryana",
      icon: FaGraduationCap,
      description: "Completed Diploma in Computer Applications with focus on fundamental computer skills, office automation, and basic programming.",
      achievements: ["Computer Fundamentals", "Office Automation", "Basic Programming", "Internet & Web Basics"]
    },
    {
      id: 4,
      title: "Cyber Security & Web Development",
      institution: "Hartron Advanced Skill Centre",
      period: "Sept 2025 - Present",
      location: "Kaithal, Haryana",
      icon: FiShield,
      duration: "1.5 Years",
      description: "Advanced training in Cyber Security and Full Stack Web Development with MERN Stack, specializing in secure application development.",
      achievements: ["MERN Stack", "Web Security", "Prompt Engineering", "Ethical Hacking"],
      isActive: true
    }
  ];

  // Work Experience Data
  const workExperience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "March 2026 - Present",
      location: "Remote",
      icon: FiBriefcase,
      description: "Building custom web applications for clients using MERN Stack with integrated security features.",
      achievements: ["MERN Stack Development", "Security Implementation", "Client Management"],
      isActive: true
    }
  ];

  // Stats for summary
  const stats = [
    { count: '4', label: 'Courses Completed', icon: FiBookOpen },
    { count: '1.5', label: 'Years of Training', icon: FiClock },
    { count: '4', label: 'Certifications', icon: FiAward },
    { count: '✓', label: 'Currently Working', icon: FiUserCheck, isActive: true }
  ];

  // Render card function - DRY
  const renderCard = (item, type) => {
    const isWork = type === 'work';
    const isActive = item.isActive || false;

    return (
      <motion.div
        key={item.id}
        variants={itemVariants}
        whileHover={{ 
          y: -6,
          transition: { type: "spring", stiffness: 400 }
        }}
        className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-xl"
      >
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0a0a0a] group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#0a0a0a] dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                  {isWork ? item.company : item.institution}
                </p>
              </div>
            </div>
            {/* Period Badge - ENHANCED */}
            <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
              isActive 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800'
                : 'bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#1a1a1a]'
            }`}>
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3 h-3" />
                {item.period}
              </span>
            </span>
          </div>

          {/* Location & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5">
              <FiMapPin className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.location}
              </span>
            </div>
            {item.percentage && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <div className="flex items-center gap-1.5">
                  <FiAward className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {item.percentage}
                  </span>
                </div>
              </>
            )}
            {item.duration && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {item.duration}
                  </span>
                </div>
              </>
            )}
            {isActive && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Active
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Achievements/Tags - ENHANCED */}
          <div className="flex flex-wrap gap-1.5">
            {item.achievements.map((achievement, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a] hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle Background */}
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
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <FiClock className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                My Journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-3 tracking-tight">
              Education & <span className="text-[#0a0a0a] dark:text-white">Experience</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My educational background and professional journey in Cyber Security and Web Development
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]">
                <FiBookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Education
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                {educationData.length} Courses
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {educationData.map((edu) => renderCard(edu, 'education'))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]">
                <FiBriefcase className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Work Experience
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                {workExperience.length} Role
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {workExperience.map((work) => renderCard(work, 'work'))}
            </div>
          </motion.div>

          {/* Summary Stats - ENHANCED (All cards consistent) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className={`p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  stat.isActive ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10' : ''
                }`}
              >
                <div className={`text-2xl sm:text-3xl font-bold ${
                  stat.isActive ? 'text-green-600 dark:text-green-400' : 'text-[#0a0a0a] dark:text-white'
                }`}>
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center justify-center gap-1.5">
                  <stat.icon className="w-3.5 h-3.5" />
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