import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 32, className, as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Card with a cursor-following purple spotlight */
export function SpotCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag className={`card ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="hero-bg">
        <div className="aurora a1" />
        <div className="grid-bg" />
      </div>
      <div className="container" style={{ position: 'relative' }}>
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease }}>
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18, ease }}>
            {text}
          </motion.p>
        )}
      </div>
    </section>
  )
}

export function CTA({ title = 'Ready to build with an agentic team?', text }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta">
          <h2>{title}</h2>
          <p>{text || 'Tell us the problem. We will adopt the full AI agentic development cycle around your project and requirements.'}</p>
          <Link to="/contact" className="btn">Start your project <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function AgentNote({ children }) {
  return (
    <div className="agent-note">
      <Sparkles size={16} style={{ flex: 'none', marginTop: 3 }} />
      <span>{children}</span>
    </div>
  )
}

export function Marquee({ items }) {
  const list = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {list.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
