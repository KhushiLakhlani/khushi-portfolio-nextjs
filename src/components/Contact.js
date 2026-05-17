'use client'

import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "lakhlani.k@northeastern.edu",
      href: "mailto:lakhlani.k@northeastern.edu",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/khushilakhlani",
      external: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/KhushiLakhlani",
      external: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-purple)' }}>
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Let&apos;s connect
          </h2>
          <p className="text-lg mb-14 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Open to new opportunities, collaborations, and conversations about data, engineering, and building things that matter.
          </p>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {links.map((link, index) => (
            <ScrollReveal key={link.label} delay={index + 1}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group glass p-6 rounded-2xl flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--gradient-primary)', color: 'white' }}
                >
                  {link.icon}
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {link.label}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{link.value}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Location */}
        <ScrollReveal>
          <p className="text-center text-sm mt-10" style={{ color: 'var(--text-tertiary)' }}>
            Based in Boston, MA · Open to relocation
          </p>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-24 pt-8 relative z-10" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © 2025 Khushi Lakhlani
          </p>
          <p className="text-sm gradient-text">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  )
}