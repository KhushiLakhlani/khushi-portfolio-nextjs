'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { gradientText, btnGlow } from './Styles'

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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.5s ease',
      backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ ...gradientText, fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>
            KL
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#c4b5fd'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                {link.name}
              </a>
            ))}

            <button onClick={toggleTheme} aria-label="Toggle theme"
              style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', background: 'var(--bg-surface)', cursor: 'pointer', transition: 'all 0.3s' }}>
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            <a href="/resume.pdf" download="Khushi_Lakhlani_Resume.pdf"
              style={{ ...btnGlow, padding: '8px 20px', fontSize: '13px', textDecoration: 'none' }}>
              Resume
            </a>
          </div>

          {/* Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="flex md:hidden">
            <button onClick={toggleTheme} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', background: 'transparent', cursor: 'pointer' }}>
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ width: 36, height: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer' }}>
              <span style={{ width: 20, height: 1.5, backgroundColor: 'var(--text-primary)', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translateY(4.5px)' : 'none' }}/>
              <span style={{ width: 20, height: 1.5, backgroundColor: 'var(--text-primary)', transition: 'all 0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}/>
              <span style={{ width: 20, height: 1.5, backgroundColor: 'var(--text-primary)', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none' }}/>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div style={{ marginTop: 16, padding: 16, background: 'var(--bg-surface)', backdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 16 }} className="md:hidden">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                style={{ display: 'block', color: 'var(--text-secondary)', fontSize: 14, fontWeight: 500, padding: '12px 12px', textDecoration: 'none' }}>
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" download="Khushi_Lakhlani_Resume.pdf"
              style={{ ...btnGlow, display: 'block', textAlign: 'center', marginTop: 12, textDecoration: 'none' }}>
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}