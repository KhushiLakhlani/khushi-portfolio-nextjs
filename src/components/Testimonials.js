export default function Testimonials() {
  const testimonials = [
    {
      name: "Georgios Kardaras",
      title: "EMEA Sales Director",
      company: "Intel Corporation",
      relationship: "Direct Manager",
      text: "Throughout the entire period of our collaboration, Khushi demonstrated great professionalism and commitment. She had been always keen to learn, connect to colleagues and familiarize herself with the nature of Intel business. The tasks assigned to Khushi spanned across different areas and she always delivered high quality results. Above and beyond soft skills and technical qualifications, Khushi's character, energy and personality were very well received by our team members.",
      linkedin: "https://linkedin.com/in/georgios-kardaras",
      initials: "GK",
    },
    {
      name: "Patricia Pozuelo",
      title: "EMEA Partners Technical Sales Director",
      company: "Intel Corporation",
      relationship: "Direct Manager",
      text: "I would like to recognize her technical skills highlighting: Knowledge on Cloud Computing Architectures, Expertise in delivering Technical Presentations, Data analysis with strong expertise due to her background and studies, Project Management, and Proficiency in programming. Something that I also want to call out is her attitude, very open and adaptable, always willing to help and learn new things.",
      linkedin: "https://linkedin.com/in/patricia-pozuelo",
      initials: "PP",
    },
    {
      name: "Karolina Olszewska",
      title: "Consultant",
      company: "Kearney | Imperial College London",
      relationship: "Senior Colleague",
      text: "Khushi and I have co-led organisation of Brunel University of London's visit to Intel site. She is always on time, helpful and brings great ideas to the table. Khushi works great in teams and adapts quickly to new environments. If you happen to work with her, you can expect great quality of execution.",
      linkedin: "https://linkedin.com/in/karolina-olszewska",
      initials: "KO",
    },
  ]

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
          What others say
        </h2>
        <p className="text-base mb-16" style={{ color: 'var(--text-secondary)' }}>
          From colleagues and managers I&apos;ve worked with.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl leading-none mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--border)' }}
              >
                &ldquo;
              </span>

              {/* Text */}
              <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: 'var(--text-secondary)' }}>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium block truncate transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t.name}
                  </a>
                  <p className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}