'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { gradientText, tagPink, tagPurple, tagBlue } from './styles'

export default function About() {
  const journey = [
    { flag: '🇬🇧', title: 'United Kingdom', detail: 'BSc Computer Science (First Class Honours) · Intel Corporation · VP, Women in Engineering Society' },
    { flag: '🇮🇳', title: 'India', detail: 'Data Analyst at EY-Parthenon · 44K+ rows processed · 28% forecast accuracy improvement' },
    { flag: '🇺🇸', title: 'United States', detail: 'MS Information Systems at Northeastern · Instructional Assistant' },
  ]

  return (
    <section id="about" style={{ padding: '112px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-150px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>About</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 48, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            The why behind the work
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <GlassCard style={{ padding: '32px 40px', marginBottom: 32 }} hover={false}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              <p>I&apos;ve always been curious about the <span style={{ color: 'var(--text-primary)' }}>why behind the technology</span> — not just how it works, but how it helps organizations make strategic decisions that drive real impact.</p>
              <p>At <span style={gradientText}>Intel</span>, I supported the deployment of 1,200+ VDI cloud instances ($3.2M value) and led automation initiatives that generated <span style={{ color: 'var(--text-primary)' }}>$6.8M in additional value</span> while reducing manual workload by 70%.</p>
              <p>At <span style={gradientText}>EY-Parthenon</span>, I built Python pipelines that eliminated 10 hours of weekly manual analysis, reduced data errors by 35%, and improved forecast accuracy by <span style={{ color: 'var(--text-primary)' }}>28%</span>.</p>
              <p>Beyond technical work, I served as Vice President of the Women in Engineering Society — building partnerships between academia and industry to make technology careers more accessible.</p>
            </div>
          </GlassCard>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {journey.map((item, i) => (
            <ScrollReveal key={item.flag} delay={i + 1}>
              <GlassCard style={{ padding: 24, height: '100%' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.flag}</div>
                <p style={{ fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{item.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.detail}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={1}>
          <GlassCard style={{ marginTop: 32, padding: 24, borderLeft: '2px solid #a855f7' }} hover={false}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              I&apos;m seeking opportunities to tackle complex data challenges — engineering scalable pipelines, building analytics platforms, or turning raw data into strategic insights.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              <span style={tagPink}>Data Engineering</span>
              <span style={tagPurple}>Software Engineering</span>
              <span style={tagBlue}>Machine Learning</span>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}