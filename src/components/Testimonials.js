'use client'

import ScrollReveal from './ScrollReveal'

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
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-purple)' }}>
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            What others say
          </h2>
          <p className="mb-16" style={{ color: 'var(--text-secondary)' }}>
            From colleagues and managers I&apos;ve had the pleasure of working with.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className="glass p-6 rounded-2xl flex flex-col h-full">
                {/* Quote */}
                <span className="text-5xl leading-none mb-4 gradient-text" style={{ fontFamily: 'Georgia, serif' }}>
                  &ldquo;
                </span>

                <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--glass-border)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: 'var(--gradient-primary)', color: 'white' }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold block truncate transition-colors duration-200 hover:text-[#c4b5fd]"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t.name}
                    </a>
                    <p className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>
                      {t.title}
                    </p>
                    <p className="text-xs truncate gradient-text">{t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <a
              href="https://linkedin.com/in/khushilakhlani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              View More on LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}