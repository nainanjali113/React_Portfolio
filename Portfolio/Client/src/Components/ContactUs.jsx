// src/Components/ContactUs.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle,
  FiAward
} from 'react-icons/fi';

export default function ContactUs() {
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

  // Contact Information
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "nainanjali113@gmail.com",
      link: "mailto:nainanjali113@gmail.com",
      color: "hover:border-cyan-400 dark:hover:border-cyan-400"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 9034155632",
      link: "tel:+919034155632",
      color: "hover:border-green-400 dark:hover:border-green-400"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Narwana, Jind, Haryana, India",
      link: "https://maps.google.com",
      color: "hover:border-blue-400 dark:hover:border-blue-400"
    }
  ];

  // Social Links
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: "https://github.com/nainanjali113", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: FiLinkedin, 
      href: "https://www.linkedin.com/in/anjani-nain-465292389/", 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    }
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
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
              <FiMessageSquare className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] dark:text-white mb-3 tracking-tight">
              Contact <span className="text-[#0a0a0a] dark:text-white">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Let's connect!
            </p>
          </motion.div>

          {/* Main Grid - 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white mb-6 flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.title === "Location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 6, scale: 1.01 }}
                      className={`flex items-start gap-4 p-3.5 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] ${info.color} transition-all duration-300 group hover:shadow-md`}
                    >
                      <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {info.title}
                        </p>
                        <p className="text-sm font-semibold text-[#0a0a0a] dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200 dark:border-[#1a1a1a]"></div>

                {/* Social Links - ENHANCED */}
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.92 }}
                        className={`p-3.5 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] text-gray-600 dark:text-gray-400 ${social.color} hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-md`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge - ENHANCED with animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800 text-center"
                >
                  <div className="flex items-center justify-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Available for Freelance Work
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-[#0a0a0a] dark:text-white mb-6 flex items-center gap-2">
                  <FiMessageCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          data-error={!!errors.name}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-xl border ${
                            errors.name ? 'border-red-400 dark:border-red-500 focus:ring-red-400' : 'border-gray-200 dark:border-[#1a1a1a] focus:ring-gray-400 dark:focus:ring-gray-600'
                          } focus:outline-none focus:ring-2 transition-all text-sm`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-xs text-red-500 flex items-center gap-1"
                          >
                            <FiAlertCircle className="w-3 h-3" />
                            {errors.name}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          data-error={!!errors.email}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-xl border ${
                            errors.email ? 'border-red-400 dark:border-red-500 focus:ring-red-400' : 'border-gray-200 dark:border-[#1a1a1a] focus:ring-gray-400 dark:focus:ring-gray-600'
                          } focus:outline-none focus:ring-2 transition-all text-sm`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-xs text-red-500 flex items-center gap-1"
                          >
                            <FiAlertCircle className="w-3 h-3" />
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiMessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        data-error={!!errors.subject}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-xl border ${
                          errors.subject ? 'border-red-400 dark:border-red-500 focus:ring-red-400' : 'border-gray-200 dark:border-[#1a1a1a] focus:ring-gray-400 dark:focus:ring-gray-600'
                        } focus:outline-none focus:ring-2 transition-all text-sm`}
                        placeholder="Let's work together"
                      />
                      {errors.subject && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-xs text-red-500 flex items-center gap-1"
                        >
                          <FiAlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3.5 top-3.5 text-gray-400 dark:text-gray-500 w-4 h-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        data-error={!!errors.message}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white rounded-xl border ${
                          errors.message ? 'border-red-400 dark:border-red-500 focus:ring-red-400' : 'border-gray-200 dark:border-[#1a1a1a] focus:ring-gray-400 dark:focus:ring-gray-600'
                        } focus:outline-none focus:ring-2 transition-all resize-none text-sm`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-xs text-red-500 flex items-center gap-1"
                        >
                          <FiAlertCircle className="w-3 h-3" />
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button - ENHANCED */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
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

                  {/* Success/Error Message - ENHANCED */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="p-3.5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm text-center flex items-center justify-center gap-2"
                      >
                        <FiCheckCircle className="w-5 h-5" />
                        Thank you! Your message has been sent successfully.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}