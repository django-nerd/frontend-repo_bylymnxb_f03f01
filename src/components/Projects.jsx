import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Neon Mesh UI',
    description: 'A GPU-accelerated interface with dynamic grid shaders and tactile interactions.',
    icon: <Zap className="h-5 w-5 text-yellow-300" />,
    tags: ['WebGL', 'Shaders', 'React'],
    link: '#',
  },
  {
    title: 'Generative Portfolio',
    description: 'A generative art-driven portfolio where each visit creates a new composition.',
    icon: <Rocket className="h-5 w-5 text-purple-300" />,
    tags: ['Three.js', 'Art', 'Animations'],
    link: '#',
  },
  {
    title: 'Tooling Suite',
    description: 'CLI + web tools for rapid prototyping and component scaffolding.',
    icon: <Code className="h-5 w-5 text-yellow-300" />,
    tags: ['Node', 'DX', 'Automation'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold">My Projects</h3>
        <p className="mt-3 text-white/70 max-w-2xl">A selection of builds that blend performance, creativity, and craft.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
                  {p.icon}
                </div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-purple-500/40 bg-purple-500/10 px-2 py-1 text-purple-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(250,204,21,0.35)' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
