'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { gradientText } from './styles'

export default function Experience() {
  const experiences = [
    { company: "Northeastern University", role: "Instructional Assistant", period: "Jan 2026 — Present", location: "Boston, MA", accent: '#a855f7',
      description: ["Supporting course instruction and student learning in Information Systems program"] },
    { company: "Ernst & Young (EY-Parthenon)", role: "Data Analyst Intern", period: "Jan 2025 — Apr 2025", location: "Mumbai, India", accent: '#ec4899',
      description: [
        "Developed Python automation scripts to process 44,000+ rows of time-series manufacturing data, eliminating 10 hours weekly of manual analysis",
        "Engineered data validation and quality checks in Python, reducing data errors by 35%",
        "Designed scalable data processing pipelines using Pandas and NumPy, improving process efficiency by 18%",
        "Generated statistical forecasting models improving forecast accuracy by 28%",
      ] },
    { company: "Intel Corporation", role: "Technical Sales Specialist Intern", period: "Jul 2022 — Sep 2023", location: "Swindon, UK", accent: '#3b82f6',
      description: [
        "Supported end-to-end sales cycle deploying 1,200+ VDI cloud instances ($3.2M value)",
        "Led automation initiative generating $2M in incremental impact and $6.8M in additional value",
        "Launched automation program across 4 UK regional teams, reducing manual workload by 70%",
        "Delivered technical demos of Intel vPro Technology to partner sales teams",
        "Participated in Intel One Volunteering: raised funds for cancer awareness and led STEM sessions",
      ] },
  ]

  const leadership = [
    { role: "Vice President", org: "Women in Engineering Society", period: "Sep 2023 — Sep 2024" },
    { role: "Student Ambassador", org: "Coventry University", period: "Oct 2023 — Jul 2024" },
    { role: "Committee Member", org: "BCS, The Chartered Institute for IT", period: "Sep 2021 — Jul 2022" },
    { role: "Course Representative", org: "Coventry University Students' Union", period: "Sep 2021 — Jun 2022" },
  ]

  return (
    <section id="experience" style={{ padding: '112px 24px' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Experience</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 64, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Where I&apos;ve worked</h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <GlassCard style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${exp.accent}, transparent)` }} />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4, marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{exp.role}</h3>
                    <p style={{ marginTop: 4, ...gradientText, fontWeight: 600 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>{exp.period}</p>
                    <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>{exp.location}</p>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {exp.description.map((item, j) => (
                    <li key={j} style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ marginTop: 8, width: 6, height: 6, borderRadius: '50%', flexShrink: 0, background: exp.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ marginTop: 64 }}>
            <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>Leadership & Community</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              {leadership.map((item, i) => (
                <ScrollReveal key={i} delay={i + 1}>
                  <GlassCard style={{ padding: 20 }}>
                    <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{item.role}</p>
                    <p style={{ fontSize: 14, marginTop: 4, ...gradientText }}>{item.org}</p>
                    <p style={{ fontSize: 12, marginTop: 8, color: 'var(--text-tertiary)' }}>{item.period}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}