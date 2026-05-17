'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

export default function StarBackground() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    function resize() {
      const dpr = window.devicePixelRatio || 1
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()

    const stars = []
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.15,
        pulse: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      })
    }

    const meteors = []
    function spawnMeteor() {
      meteors.push({
        x: Math.random() * W * 1.2,
        y: Math.random() * H * 0.3,
        angle: Math.PI * 0.2 + Math.random() * 0.3,
        speed: 3 + Math.random() * 4,
        len: 60 + Math.random() * 100,
        life: 0,
        maxLife: 80 + Math.random() * 60,
        hue: Math.random() > 0.5 ? 'pink' : 'purple',
      })
    }

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.016
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const starMult = isDark ? 1 : 0.2

      stars.forEach(s => {
        const flicker = 0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.pulse)
        const a = s.alpha * flicker * starMult
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? `rgba(200,200,240,${a})` : `rgba(168,85,247,${a * 0.5})`
        ctx.fill()
      })

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.life++
        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        const fade = 1 - m.life / m.maxLife
        const tailX = m.x - Math.cos(m.angle) * m.len
        const tailY = m.y - Math.sin(m.angle) * m.len
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y)
        const col = m.hue === 'pink' ? '236,72,153' : '168,85,247'
        grad.addColorStop(0, `rgba(${col},0)`)
        grad.addColorStop(0.6, `rgba(${col},${0.3 * fade})`)
        grad.addColorStop(1, `rgba(255,255,255,${0.8 * fade})`)
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5 * fade
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(m.x, m.y, 2 * fade, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.9 * fade})`
        ctx.fill()
        if (m.life > m.maxLife) meteors.splice(i, 1)
      }

      if (Math.random() < 0.025) spawnMeteor()
      animId = requestAnimationFrame(draw)
    }

    spawnMeteor()
    spawnMeteor()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}