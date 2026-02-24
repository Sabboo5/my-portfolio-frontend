import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skillGroups } from '../utils/data';
import type { SkillGroup } from '../types';

function SkillBar({ name, level = 0 }: { name: string; level?: number }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1">
        <span className="text-dark-200 text-sm font-medium">{name}</span>
        {/* <span className="text-dark-400 text-sm">{level}%</span> */}
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, inView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-dark-700">
        {group.category}
      </h3>
      <div>
        {group.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <SkillGroupCard key={group.category} group={group} index={index} />
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg font-semibold text-white mb-4">Also familiar with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Redis', 'GraphQL', 'Kubernetes', 'Jest', 'Cypress', 'Figma', 'Webpack', 'Vite'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full text-dark-300 text-sm hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
