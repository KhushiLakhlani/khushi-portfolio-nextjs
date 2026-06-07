'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { tagPink, tagPurple, tagBlue, gradientText } from './styles'

const tc = [tagPink, tagPurple, tagBlue]

export default function Skills() {
  const categories = [
    { title: "Programming Languages", skills: ["Python", "Java", "JavaScript", "C++", "SQL", "R", "HTML/CSS"] },
    { title: "AI / ML & Data Science", skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "LangChain", "Deep Learning", "NLP", "Computer Vision"] },
    { title: "Web Development", skills: ["React", "FastAPI", "Spring Boot", "Node.js", "REST API", "Express.js"] },
    { title: "Data & Visualization", skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel", "Power Query", "Statistical Analysis"] },
    { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "ChromaDB"] },
    { title: "Tools & Frameworks", skills: ["Git/GitHub", "VS Code", "Jupyter", "Postman", "Jira", "MS Office Suite"] },
  ]

  const certifications = [
    "Intel Cloud Computing — Fundamentals & Technical Professional",
    "Intel Solutions Pro — AI Fundamentals",
    "McKinsey Forward Program",
    "Graduate Leadership Institute — Northeastern University",
  ]

  return (
    <section id="skills" style={{ padding: '112px 24px' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Skills</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 64, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Technical toolkit</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 64 }}>
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <GlassCard style={{ padding: 24, height: '100%' }}>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{cat.title}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((s, j) => (
                    <span key={j} style={tc[j % 3]}>{s}</span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <GlassCard style={{ padding: 32, borderLeft: '2px solid #a855f7' }} hover={false}>
            <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>Certifications</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {certifications.map((cert, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ ...gradientText, fontWeight: 700, fontSize: 14, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{cert}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}