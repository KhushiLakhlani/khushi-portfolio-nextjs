'use client'

import ScrollReveal from './ScrollReveal'

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", color: "tag-purple" }, { name: "Java", color: "tag-pink" },
        { name: "JavaScript", color: "tag-blue" }, { name: "C++", color: "tag-purple" },
        { name: "SQL", color: "tag-pink" }, { name: "R", color: "tag-blue" },
        { name: "HTML/CSS", color: "tag-purple" },
      ],
    },
    {
      title: "AI / ML & Data Science",
      skills: [
        { name: "PyTorch", color: "tag-pink" }, { name: "TensorFlow", color: "tag-purple" },
        { name: "Keras", color: "tag-blue" }, { name: "Scikit-learn", color: "tag-pink" },
        { name: "NumPy", color: "tag-purple" }, { name: "Pandas", color: "tag-blue" },
        { name: "LangChain", color: "tag-pink" }, { name: "Deep Learning", color: "tag-purple" },
        { name: "NLP", color: "tag-blue" }, { name: "Computer Vision", color: "tag-pink" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", color: "tag-blue" }, { name: "FastAPI", color: "tag-purple" },
        { name: "Spring Boot", color: "tag-pink" }, { name: "Node.js", color: "tag-blue" },
        { name: "REST API", color: "tag-purple" }, { name: "Express.js", color: "tag-pink" },
      ],
    },
    {
      title: "Data & Visualization",
      skills: [
        { name: "Tableau", color: "tag-purple" }, { name: "Power BI", color: "tag-blue" },
        { name: "Matplotlib", color: "tag-pink" }, { name: "Seaborn", color: "tag-purple" },
        { name: "Excel", color: "tag-blue" }, { name: "Power Query", color: "tag-pink" },
        { name: "Statistical Analysis", color: "tag-purple" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", color: "tag-blue" }, { name: "PostgreSQL", color: "tag-purple" },
        { name: "MongoDB", color: "tag-pink" }, { name: "ChromaDB", color: "tag-blue" },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git/GitHub", color: "tag-purple" }, { name: "VS Code", color: "tag-blue" },
        { name: "Jupyter", color: "tag-pink" }, { name: "Postman", color: "tag-purple" },
        { name: "Jira", color: "tag-blue" }, { name: "MS Office Suite", color: "tag-pink" },
      ],
    },
  ]

  const certifications = [
    "Intel Cloud Computing — Fundamentals & Technical Professional",
    "Intel Solutions Pro — AI Fundamentals",
    "McKinsey Forward Program",
    "Graduate Leadership Institute — Northeastern University",
  ]

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-purple)' }}>
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Technical toolkit
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat, index) => (
            <ScrollReveal key={index} delay={(index % 3) + 1}>
              <div className="glass p-6 rounded-2xl h-full">
                <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className={`tag ${skill.color}`}>{skill.name}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <div className="glass p-8 rounded-2xl hover:transform-none" style={{ borderLeft: '2px solid var(--accent-purple)' }}>
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: 'var(--accent-purple)' }}>
              Certifications
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="gradient-text font-bold text-sm mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}