'use client'

import ScrollReveal from './ScrollReveal'

export default function About() {
  const journey = [
    { flag: '🇬🇧', title: 'United Kingdom', detail: 'BSc Computer Science (First Class Honours) · Intel Corporation · VP, Women in Engineering Society' },
    { flag: '🇮🇳', title: 'India', detail: 'Data Analyst at EY-Parthenon · 44K+ rows processed · 28% forecast accuracy improvement' },
    { flag: '🇺🇸', title: 'United States', detail: 'MS Information Systems at Northeastern · Instructional Assistant' },
  ]

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-purple)' }}>
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            The why behind the work
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="glass p-8 md:p-10 rounded-2xl mb-8 hover:transform-none">
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I&apos;ve always been curious about the <span style={{ color: 'var(--text-primary)' }}>why behind the technology</span> — 
                not just how it works, but how it helps organizations make strategic decisions that drive real impact.
              </p>
              <p>
                At <span className="gradient-text font-semibold">Intel</span>, I supported the deployment
                of 1,200+ VDI cloud instances ($3.2M value) and led automation initiatives that
                generated <span style={{ color: 'var(--text-primary)' }}>$6.8M in additional value</span> while reducing manual workload by 70%.
              </p>
              <p>
                At <span className="gradient-text font-semibold">EY-Parthenon</span>, I built Python
                pipelines that eliminated 10 hours of weekly manual analysis, reduced data errors by 35%, and improved forecast
                accuracy by <span style={{ color: 'var(--text-primary)' }}>28%</span>.
              </p>
              <p>
                Beyond technical work, I served as Vice President of the Women in Engineering
                Society — building partnerships between academia and industry to make technology careers more accessible.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Journey cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {journey.map((item, index) => (
            <ScrollReveal key={item.flag} delay={index + 1}>
              <div className="glass p-6 rounded-2xl h-full">
                <div className="text-3xl mb-3">{item.flag}</div>
                <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* What I'm looking for */}
        <ScrollReveal delay={1}>
          <div className="mt-8 glass p-6 rounded-2xl hover:transform-none" style={{ borderLeft: '2px solid var(--accent-purple)' }}>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m seeking opportunities to tackle complex data challenges — engineering scalable pipelines, 
              building analytics platforms, or turning raw data into strategic insights.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="tag tag-pink">Data Engineering</span>
              <span className="tag tag-purple">Software Engineering</span>
              <span className="tag tag-blue">Machine Learning</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}