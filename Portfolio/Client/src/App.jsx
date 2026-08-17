import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen dark:bg-navy bg-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <ContactUs />
      <Footer />
    </div>
  )
}
