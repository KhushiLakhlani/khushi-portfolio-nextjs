// Shared style objects for consistent theming across all components
// Using inline styles because Tailwind v4 @import can override custom CSS classes

export const glass = {
  background: 'var(--bg-surface)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid var(--glass-border)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
}

export const glassHover = {
  background: 'var(--bg-surface-hover)',
  borderColor: 'var(--glass-border-hover)',
  transform: 'translateY(-2px)',
}

export const gradientText = {
  background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export const btnGlow = {
  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
  color: 'white',
  border: 'none',
  borderRadius: '24px',
  padding: '12px 28px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  textDecoration: 'none',
}

export const btnOutline = {
  background: 'transparent',
  border: '1px solid rgba(168, 85, 247, 0.4)',
  color: '#c4b5fd',
  borderRadius: '24px',
  padding: '12px 28px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  textDecoration: 'none',
}

export const tagPink = {
  background: 'rgba(236, 72, 153, 0.12)',
  color: '#f9a8d4',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '500',
}

export const tagPurple = {
  background: 'rgba(168, 85, 247, 0.12)',
  color: '#c4b5fd',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '500',
}

export const tagBlue = {
  background: 'rgba(59, 130, 246, 0.12)',
  color: '#93c5fd',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '500',
}

export const tagColors = [tagPink, tagPurple, tagBlue]