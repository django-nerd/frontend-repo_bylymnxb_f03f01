import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-10 h-40 w-40 rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(circle, #a855f7, transparent 60%)' }} />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #facc15, transparent 60%)' }} />
      </div>

      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold">About Me</h3>
        <p className="mt-4 text-white/70 max-w-3xl">
          I’m Joseph — a creator who loves building immersive, accessible experiences at the intersection of code and design. My focus is on performant frontends,
          delightful micro-interactions, and systems that scale gracefully. I blend engineering with visual craft to bring bold ideas to life.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-yellow-300">Core Stack</h4>
            <p className="mt-2 text-sm text-white/70">React, TypeScript, Next.js, Tailwind, Three/Spline, FastAPI, Node</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-purple-300">Philosophy</h4>
            <p className="mt-2 text-sm text-white/70">Design with intention. Ship with craft. Measure, learn, iterate.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-yellow-300">Currently Exploring</h4>
            <p className="mt-2 text-sm text-white/70">Procedural 3D, GPU-driven UI, and AI-assisted creative tooling.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
