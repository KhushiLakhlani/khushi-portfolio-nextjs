import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import StarBackground from '@/components/StarBackground'

export default function Home() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
      </main>
    </>
  )
}