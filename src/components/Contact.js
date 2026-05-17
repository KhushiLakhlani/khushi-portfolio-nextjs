'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { gradientText } from './Styles'

export default function Contact() {
  const links = [
    { label: "Email", value: "lakhlani.k@northeastern.edu", href: "mailto:lakhlani.k@northeastern.edu",
      icon: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
    { label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com/in/khushilakhlani", external: true,
      icon: <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label: "GitHub", value: "View my projects", href: "https://github.com/KhushiLakhlani", external: true,
      icon: <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
  ]

  return (
    <section id="contact" style={{ padding: '112px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', opacity: 0.15, pointerEvents: 'none', background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Let&apos;s connect</h2>
          <p style={{ fontSize: 18, marginBottom: 56, maxWidth: 480, color: 'var(--text-secondary)' }}>
            Open to new opportunities, collaborations, and conversations about data, engineering, and building things that matter.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {links.map((link, i) => (
            <ScrollReveal key={link.label} delay={i + 1}>
              <GlassCard as="a" href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}
                style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: 'linear-gradient(135deg, #ec4899, #a855f7)', color: 'white', transition: 'transform 0.3s' }}>
                  {link.icon}
                </div>
                <p style={{ fontWeight: 600, marginBottom: 4, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{link.label}</p>
                <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>{link.value}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p style={{ textAlign: 'center', fontSize: 14, marginTop: 40, color: 'var(--text-tertiary)' }}>
            Based in Boston, MA · Open to relocation
          </p>
        </ScrollReveal>
      </div>

      <footer style={{ maxWidth: '56rem', margin: '96px auto 0', paddingTop: 32, borderTop: '1px solid var(--glass-border)', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>© 2025 Khushi Lakhlani</p>
        <p style={{ fontSize: 14, ...gradientText }}>Built with Next.js & Tailwind CSS</p>
      </footer>
    </section>
  )
}