export default function About() {
  const journey = [
    {
      flag: "UK",
      title: "United Kingdom",
      detail: "BSc Computer Science (First Class) · Intel Corporation · VP, Women in Engineering",
    },
    {
      flag: "IN",
      title: "India",
      detail: "Data Analyst at EY-Parthenon · 44K+ records processed · 28% forecast improvement",
    },
    {
      flag: "US",
      title: "United States",
      detail: "MS Information Systems at Northeastern · Instructional Assistant",
    },
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <p
          className="text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: 'var(--text-tertiary)' }}
        >
          About
        </p>
        <h2
          className="text-4xl md:text-5xl mb-12 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
        >
          The why behind the work
        </h2>

        {/* Prose */}
        <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>
            I&apos;m drawn to the intersection of technology, data, and strategy — not just how systems work,
            but how they help organizations make better decisions. That curiosity has taken me across three
            continents, each stop adding a new dimension to how I think about data.
          </p>

          <p>
            At <span style={{ color: 'var(--text-primary)' }}>Intel</span>, I supported the deployment
            of 1,200+ VDI cloud instances ($3.2M value) and led automation initiatives that
            generated $6.8M in additional value while reducing manual workload by 70%.
            At <span style={{ color: 'var(--text-primary)' }}>EY-Parthenon</span>, I built Python
            pipelines that eliminated 10 hours of weekly manual analysis and improved forecast
            accuracy by 28%.
          </p>

          <p>
            Beyond technical work, I served as Vice President of the Women in Engineering
            Society at Coventry University — building partnerships between academia and industry
            to make technology careers more accessible.
          </p>
        </div>

        {/* Journey cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {journey.map((item) => (
            <div
              key={item.flag}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            >
              <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--text-tertiary)' }}>
                {item.flag}
              </p>
              <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Looking for */}
        <div
          className="mt-14 p-6 rounded-2xl"
          style={{ backgroundColor: 'var(--bg-elevated)', borderLeft: '2px solid var(--text-tertiary)' }}
        >
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m seeking opportunities to tackle complex data challenges — whether that&apos;s engineering
            scalable pipelines, building analytics platforms, or turning raw data into strategic insights.
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--text-tertiary)' }}>
            Focus areas: Data Engineering, Software Engineering, Machine Learning
          </p>
        </div>
      </div>
    </section>
  )
}