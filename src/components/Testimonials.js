'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { gradientText, btnOutline } from './styles'

export default function Testimonials() {
  const testimonials = [
    { name: "Georgios Kardaras", title: "EMEA Sales Director", company: "Intel Corporation", initials: "GK",
      text: "Throughout the entire period of our collaboration, Khushi demonstrated great professionalism and commitment. She had been always keen to learn, connect to colleagues and familiarize herself with the nature of Intel business. The tasks assigned to Khushi spanned across different areas and she always delivered high quality results.",
      linkedin: "https://linkedin.com/in/georgios-kardaras" },
    { name: "Patricia Pozuelo", title: "EMEA Partners Technical Sales Director", company: "Intel Corporation", initials: "PP",
      text: "I would like to recognize her technical skills highlighting: Knowledge on Cloud Computing Architectures, Expertise in delivering Technical Presentations, Data analysis with strong expertise, Project Management, and Proficiency in programming. Her attitude is very open and adaptable, always willing to help and learn new things.",
      linkedin: "https://linkedin.com/in/patricia-pozuelo" },
    { name: "Karolina Olszewska", title: "Consultant", company: "Kearney | Imperial College London", initials: "KO",
      text: "Khushi and I have co-led organisation of Brunel University of London's visit to Intel site. She is always on time, helpful and brings great ideas to the table. Khushi works great in teams and adapts quickly to new environments. If you happen to work with her, you can expect great quality of execution.",
      linkedin: "https://linkedin.com/in/karolina-olszewska" },
  ]

  return (
    <section id="testimonials" style={{ padding: '112px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-100px', left: '-150px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Testimonials</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>What others say</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 64 }}>From colleagues and managers I&apos;ve had the pleasure of working with.</p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <GlassCard style={{ padding: 24, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <span style={{ fontSize: 48, lineHeight: 1, marginBottom: 16, ...gradientText, fontFamily: 'Georgia, serif' }}>&ldquo;</span>
                <p style={{ fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 24, color: 'var(--text-secondary)' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--glass-border)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #ec4899, #a855f7)', flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <a href={t.linkedin} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {t.name}
                    </a>
                    <p style={{ fontSize: 12, color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</p>
                    <p style={{ fontSize: 12, ...gradientText }}>{t.company}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="https://linkedin.com/in/khushilakhlani" target="_blank" rel="noopener noreferrer"
              style={{ ...btnOutline, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              View More on LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}