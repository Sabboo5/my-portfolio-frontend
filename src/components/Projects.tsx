import { ExternalLink, Github, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../utils/data';
import type { Project } from '../types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group card overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative mb-6 -mx-6 -mt-6 overflow-hidden">
        <div className="aspect-video bg-dark-800">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent group-hover:opacity-100">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors rounded-full bg-dark-800/80 backdrop-blur-sm hover:bg-primary-500"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white transition-colors rounded-full bg-dark-800/80 backdrop-blur-sm hover:bg-primary-500"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute flex items-center gap-1 px-3 py-1 text-xs font-medium text-white rounded-full top-4 left-4 bg-primary-500/90 backdrop-blur-sm">
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div>
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-dark-400 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 font-mono text-xs rounded bg-dark-800 text-dark-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links for mobile */}
      <div className="flex gap-4 pt-4 mt-4 border-t border-dark-700 md:hidden">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors text-dark-400 hover:text-primary-400"
        >
          <Github size={16} />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors text-dark-400 hover:text-primary-400"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-900/30">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto section-subtitle">
              A selection of my recent work showcasing my skills in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/Sabboo5"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 btn-secondary"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
