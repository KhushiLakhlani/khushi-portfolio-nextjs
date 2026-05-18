'use client'

import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import { tagPink, tagPurple, tagBlue, btnOutline } from './styles'

const tc = [tagPink, tagPurple, tagBlue]

export default function Projects() {
  const projects = [
    { title: "AuditLens", description: "ML-powered financial fraud detection using SEC EDGAR filings across 500+ companies.", accent: '#a855f7',
      points: ["End-to-end pipeline extracting and cleaning 5,000+ financial records from SEC EDGAR API", "40+ engineered features with classification models flagging anomalous financial patterns", "Interactive dashboards visualizing fraud risk indicators across S&P companies, 2007–2026"],
      tech: ["Python", "Scikit-learn", "Pandas", "SEC EDGAR", "ML", "Data Engineering"],
      github: "https://github.com/KhushiLakhlani/AuditLens" },
    { title: "PitWall AI", description: "AI-powered F1 analytics platform with natural language querying across 25 seasons of race data.", accent: '#ec4899',
      points: ["Full RAG pipeline using LangChain, ChromaDB, and Groq LLM across 10,500+ race records", "Driver stats dashboard, head-to-head comparisons, and all-time leaderboard", "FastAPI backend with React frontend enabling real-time AI-driven insights"],
      tech: ["React", "FastAPI", "LangChain", "ChromaDB", "Groq LLM", "RAG"],
      github: "https://github.com/KhushiLakhlani/pitwall-ai" },
    { title: "Predictive Maintenance", description: "Machine learning system for predicting aircraft engine failures using NASA C-MAPSS dataset.", accent: '#3b82f6',
      points: ["ML algorithms (Linear Regression, Random Forest, SVR) achieving 83.5% accuracy", "Degradation pattern analysis across 21 sensor measurements from 100 engines", "Demonstrated potential 27% reduction in unscheduled maintenance costs"],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
      github: "https://github.com/KhushiLakhlani/MachineLearning_PredictiveMaintenance" },
    { title: "Flight Booking System", description: "Full-stack web application for flight reservations with role-based access control.", accent: '#a855f7',
      points: ["Complete booking workflow with seat selection, authentication, and management", "RESTful APIs using Spring Boot with JWT authentication", "React frontend with MySQL database for users, flights, and bookings"],
      tech: ["React", "Spring Boot", "MySQL", "REST API", "JWT", "Java"],
      github: "https://github.com/KhushiLakhlani/flight-booking-system" },
    { title: "Manufacturing Analytics Dashboard", description: "Interactive BI dashboard analyzing 44,000+ manufacturing sensor readings for a Fortune 500 client at EY-Parthenon.", accent: '#10b981',
      points: ["ETL pipeline automating identification of 8 production phases across 9 manufacturing stages, replacing 10+ hours of weekly manual Excel work", "Time-series and statistical analysis on sensor data including temperature, pressure, chemical flow rates, and RPM stability", "7-chart Google Looker Studio dashboard providing real-time production visibility and enabling predictive maintenance planning"],
      tech: ["Python", "Pandas", "NumPy", "Looker Studio", "ETL", "Time-Series Analysis"],
      github: "https://github.com/KhushiLakhlani/Manufacturing-Analytics-Dashboard" },
  ]

  return (
    <section id="projects" style={{ padding: '112px 24px' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ color: '#a855f7', fontSize: 13, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Projects</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 64, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Featured work</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={(i % 2) + 1}>
              <GlassCard as="a" href={p.github} target="_blank" rel="noopener noreferrer"
                style={{ padding: 28, display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', height: '100%' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                  <svg width="18" height="18" fill="none" stroke="var(--text-tertiary)" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 4 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, color: 'var(--text-secondary)' }}>{p.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ marginTop: 6, width: 4, height: 4, borderRadius: '50%', flexShrink: 0, background: p.accent }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={tc[j % 3]}>{t}</span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="https://github.com/KhushiLakhlani" target="_blank" rel="noopener noreferrer"
              style={{ ...btnOutline, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View All on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}