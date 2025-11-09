import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-60" style={{ background: 'radial-gradient(circle at 50% 50%, #a855f7, transparent 60%)' }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-60" style={{ background: 'radial-gradient(circle at 50% 50%, #facc15, transparent 60%)' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32">
        <header className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="text-white/80">Joseph's</span>{' '}
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-white/80 hover:text-yellow-300 transition">About</a>
            <a href="#projects" className="text-white/80 hover:text-yellow-300 transition">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-yellow-300 transition">Contact</a>
          </nav>
        </header>

        <div className="mt-16 md:mt-28 max-w-3xl">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-yellow-300">Digital Creator • Engineer • Designer</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Building futuristic, human-centered experiences.
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl">
            Welcome to my digital world — a blend of technology, art, and storytelling. Scroll to explore my work, process, and how to collaborate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-3 font-medium text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.7)] transition shadow-yellow-300/40"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/60 bg-purple-500/10 px-5 py-3 font-medium text-white hover:bg-purple-500/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
