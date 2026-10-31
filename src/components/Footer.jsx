import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { Brand } from './Navbar.jsx'
import { NAV } from '../data/content.js'
import { COMPANY, CONTACT_EMAIL } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="blurb">
              Software and SaaS products built with a complete AI agentic development cycle. {COMPANY.tagline}
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>{NAV.slice(0, 4).map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>{NAV.slice(4).map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              {COMPANY.phones.map((p) => (
                <li key={p.href}><a href={p.href} style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}><Phone size={15} /> {p.label}</a></li>
              ))}
              {CONTACT_EMAIL && (
                <li><a href={`mailto:${CONTACT_EMAIL}`} style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}><Mail size={15} /> {CONTACT_EMAIL}</a></li>
              )}
              <li style={{ display: 'inline-flex', gap: 10, alignItems: 'center', color: 'var(--text-2)' }}><Globe size={15} /> {COMPANY.website}</li>
              <li style={{ display: 'inline-flex', gap: 10, alignItems: 'center', color: 'var(--text-2)' }}><MapPin size={15} /> {COMPANY.location}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nexora Technologies. All rights reserved.</span>
          <span>Smart Solutions · Modern Technology · Powerful Results</span>
        </div>
      </div>
    </footer>
  )
}
