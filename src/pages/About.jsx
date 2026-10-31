import { Target, Eye, Heart } from 'lucide-react'
import { PageHero, Reveal, SpotCard, SectionHead, CTA } from '../components/ui.jsx'
import AgentCycle from '../components/AgentCycle.jsx'
import { PRINCIPLES } from '../data/content.js'
import { MOTTO } from '../config.js'

const VALUES = [
  { icon: Target, title: 'Our mission', text: 'Fix real customer problems with seamless software, built faster and better through AI agentic development.' },
  { icon: Eye, title: 'Our vision', text: 'To be the most trusted agent-first software partner for startups and growing businesses across India and beyond.' },
  { icon: Heart, title: 'Our promise', text: 'Honest communication, visible progress and our maximum effort on every single project.' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>A young team building <span className="gradient-text">the future of delivery</span></>} text={MOTTO} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <Reveal>
            <img className="banner-img" src="/brand/banner.webp" alt="Nexora Technologies: Smart solutions for modern businesses" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', margin: '16px 0 20px' }}>Startup energy, engineering discipline</h2>
            <p style={{ color: 'var(--text-2)', marginBottom: 16 }}>
              Nexora Technologies is a software and SaaS company from Tamil Nadu. We believe the way software gets built is changing, and that clients deserve the benefit.
            </p>
            <p style={{ color: 'var(--text-2)', marginBottom: 16 }}>
              So we adopted the complete AI agentic development cycle: specialised agents that plan, build, test and review alongside our engineers. The result is faster delivery, consistent quality and more time spent on your actual problem.
            </p>
            <p style={{ color: 'var(--text-2)' }}>
              We are a startup, and we treat that as an advantage: direct access to the people building your product, quick decisions, and a team that gives every client its full potential.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="grid grid-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <SpotCard style={{ height: '100%' }}>
                    <div className="icon-chip"><Icon size={24} /></div>
                    <h3>{v.title}</h3><p>{v.text}</p>
                  </SpotCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Principles" title={<>How we <span className="gradient-text">work</span></>} />
          <div className="grid grid-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <SpotCard style={{ height: '100%' }}><h3 style={{ fontSize: '1.1rem' }}>{p.title}</h3><p>{p.text}</p></SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Our process" title={<>The agentic <span className="gradient-text">delivery cycle</span></>} />
          <Reveal><AgentCycle /></Reveal>
        </div>
      </section>
      <CTA />
    </>
  )
}
