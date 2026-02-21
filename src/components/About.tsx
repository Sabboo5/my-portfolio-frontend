import { Code, Palette, Server, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../utils/data';


const highlights = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented code following best practices',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Focus',
    description: 'Creating intuitive, accessible, and visually appealing interfaces',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Full-Stack',
    description: 'Building complete solutions from database to frontend',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance',
    description: 'Optimizing applications for speed and scalability',
  },
];

export default function About() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-900/30">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto section-subtitle">
              Get to know more about who I am and what drives my passion for software development
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image/Visual */}
            <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Main image container */}
                <div className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20">
                  <div className="p-8 bg-dark-800 rounded-xl md:p-12">
                    <div className="grid grid-cols-2 gap-4">
                      {highlights.map((item, index) => (
                        <div
                          key={item.title}
                          className={`card text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                          style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-primary-500/10 text-primary-400">
                            {item.icon}
                          </div>
                          <h3 className="mb-1 text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="text-xs leading-relaxed text-dark-400">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute w-24 h-24 rounded-full -z-10 -top-4 -left-4 bg-primary-500/20 blur-2xl" />
                <div className="absolute w-32 h-32 rounded-full -z-10 -bottom-4 -right-4 bg-cyan-500/20 blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                A passionate developer who loves to create
              </h3>

              <div className="space-y-4 leading-relaxed text-dark-300">
                <p>
                  {personalInfo.bio}
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing my knowledge through
                  technical writing and mentoring fellow students.
                </p>
                <p>
                  I believe in writing clean, efficient code and always strive to learn
                  new skills that help me grow as a developer. My goal is to create
                  software that makes a positive impact on people's lives.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-dark-700">
                <div>
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-dark-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">0+</div>
                  <div className="text-sm text-dark-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-dark-400">Technologies</div>
                </div>
              </div>

              {/* CTA */}


        <div className="mt-8">
        <a
        
          href={personalInfo.resumeUrl}
          download="Sebona-Misgana-Kebede-CV.pdf" // forces download
          className="btn-primary"
        >
          Download Resume
        </a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
