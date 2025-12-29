import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </main>
  )
}