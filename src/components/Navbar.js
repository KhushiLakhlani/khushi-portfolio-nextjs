'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}
          >
            KL
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-surface)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download="Khushi_Lakhlani_Resume.pdf"
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg)',
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-5 h-[1.5px] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
              <span className={`w-5 h-[1.5px] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
              <span className={`w-5 h-[1.5px] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium py-3 px-2 transition-colors"
                style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-subtle)' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Khushi_Lakhlani_Resume.pdf"
              className="block text-center text-sm font-medium mt-4 px-5 py-2.5 rounded-full"
              style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg)' }}
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}