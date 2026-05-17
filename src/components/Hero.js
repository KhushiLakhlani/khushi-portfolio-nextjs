'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const words = ['data pipelines', 'ML models', 'analytics platforms', 'automation systems', 'fraud detection']
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
        {/* Text — 3 cols */}
        <div className="md:col-span-3 space-y-6">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--accent-purple)' }}>
            MS Information Systems · Northeastern University
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Hi, I&apos;m{' '}
            <span className="gradient-text">Khushi</span>
          </h1>

          <div className="flex items-center gap-2 text-xl md:text-2xl">
            <span style={{ color: 'var(--text-secondary)' }}>I build </span>
            <span className="typing-cursor font-semibold" style={{ color: '#c4b5fd' }}>{text}</span>
          </div>

          <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-tertiary)' }}>
            Data analyst and full-stack developer with expertise in Python, Java, React, and SQL. 
            Experienced in building ETL pipelines, analytics platforms, and automation systems.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
            <a href="#projects" className="btn-glow">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-4">
            {[
              { href: 'https://github.com/KhushiLakhlani', label: 'GitHub', d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
              { href: 'https://linkedin.com/in/khushilakhlani', label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            ].map(({ href, label, d }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:border-[rgba(168,85,247,0.5)]"
                style={{ border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}
                aria-label={label}
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
              </a>
            ))}
            <a
              href="mailto:lakhlani.k@northeastern.edu"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}
              aria-label="Email"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download="Khushi_Lakhlani_Resume.pdf"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}
              aria-label="Download Resume"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile image — 2 cols */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-xl"
              style={{ background: 'var(--gradient-primary)' }} />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden"
              style={{ border: '1px solid var(--glass-border)' }}>
              <img
                src="/profile.jpg"
                alt="Khushi Lakhlani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}