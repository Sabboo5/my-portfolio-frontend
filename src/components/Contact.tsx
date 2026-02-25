import { useRef, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo, socialLinks } from '../utils/data';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, inView } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sebonamisgana@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) throw new Error(`Network error: ${response.statusText}`);

      setStatus('success');
      formRef.current.reset(); // safely reset form
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Formsubmit error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-900/30">
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          ref={ref}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto section-subtitle">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="mb-6 text-2xl font-bold text-white">Let's work together</h3>
              <p className="mb-8 leading-relaxed text-dark-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Contact Details */}
              <div className="mb-8 space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 transition-colors text-dark-300 hover:text-primary-400"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/10 text-primary-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-dark-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-3 text-sm text-dark-500">Follow me on</p>
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
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <form ref={formRef} onSubmit={handleSubmit} className="card">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-dark-300">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-300">Email</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required className="input-field" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-dark-300">Subject</label>
                  <input type="text" id="subject" name="subject" defaultValue="Portfolio Inquiry" required className="input-field" />

                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-dark-300 mt-4">Message</label>
                  <textarea id="message" name="message" placeholder="Your message..." required rows={5} className="resize-none input-field" />
                </div>

                {/* Honeypot (invisible) */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 mb-4 text-green-400 border rounded-lg bg-green-500/10 border-green-500/30">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 mb-4 text-red-400 border rounded-lg bg-red-500/10 border-red-500/30">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full gap-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
