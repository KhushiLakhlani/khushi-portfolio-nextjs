export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-16 items-center">

        {/* Text — takes 3 cols */}
        <div className="md:col-span-3 space-y-8">
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: 'var(--text-tertiary)' }}
          >
            MS Information Systems · Northeastern University
          </p>

          <h1
            className="text-5xl md:text-7xl leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
          >
            Khushi Lakhlani
          </h1>

          <p
            className="text-xl md:text-2xl leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Data analyst and engineer building pipelines, analytics platforms, and ML systems that turn raw data into decisions.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#projects"
              className="text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-6 py-3 rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-5 pt-4">
            {[
              { href: 'https://github.com/KhushiLakhlani', label: 'GitHub', icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /> },
              { href: 'https://linkedin.com/in/khushilakhlani', label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
              { href: 'mailto:lakhlani.k@northeastern.edu', label: 'Email', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, stroke: true },
            ].map(({ href, label, icon, stroke }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label={label}
              >
                <svg className="w-[18px] h-[18px]" fill={stroke ? 'none' : 'currentColor'} stroke={stroke ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Image — takes 2 cols */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <img
                src="/profile.jpg"
                alt="Khushi Lakhlani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}