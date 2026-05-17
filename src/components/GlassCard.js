'use client'

import { useState } from 'react'

export default function GlassCard({ children, style = {}, className = '', hover = true, as: Tag = 'div', ...props }) {
  const [hovered, setHovered] = useState(false)

  const baseStyle = {
    background: hovered && hover ? 'var(--bg-surface-hover)' : 'var(--bg-surface)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${hovered && hover ? 'var(--glass-border-hover)' : 'var(--glass-border)'}`,
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    transform: hovered && hover ? 'translateY(-2px)' : 'translateY(0)',
    ...style,
  }

  return (
    <Tag
      style={baseStyle}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </Tag>
  )
}