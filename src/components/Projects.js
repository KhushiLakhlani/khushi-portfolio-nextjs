export default function Projects() {
  const projects = [
    {
      title: "AuditLens",
      description: "ML-powered financial fraud detection using SEC EDGAR filings across 500+ companies.",
      points: [
        "End-to-end pipeline extracting and cleaning 5,000+ financial records from SEC EDGAR API",
        "40+ engineered features with classification models flagging anomalous financial patterns",
        "Interactive dashboards visualizing fraud risk indicators across S&P companies, 2007–2026",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "SEC EDGAR API", "ML", "Data Engineering"],
      github: "https://github.com/KhushiLakhlani/AuditLens",
    },
    {
      title: "PitWall AI",
      description: "AI-powered F1 analytics platform with natural language querying across 25 seasons of race data.",
      points: [
        "Full RAG pipeline using LangChain, ChromaDB, and Groq LLM across 10,500+ race records",
        "Driver stats dashboard, head-to-head comparisons, and all-time leaderboard",
        "FastAPI backend with React frontend enabling real-time AI-driven insights",
      ],
      tech: ["React", "FastAPI", "Python", "LangChain", "ChromaDB", "Groq LLM"],
      github: "https://github.com/KhushiLakhlani/pitwall-ai",
    },
    {
      title: "Predictive Maintenance",
      description: "Machine learning system for predicting aircraft engine failures using NASA C-MAPSS dataset.",
      points: [
        "ML algorithms (Linear Regression, Random Forest, SVR) achieving 83.5% accuracy",
        "Degradation pattern analysis across 21 sensor measurements from 100 engines",
        "Demonstrated potential 27% reduction in unscheduled maintenance costs",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
      github: "https://github.com/KhushiLakhlani/MachineLearning_PredictiveMaintenance",
    },
    {
      title: "Flight Booking System",
      description: "Full-stack web application for flight reservations with role-based access control.",
      points: [
        "Complete booking workflow with seat selection, authentication, and management",
        "RESTful APIs using Spring Boot with JWT authentication",
        "React frontend with MySQL database for users, flights, and bookings",
      ],
      tech: ["React", "Spring Boot", "MySQL", "REST API", "JWT", "Java"],
      github: "https://github.com/KhushiLakhlani/flight-booking-system",
    },
  ]

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl mb-16 tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
          Featured work
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--card-shadow)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'
                e.currentTarget.style.borderColor = 'var(--text-tertiary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card-shadow)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Title row */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <svg
                  className="w-4 h-4 mt-1 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--text-tertiary)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="text-[13px] leading-relaxed flex items-start gap-2.5" style={{ color: 'var(--text-tertiary)' }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--tag-bg)',
                      color: 'var(--tag-text)',
                      border: '1px solid var(--tag-border)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/KhushiLakhlani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}