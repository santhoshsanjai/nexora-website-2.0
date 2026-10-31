import { CheckCircle2, Bot } from 'lucide-react'
import { PageHero, Reveal, CTA } from '../components/ui.jsx'
import { GoldMock, CabMock } from '../components/Mocks.jsx'
import { PROJECTS } from '../data/content.js'

export default function Work() {
  return (
    <>
      <PageHero eyebrow="Work cases" title={<>Products that prove <span className="gradient-text">our quality</span></>}
        text="Two flagship applications, each built through our AI agentic development cycle and refined by senior engineers." />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          {PROJECTS.map((p, i) => (
            <div key={p.slug} id={p.slug} className={`showcase ${i % 2 ? 'flip' : ''}`}>
              <Reveal className="showcase-text">
                <span className="kind">{p.kind}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <div className="tags">{p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <p><b style={{ color: 'var(--text)' }}>The problem.</b> {p.problem}</p>
                <p style={{ marginTop: 14 }}><b style={{ color: 'var(--text)' }}>Our solution.</b> {p.solution}</p>
                <ul className="ticks">
                  {p.highlights.map((h) => <li key={h}><CheckCircle2 size={18} /> {h}</li>)}
                </ul>
                <div className="agent-note" style={{ marginTop: 26, paddingTop: 18, borderTop: '1px dashed var(--border-strong)', display: 'flex', gap: 10, color: 'var(--p-400)', fontSize: '0.92rem' }}>
                  <Bot size={18} style={{ flex: 'none', marginTop: 3 }} /> <span><b>Agentic approach.</b> {p.agentic}</span>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                {p.slug === 'digigold' ? <GoldMock /> : <CabMock />}
                <div className="tags" style={{ justifyContent: 'center', marginTop: 22 }}>
                  {p.modules.map((m) => <span className="tag" key={m}>{m}</span>)}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CTA title="Want a product like this?" />
    </>
  )
}
