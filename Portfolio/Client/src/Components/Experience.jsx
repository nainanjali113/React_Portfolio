import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiBriefcase,
  FiShield,
  FiClock,
  FiBookOpen,
  FiAward
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
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
      period: "3 Sept 2025 - Present",
      location: "Kaithal, Haryana",
      icon: FiShield,
      percentage: "1.5 Years",
      description: "Advanced training in Cyber Security and Full Stack Web Development with MERN Stack, specializing in secure application development.",
      achievements: ["MERN Stack", "Web Security", "Prompt Engineering", "Ethical Hacking"]
    }
  ];

  // Work Experience Data
  const workExperience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "20 March 2026 - Present",
      location: "Remote",
      icon: FiBriefcase,
      description: "Building custom web applications for clients using MERN Stack with integrated security features.",
      achievements: ["MERN Stack Development", "Security Implementation", "Client Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
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
                My Journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-4 tracking-tight">
              Education & <span className="text-[#0a0a0a] dark:text-white">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My educational background and professional journey in Cyber Security and Web Development
            </p>
          </motion.div>

          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiBookOpen className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Education
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Learning Journey
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                          <edu.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">
                            {edu.title}
                          </h4>
                          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <FiMapPin className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {edu.location}
                      </span>
                    </div>

                    {edu.percentage && (
                      <div className="inline-flex items-center gap-2 px-2 py-1 bg-gray-200 dark:bg-[#0a0a0a] rounded-full mb-3">
                        <FiAward className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {edu.percentage}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a]"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                <FiBriefcase className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                Work Experience
              </h3>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-full">
                Professional Journey
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {workExperience.map((work) => (
                <motion.div
                  key={work.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                          <work.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#0a0a0a] dark:text-white">
                            {work.title}
                          </h4>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {work.company}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                        {work.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {work.location}
                        </span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">
                          ● Active
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {work.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-[#1a1a1a]"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">4</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Courses Completed</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">1.5</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Years of Training</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
              <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">4</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Certifications</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">✓</div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Currently Working</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}