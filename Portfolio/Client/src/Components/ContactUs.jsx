import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
  FiMessageCircle
} from 'react-icons/fi';

export default function ContactUs() {
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

  // Contact Information
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "nainanjali113@gmail.com",
      link: "mailto:nainanjali113@gmail.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 9034155632",
      link: "tel:+919034155632"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Narwana, Jind, Haryana, India",
      link: "https://maps.google.com"
    }
  ];

  // Social Links
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: "https://github.com/nainanjali113", 
      label: "GitHub" 
    },
    { 
      icon: FiLinkedin, 
      href: "https://www.linkedin.com/in/anjani-nain-465292389/", 
      label: "LinkedIn" 
    }
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1a1a1a] mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-4 tracking-tight">
              Contact <span className="text-[#0a0a0a] dark:text-white">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Let's connect!
            </p>
          </motion.div>

          {/* Main Grid - 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-gray-200 dark:border-[#1a1a1a] h-full">
                <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.title === "Location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#0a0a0a] transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-white dark:bg-[#0a0a0a] group-hover:bg-gray-100 dark:group-hover:bg-[#2a2a2a] transition-colors">
                        <info.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {info.title}
                        </p>
                        <p className="text-sm font-semibold text-[#0a0a0a] dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200 dark:border-[#1a1a1a]"></div>

                {/* Social Links */}
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                    Connect with me on social media
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-lg bg-white dark:bg-[#0a0a0a] text-gray-600 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge - Animation Removed */}
                <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Available for Freelance Work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-gray-200 dark:border-[#1a1a1a] h-full">
                <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-lg border border-gray-200 dark:border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Email
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-lg border border-gray-200 dark:border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <div className="relative">
                      <FiMessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-lg border border-gray-200 dark:border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all text-sm"
                        placeholder="Let's work together"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-4 h-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-lg border border-gray-200 dark:border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all resize-none text-sm"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] rounded-lg font-medium hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white dark:border-[#0a0a0a] border-t-transparent"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm text-center"
                    >
                      ✅ Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}