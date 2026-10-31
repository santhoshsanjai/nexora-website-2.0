import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { PageHero, Reveal, SpotCard } from '../components/ui.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { COMPANY, CONTACT_EMAIL } from '../config.js'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" title={<>Let’s build something <span className="gradient-text">remarkable</span></>}
        text="Tell us about your project. We will reply quickly and show you how our AI agentic development cycle fits your requirements." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <Reveal className="info-list">
            {COMPANY.phones.map((p) => (
              <div className="info-item" key={p.href}>
                <span className="icon-chip"><Phone size={20} /></span>
                <div><small>Call us</small><a href={p.href}>{p.label}</a></div>
              </div>
            ))}
            {CONTACT_EMAIL && (
              <div className="info-item">
                <span className="icon-chip"><Mail size={20} /></span>
                <div><small>Email</small><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
              </div>
            )}
            <div className="info-item"><span className="icon-chip"><Globe size={20} /></span><div><small>Website</small>{COMPANY.website}</div></div>
            <div className="info-item"><span className="icon-chip"><MapPin size={20} /></span><div><small>Location</small>{COMPANY.location}</div></div>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotCard><ContactForm /></SpotCard>
          </Reveal>
        </div>
      </section>
    </>
  )
}
