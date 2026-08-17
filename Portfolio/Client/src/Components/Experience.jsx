import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaCode, 
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaRocket,
  FaBrain,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaLock,
  FaGitAlt,
  FaCloud,
  FaDesktop,
  FaFileAlt,
  FaCertificate,
  FaStar,
  FaTrophy,
  FaMicrosoft,
  FaClock,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiPostgresql,
  SiDocker
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      id: 1,
      title: 'Diploma in Computer Applications (DCA)',
      organization: 'Hartron Skill Centre, Kaithal',
      location: 'Kaithal, Haryana, India',
      type: 'Education',
      period: 'Jul 2024 - Sep 2025',
      duration: '1 Year',
      icon: FaDesktop,
      color: 'from-yellow-500 to-orange-500',
      description: [
        'Completed comprehensive Diploma in Computer Applications with excellent grades',
        'Mastered computer fundamentals, office automation, and programming basics',
        'Gained hands-on experience with database management systems',
        'Developed practical skills in internet applications and web technologies'
      ],
      skills: [
        'Computer Fundamentals', 'MS Office Suite', 'Programming Basics', 
        'Database Management', 'Internet Applications', 'Typing Skills',
        'Operating Systems', 'Computer Networking'
      ],
      techIcons: [FaMicrosoft, FaFileAlt, FaDatabase, FaDesktop, FaServer]
    },
    {
      id: 2,
      title: 'Cyber Security & Web Development Course',
      organization: 'Hartron Advanced Skill Centre',
      location: 'India',
      type: 'Education',
      period: 'Feb 2025 - Present',
      duration: '1.5 Years',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-500',
      description: [
        'Advanced training in Cyber Security fundamentals and ethical hacking techniques',
        'Comprehensive MERN Stack development with real-world project experience',
        'Hands-on penetration testing, vulnerability assessment, and security auditing',
        'Built secure web applications implementing industry best practices'
      ],
      skills: [
        'Cyber Security', 'Ethical Hacking', 'MERN Stack', 'Penetration Testing',
        'Network Security', 'Security Auditing', 'Vulnerability Assessment',
        'Secure Coding Practices'
      ],
      techIcons: [FaShieldAlt, FaCode, FaReact, FaNodeJs, SiMongodb, SiExpress, FaLock]
    },
    {
      id: 3,
      title: 'Freelance Full Stack Developer',
      organization: 'Self-Employed / Freelance',
      location: 'Remote (Global)',
      type: 'Freelance',
      period: 'Mar 2025 - Present',
      duration: 'Ongoing',
      icon: FaLaptopCode,
      color: 'from-purple-500 to-pink-500',
      description: [
        'Developing full-stack web applications for diverse clients using MERN Stack',
        'Implementing robust security measures and conducting penetration testing',
        'Building responsive, scalable, and high-performance applications',
        'Providing technical consultation, project management, and client support'
      ],
      skills: [
        'Full Stack Development', 'MERN Stack', 'API Development', 'Database Design',
        'Security Implementation', 'Project Management', 'Client Communication',
        'Performance Optimization'
      ],
      techIcons: [FaReact, FaNodeJs, SiMongodb, SiExpress, FaShieldAlt, FaCloud, FaGitAlt]
    }
  ];

  const achievements = [
    {
      icon: FaCertificate,
      label: 'DCA Certified',
      value: 'Hartron Certified'
    },
    {
      icon: FaShieldAlt,
      label: 'Cyber Security Certified',
      value: 'In Progress'
    },
    {
      icon: FaTrophy,
      label: 'Projects Delivered',
      value: '10+'
    },
    {
      icon: FaStar,
      label: 'Happy Clients',
      value: '5+'
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
    <section id="experience" className={`py-20 ${isDark ? 'bg-navy' : 'bg-gray-50'}`}>
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
              Experience & Education
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate' : 'text-gray-600'}`}>
            My journey in Computer Applications, Cyber Security, Web Development, and Freelancing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan mx-auto mt-4 rounded-full" />
          
          {/* Timeline Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-navy/60' : 'bg-white'} border border-electric/20`}>
              <FaClock className="text-electric" />
              <span className={`text-sm ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                <span className="font-bold text-electric">3</span> Experiences
              </span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-navy/60' : 'bg-white'} border border-cyan/20`}>
              <FaCheckCircle className="text-cyan" />
              <span className={`text-sm ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                <span className="font-bold text-cyan">2</span> Certifications
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with Gradient */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 
            ${isDark ? 'bg-gradient-to-b from-electric via-cyan to-purple-500' : 'bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400'}`} 
          />
          
          {/* Decorative dots on timeline */}
          <div className="absolute left-4 md:left-1/2 top-1/4 w-2 h-2 rounded-full bg-electric opacity-50" />
          <div className="absolute left-4 md:left-1/2 top-1/2 w-2 h-2 rounded-full bg-cyan opacity-50" />
          <div className="absolute left-4 md:left-1/2 top-3/4 w-2 h-2 rounded-full bg-purple-500 opacity-50" />

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0
                    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot with Pulse Animation */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
                    w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} 
                    border-4 ${isDark ? 'border-navy' : 'border-white'} 
                    shadow-lg shadow-electric/30 z-10 flex items-center justify-center
                    animate-pulse`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Connecting Line from dot to card */}
                  <div className={`absolute left-10 md:hidden top-4 w-8 h-0.5 
                    ${isDark ? 'bg-electric/30' : 'bg-gray-300'}`} />

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 
                    ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`p-6 rounded-2xl transition-all duration-300 relative overflow-hidden
                        ${isDark 
                          ? 'bg-navy/80 border border-electric/20 hover:border-electric/40' 
                          : 'bg-white border border-gray-200 hover:border-electric/40 shadow-lg'
                        } hover:shadow-2xl hover:shadow-electric/20`}>
                      
                      {/* Background Glow Effect */}
                      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full 
                        bg-gradient-to-r ${exp.color} opacity-5 blur-2xl`} />
                      
                      {/* Type Badge */}
                      <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-3 shadow-lg
                        ${exp.type === 'Education' 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        }`}>
                        {exp.type}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-navy'}`}>
                        {exp.title}
                      </h3>

                      {/* Organization */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                        <FaBriefcase className={`w-4 h-4 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                        <span className={`font-medium ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                          {exp.organization}
                        </span>
                      </div>

                      {/* Location & Period */}
                      <div className={`flex flex-wrap gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className={`flex items-center gap-1 text-sm ${isDark ? 'text-slate' : 'text-gray-500'}`}>
                          <FaMapMarkerAlt className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className={`flex items-center gap-1 text-sm ${isDark ? 'text-slate' : 'text-gray-500'}`}>
                          <FaCalendarAlt className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className={`flex items-center gap-1 text-sm px-2 py-0.5 rounded-full
                          ${isDark ? 'bg-electric/20 text-cyan' : 'bg-electric/10 text-electric'}
                          font-medium`}>
                          <FaClock className="w-3 h-3" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${isEven ? 'md:text-right' : ''}`}>
                        {exp.description.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`text-sm flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}
                              ${isDark ? 'text-slate' : 'text-gray-600'}`}
                          >
                            <FaArrowRight className={`w-3 h-3 mt-1 flex-shrink-0 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Icons */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.techIcons.map((TechIcon, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.3, rotate: 10, y: -3 }}
                            className={`p-2 rounded-lg transition-all duration-300
                              ${isDark 
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                                : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                              }`}
                          >
                            <TechIcon className={`w-4 h-4 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                          </motion.span>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className={`flex flex-wrap gap-2 mt-3 ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.skills.slice(0, 5).map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
                              ${isDark 
                                ? 'bg-electric/10 text-cyan border border-electric/20 hover:bg-electric/20' 
                                : 'bg-electric/5 text-electric border border-electric/20 hover:bg-electric/10'
                              }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                        {exp.skills.length > 5 && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium
                            ${isDark 
                              ? 'bg-white/5 text-slate' 
                              : 'bg-gray-100 text-gray-600'
                            }`}>
                            +{exp.skills.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Experience Number Badge */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full 
                        bg-gradient-to-r ${exp.color} flex items-center justify-center
                        text-white text-xs font-bold shadow-lg`}>
                        {exp.id}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievements / Stats with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-6 text-center rounded-xl relative overflow-hidden
                  ${isDark 
                    ? 'bg-navy/80 border border-electric/20 hover:border-electric/40' 
                    : 'bg-white border border-gray-200 hover:border-electric/40 shadow-lg'
                  } transition-all duration-300`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-electric/5 to-cyan/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300`} />
                
                <Icon className={`w-10 h-10 mx-auto mb-3 ${isDark ? 'text-cyan' : 'text-electric'}`} />
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                  {achievement.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                  {achievement.label}
                </div>
                
                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 
                  bg-gradient-to-r from-electric to-cyan rounded-full`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-8 p-4 rounded-xl
            ${isDark ? 'bg-navy/60 border border-electric/20' : 'bg-white border border-gray-200 shadow-md'}"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg" />
            <span className={`text-sm font-medium ${isDark ? 'text-slate' : 'text-gray-600'}`}>DCA Course</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg" />
            <span className={`text-sm font-medium ${isDark ? 'text-slate' : 'text-gray-600'}`}>Cyber Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg" />
            <span className={`text-sm font-medium ${isDark ? 'text-slate' : 'text-gray-600'}`}>Freelance</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="w-4 h-4 text-electric" />
            <span className={`text-sm font-medium ${isDark ? 'text-slate' : 'text-gray-600'}`}>Total: 3 Years+</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}