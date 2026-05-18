'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'

export default function Education() {
  const schools = [
    {
      name: "Northeastern University",
      degree: "MS · Information Systems",
      period: "Sep 2025 – December 2027",
      location: "Boston, MA",
      gpa: "3.73",
      accent: '#ec4899',
      logo: '/neu-logo.png',
      logoFallback: 'NEU',
    },
    {
      name: "Coventry University",
      degree: "BSc · Computer Science (First Class Honours)",
      period: "Jan 2021 – Jul 2024",
      location: "Coventry, UK",
      accent: '#3b82f6',
      logo: '/coventry-logo.png',
      logoFallback: 'CU',
    },
  ]

  return (
    <section id="education" style={{ padding: '112px 24px' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#a855f7' }} />
            <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>
              Education
            </p>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 48, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Where I studied.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {schools.map((school, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <GlassCard style={{ padding: 0, overflow: 'hidden', borderRadius: 16 }}>
                <div style={{ display: 'flex', borderLeft: `3px solid ${school.accent}` }}>
                  <div style={{ padding: '28px 32px', display: 'flex', gap: 20, alignItems: 'flex-start', width: '100%' }}>
                    {/* Logo */}
                    <div style={{
                      width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                      background: 'var(--bg-surface-hover)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={school.logo}
                        alt={school.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14 }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentNode.innerHTML = `<span style="font-size:14px;font-weight:700;color:var(--text-secondary)">${school.logoFallback}</span>`
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', marginBottom: 4 }}>
                        {school.name}
                      </h3>
                      <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 14 }}>
                        {school.degree}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        <span style={{
                          fontSize: 13, padding: '4px 14px', borderRadius: 8,
                          border: '1px solid var(--glass-border)',
                          color: 'var(--text-secondary)', background: 'transparent',
                        }}>
                          {school.period}
                        </span>
                        {school.gpa && (
                          <span style={{
                            fontSize: 13, padding: '4px 14px', borderRadius: 8,
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-secondary)', background: 'transparent',
                          }}>
                            GPA {school.gpa}
                          </span>
                        )}
                        <span style={{
                          fontSize: 13, padding: '4px 14px', borderRadius: 8,
                          border: '1px solid var(--glass-border)',
                          color: 'var(--text-secondary)', background: 'transparent',
                        }}>
                          {school.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}