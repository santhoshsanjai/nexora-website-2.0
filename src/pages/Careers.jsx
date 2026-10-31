import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero, Reveal, SpotCard, SectionHead } from '../components/ui.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { ROLES, PERKS } from '../data/content.js'

export default function Careers() {
  const [role, setRole] = useState('')
  const apply = (title) => {
    setRole(title)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Build the future of software <span className="gradient-text">with us</span></>}
        text="Join a startup where AI agents are teammates and engineers own real products from day one." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <SectionHead eyebrow="Why join" title="Grow fast, build things that matter" />
          <div className="grid grid-3">
            {PERKS.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 0.08}>
                <SpotCard style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 24 }}>
                  <span className="icon-chip" style={{ margin: 0, width: 40, height: 40, borderRadius: 12, flex: 'none' }}><Check size={18} /></span>
                  <span style={{ fontWeight: 500 }}>{p}</span>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Open roles" title="Find your place on the team" />
          <div className="grid">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <SpotCard className="role">
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <div className="meta"><span className="tag">{r.type}</span><span className="tag">{r.place}</span></div>
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={() => apply(r.title)}>Apply <ArrowRight size={16} /></button>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="apply">
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionHead eyebrow="Apply" title="Send us your application" text="Do not see your role? Apply anyway and tell us how you would contribute." />
          <Reveal><SpotCard><ContactForm key={role} variant="careers" role={role} /></SpotCard></Reveal>
        </div>
      </section>
    </>
  )
}
