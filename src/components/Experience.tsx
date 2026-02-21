import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experiences } from '../utils/data';
import type { Experience as ExperienceType } from '../types';

function TimelineItem({ experience, index }: { experience: ExperienceType; index: number }) {
  const { ref, inView } = useScrollAnimation();
  const isWork = experience.type === 'work';

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12 last:mb-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline connector for mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-dark-700 md:hidden" />
      <div
        className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 md:hidden ${
          isWork ? 'bg-primary-500' : 'bg-cyan-500'
        }`}
      />

      {/* Content - alternating sides on desktop */}
      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
        <div className={`card ${index % 2 === 0 ? '' : ''}`}>
          {/* Icon badge */}
          <div
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
              isWork
                ? 'bg-primary-500/10 text-primary-400'
                : 'bg-cyan-500/10 text-cyan-400'
            }`}
          >
            {isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
          </div>

          {/* Title and Company */}
          <h3 className="text-xl font-semibold text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-primary-400 font-medium mb-2">
            {experience.company}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-dark-400 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.startDate} - {experience.endDate}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="text-dark-300 text-sm flex items-start gap-2"
              >
                <span className="text-primary-500 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center line with dot for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
        <div
          className={`w-4 h-4 rounded-full border-4 border-dark-950 ${
            isWork ? 'bg-primary-500' : 'bg-cyan-500'
          }`}
        />
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="text-dark-400 text-sm">Work Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-dark-400 text-sm">Education</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-dark-700 -translate-x-1/2" />

            {/* Timeline items */}
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
