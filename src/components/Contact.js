export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "lakhlani.k@northeastern.edu",
      href: "mailto:lakhlani.k@northeastern.edu",
    },
    {
      label: "LinkedIn",
      value: "in/khushilakhlani",
      href: "https://linkedin.com/in/khushilakhlani",
      external: true,
    },
    {
      label: "GitHub",
      value: "KhushiLakhlani",
      href: "https://github.com/KhushiLakhlani",
      external: true,
    },
  ]

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
          Let&apos;s connect
        </h2>
        <p className="text-lg mb-14 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
          Open to new opportunities, collaborations, and conversations about data, engineering, and building things that matter.
        </p>

        {/* Links */}
        <div className="space-y-0">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between py-5 transition-colors duration-200"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div>
                <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  {link.label}
                </p>
                <p className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  {link.value}
                </p>
              </div>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--text-tertiary)' }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Location */}
        <p className="text-sm mt-10" style={{ color: 'var(--text-tertiary)' }}>
          Based in Boston, MA · Open to relocation
        </p>
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-24 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          © 2025 Khushi Lakhlani. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}