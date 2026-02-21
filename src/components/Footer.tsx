import { Heart } from 'lucide-react';
import { personalInfo, socialLinks, navLinks } from '../utils/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-dark-800">
      <div className="section-container">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              SM
            </a>
            <p className="max-w-xs mt-3 text-sm text-dark-400">
              {personalInfo.title} passionate about building great software and
              creating exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors text-dark-400 hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg bg-dark-800 text-dark-400 hover:bg-primary-500 hover:text-white"
                  aria-label={link.name}
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-dark-500">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-dark-800 md:flex-row">
          <p className="text-sm text-dark-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-dark-500">
            Made with <Heart size={14} className="text-red-500" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
