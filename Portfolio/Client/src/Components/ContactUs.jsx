import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaUser,
    FaComment,
    FaCheckCircle,
    FaSpinner
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function ContactUs() {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'nainanjali113@gmail.com',
            href: 'mailto:nainanjali113@gmail.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 9034155632',
            href: 'tel:+919034155632',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Narwana, Jind, Haryana, India',
            href: '#',
            color: 'from-red-500 to-orange-500'
        }
    ];

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/nainanjali113', label: 'GitHub', color: 'hover:text-gray-400' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anjani-nain-465292389/', label: 'LinkedIn', color: 'hover:text-blue-500' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

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

    return (
        <section id="contact" className={`py-20 ${isDark ? 'bg-navy' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                        Have a question or want to work together? Let's connect!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className={`p-6 rounded-2xl ${isDark ? 'bg-navy/80 border border-electric/20' : 'bg-white border border-gray-200 shadow-lg'}`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy'}`}>
                                Contact Information
                            </h3>
                            <p className={`text-sm mb-6 ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                                Feel free to reach out through any of the following channels.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={info.href}
                                            target={info.label === 'Location' ? '_self' : '_blank'}
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 5 }}
                                            className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300
                                                ${isDark
                                                    ? 'hover:bg-white/5 border border-transparent hover:border-electric/20'
                                                    : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-medium ${isDark ? 'text-slate' : 'text-gray-500'}`}>
                                                    {info.label}
                                                </p>
                                                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-navy'}`}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className={`p-6 rounded-2xl ${isDark ? 'bg-navy/80 border border-electric/20' : 'bg-white border border-gray-200 shadow-lg'}`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy'}`}>
                                Connect With Me
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-3 rounded-xl transition-all duration-300
                                                ${isDark
                                                    ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                                                } ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            <Icon className={`w-6 h-6 ${isDark ? 'text-slate' : 'text-gray-600'}`} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div
                            variants={itemVariants}
                            className={`p-4 rounded-2xl ${isDark ? 'bg-navy/80 border border-green-500/20' : 'bg-white border border-green-500/20 shadow-lg'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <div>
                                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-navy'}`}>
                                        Available for Freelance
                                    </p>
                                    <p className={`text-xs ${isDark ? 'text-slate' : 'text-gray-500'}`}>
                                        Open to new opportunities
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className={`p-8 rounded-2xl ${isDark ? 'bg-navy/80 border border-electric/20' : 'bg-white border border-gray-200 shadow-lg'}`}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-navy'}`}>
                                Send Me a Message
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                                        Message Sent! 🎉
                                    </h3>
                                    <p className={`text-sm mt-2 ${isDark ? 'text-slate' : 'text-gray-600'}`}>
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                                                Your Name
                                            </label>
                                            <div className="relative">
                                                <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-slate' : 'text-gray-400'}`} />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300
                                                        ${isDark
                                                            ? 'bg-navy/60 border border-electric/20 focus:border-electric text-white'
                                                            : 'bg-gray-50 border border-gray-200 focus:border-electric text-navy'
                                                        } focus:outline-none focus:ring-2 focus:ring-electric/20`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                                                Your Email
                                            </label>
                                            <div className="relative">
                                                <FaEnvelope className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-slate' : 'text-gray-400'}`} />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300
                                                        ${isDark
                                                            ? 'bg-navy/60 border border-electric/20 focus:border-electric text-white'
                                                            : 'bg-gray-50 border border-gray-200 focus:border-electric text-navy'
                                                        } focus:outline-none focus:ring-2 focus:ring-electric/20`}
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl transition-all duration-300
                                                ${isDark
                                                    ? 'bg-navy/60 border border-electric/20 focus:border-electric text-white'
                                                    : 'bg-gray-50 border border-gray-200 focus:border-electric text-navy'
                                                } focus:outline-none focus:ring-2 focus:ring-electric/20`}
                                            placeholder="Project Discussion"
                                        />
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate' : 'text-gray-700'}`}>
                                            Message
                                        </label>
                                        <div className="relative">
                                            <FaComment className={`absolute left-3 top-3 ${isDark ? 'text-slate' : 'text-gray-400'}`} />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300
                                                    ${isDark
                                                        ? 'bg-navy/60 border border-electric/20 focus:border-electric text-white'
                                                        : 'bg-gray-50 border border-gray-200 focus:border-electric text-navy'
                                                    } focus:outline-none focus:ring-2 focus:ring-electric/20 resize-none`}
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 rounded-xl font-medium text-white
                                            bg-gradient-to-r from-electric to-cyan
                                            hover:shadow-lg hover:shadow-electric/30
                                            transition-all duration-300 flex items-center justify-center gap-2
                                            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FaSpinner className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}