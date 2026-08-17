import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCode, 
  FaRobot, 
  FaReact, 
  FaNodeJs,
  FaLock,
  FaBrain,
  FaCloud,
  FaNetworkWired,
  FaUserSecret,
  FaBug,
  FaTools,
  FaDatabase,
  FaServer,
  FaProjectDiagram,
  FaMagic,
  FaAws,
  FaDocker,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTailwindcss,
  SiPython,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiDjango
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: '🛡️ Cyber Security',
      icon: FaShieldAlt,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Security Fundamentals', icon: FaLock },
        { name: 'Network Security', icon: FaNetworkWired },
        { name: 'Ethical Hacking', icon: FaUserSecret },
        { name: 'Vulnerability Assessment', icon: FaBug },
        { name: 'Penetration Testing', icon: FaTools },
        { name: 'Security Auditing', icon: FaProjectDiagram },
      ]
    },
    {
      title: '💻 Web Development (MERN Stack)',
      icon: FaCode,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux', icon: SiRedux },
        { name: 'TypeScript', icon: SiTypescript },
      ]
    },
    {
      title: '🤖 Prompt Engineering',
      icon: FaRobot,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AI Prompt Crafting', icon: FaBrain },
        { name: 'LLM Optimization', icon: FaMagic },
        { name: 'Advanced AI Interaction', icon: FaRobot },
        { name: 'Context Engineering', icon: FaCloud },
        { name: 'Few-shot Learning', icon: FaDatabase },
        { name: 'Chain of Thought', icon: FaProjectDiagram },
      ]
    }
  ];

  const tools = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },
    { name: 'REST APIs', icon: FaServer, color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getColorClass = (colorString) => {
    const colorMap = {
      'from-red-500': 'text-red-500',
      'from-green-500': 'text-green-500',
      'from-purple-500': 'text-purple-500',
    };
    const key = colorString.split(' ')[0];
    return colorMap[key] || 'text-electric';
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-navy/50' : 'bg-gray-50'}`}>
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
              Education & Expertise
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate' : 'text-gray-600'}`}>
            Combining Cyber Security, Full Stack Development, and AI Prompt Engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-navy/80 border border-electric/20 hover:border-electric/40' 
                    : 'bg-white border border-gray-200 hover:border-electric/40 shadow-lg'
                } hover:shadow-2xl hover:shadow-electric/10 hover:scale-[1.02]`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 ${getColorClass(category.color)}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List - Without Bars */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                          isDark 
                            ? 'hover:bg-white/5' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <SkillIcon className={`w-5 h-5 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                        <span className={`font-medium ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl ${
            isDark 
              ? 'bg-navy/80 border border-electric/20' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-navy'}`}>
            🛠️ Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl ${
                    isDark 
                      ? 'bg-navy/60 border border-electric/10 hover:border-electric/30' 
                      : 'bg-gray-50 border border-gray-200 hover:border-electric/30'
                  } transition-all duration-300`}
                >
                  <Icon className={`w-6 h-6 ${tool.color}`} />
                  <span className={`font-medium ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Security Tools', value: '15+', icon: FaShieldAlt },
            { label: 'Projects Completed', value: '20+', icon: FaCode },
            { label: 'AI Models', value: '10+', icon: FaRobot },
            { label: 'Happy Clients', value: '12+', icon: FaBrain },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 text-center rounded-xl ${
                  isDark 
                    ? 'bg-navy/60 border border-electric/20' 
                    : 'bg-white border border-gray-200 shadow-md'
                } transition-all duration-300`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 text-electric dark:text-cyan`} />
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}