'use client'

import ScrollReveal from './ScrollReveal'

export default function Experience() {
  const experiences = [
    {
      company: "Northeastern University",
      role: "Instructional Assistant",
      period: "Jan 2026 — Present",
      location: "Boston, MA",
      description: [
        "Supporting course instruction and student learning in Information Systems program",
      ],
      accent: 'var(--accent-purple)',
    },
    {
      company: "Ernst & Young (EY-Parthenon)",
      role: "Data Analyst Intern",
      period: "Jan 2025 — Apr 2025",
      location: "Mumbai, India",
      description: [
        "Developed Python automation scripts to process 44,000+ rows of time-series manufacturing data, eliminating 10 hours weekly of manual analysis",
        "Engineered data validation and quality checks in Python, reducing data errors by 35%",
        "Designed scalable data processing pipelines using Pandas and NumPy, improving process efficiency by 18%",
        "Generated statistical forecasting models improving forecast accuracy by 28%",
      ],
      accent: 'var(--accent-pink)',
    },
    {
      company: "Intel Corporation",
      role: "Technical Sales Specialist Intern",
      period: "Jul 2022 — Sep 2023",
      location: "Swindon, UK",
      description: [
        "Supported end-to-end sales cycle deploying 1,200+ VDI cloud instances ($3.2M value)",
        "Led automation initiative generating $2M in incremental impact and $6.8M in additional value",
        "Launched automation program across 4 UK regional teams, reducing manual workload by 70%",
        "Delivered technical demos of Intel vPro Technology to partner sales teams",
        "Participated in Intel One Volunteering: raised funds for cancer awareness and led STEM sessions",
      ],
      accent: 'var(--accent-blue)',
    },
  ]

  const leadership = [
    { role: "Vice President", org: "Women in Engineering Society", period: "Sep 2023 — Sep 2024" },
    { role: "Student Ambassador", org: "Coventry University", period: "Oct 2023 — Jul 2024" },
    { role: "Committee Member", org: "BCS, The Chartered Institute for IT", period: "Sep 2021 — Jul 2022" },
    { role: "Course Representative", org: "Coventry University Students' Union", period: "Sep 2021 — Jun 2022" },
  ]

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-purple)' }}>
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Where I&apos;ve worked
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className="glass p-7 rounded-2xl relative overflow-hidden">
                {/* Accent gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-5">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                      {exp.role}
                    </h3>
                    <p className="mt-1 gradient-text font-semibold">{exp.company}</p>
                  </div>
                  <div className="md:text-right flex-shrink-0">
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{exp.period}</p>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-[15px] leading-relaxed flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Leadership */}
        <ScrollReveal>
          <div className="mt-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: 'var(--accent-purple)' }}>
              Leadership & Community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leadership.map((item, index) => (
                <ScrollReveal key={index} delay={index + 1}>
                  <div className="glass p-5 rounded-xl">
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.role}</p>
                    <p className="text-sm mt-1 gradient-text">{item.org}</p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>{item.period}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}