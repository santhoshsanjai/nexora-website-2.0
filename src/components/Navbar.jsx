import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X, ArrowRight } from 'lucide-react'
import { NAV } from '../data/content.js'

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Nexora Technologies home">
      <img src="/brand/mark.png" alt="" />
      <span className="brand-text">
        <b>NEXORA</b>
        <span>TECHNOLOGIES</span>
      </span>
    </Link>
  )
}

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = NAV.filter((n) => n.to !== '/contact')

  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`} style={{ zIndex: 120 }}>
        <div className="container nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="Primary">
            {links.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="btn btn-primary btn-sm">Contact Us <ArrowRight size={16} /></Link>
            <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-menu" aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            {NAV.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
