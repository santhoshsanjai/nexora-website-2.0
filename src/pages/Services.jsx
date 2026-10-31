import { PageHero, Reveal, SpotCard, SectionHead, CTA, AgentNote } from '../components/ui.jsx'
import AgentCycle from '../components/AgentCycle.jsx'
import { SERVICES } from '../data/content.js'
import { MOTTO } from '../config.js'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Everything you need to <span className="gradient-text">ship great software</span></>} text={MOTTO} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container grid grid-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <SpotCard style={{ height: '100%' }}>
                  <div className="icon-chip"><Icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <AgentNote>{s.agent}</AgentNote>
                </SpotCard>
              </Reveal>
            )
          })}
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="How we deliver" title={<>The agentic cycle behind <span className="gradient-text">every service</span></>} />
          <Reveal><AgentCycle /></Reveal>
        </div>
      </section>
      <CTA />
    </>
  )
}
