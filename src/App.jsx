import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-black/90 border-t border-white/10 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Joseph's Portfolio • Crafted with code and curiosity.</p>
      </footer>
    </div>
  );
}

export default App;
