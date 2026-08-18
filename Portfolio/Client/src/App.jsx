import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Footer from './Components/Footer.jsx';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col select-none">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <Skills />
                    <Projects />
                    <Experience />
                    <ContactUs />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;