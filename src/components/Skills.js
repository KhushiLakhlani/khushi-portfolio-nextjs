export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "SQL", "R"],
    },
    {
      title: "AI / ML & Data Science",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "LangChain", "NLP"],
    },
    {
      title: "Web Development",
      skills: ["React", "FastAPI", "Spring Boot", "Node.js", "REST APIs"],
    },
    {
      title: "Data & Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Excel", "Power Query", "Statistical Analysis"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "ChromaDB"],
    },
    {
      title: "Tools",
      skills: ["Git / GitHub", "Docker", "Jupyter", "Postman", "Jira", "VS Code"],
    },
  ]

  const certifications = [
    "Intel Cloud Computing — Fundamentals & Technical Professional",
    "Intel Solutions Pro — AI Fundamentals",
    "McKinsey Forward Program",
    "Graduate Leadership Institute — Northeastern University",
  ]

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl mb-16 tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
          Technical toolkit
        </h2>

        {/* Skill groups */}
        <div className="space-y-10">
          {categories.map((cat, index) => (
            <div key={index}>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-tertiary)' }}>
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3.5 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--tag-bg)',
                      color: 'var(--tag-text)',
                      border: '1px solid var(--tag-border)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: 'var(--text-tertiary)' }}>
            Certifications
          </p>
          <div className="space-y-0">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="py-4 flex items-start gap-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span className="text-sm mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}