import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, PlayCircle, Sparkles, Check } from 'lucide-react'
import HeroCanvas from '../components/HeroCanvas.jsx'
import AgentConsole from '../components/AgentConsole.jsx'
import AgentCycle from '../components/AgentCycle.jsx'
import { GoldMock, CabMock } from '../components/Mocks.jsx'
import { Reveal, SpotCard, SectionHead, CTA, Marquee, AgentNote } from '../components/ui.jsx'
import { SERVICES, PROJECTS, PRINCIPLES, TECH } from '../data/content.js'
import { COMPANY } from '../config.js'

const ease = [0.22, 1, 0.36, 1]
const LINES = ['We build software', 'with AI agents,', 'engineered to last.']

export default function Home({ ready }) {
  const { scrollY } = useScroll()
  const parallax = useTransform(scrollY, [0, 600], [0, -70])
  const fade = useTransform(scrollY, [0, 500], [1, 0.2])
  const go = ready ? 'show' : 'hide'

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="aurora a1" /><div className="aurora a2" />
          <div className="grid-bg" />
          <HeroCanvas />
        </div>
        <div className="container hero-grid">
          <motion.div style={{ y: parallax, opacity: fade }}>
            <motion.div className="pill" initial="hide" animate={go}
              variants={{ hide: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}>
              <span className="dot" /> Now building with the full AI agentic cycle
            </motion.div>
            <h1>
              {LINES.map((l, i) => (
                <span className="line" key={l}>
                  <motion.span style={{ display: 'inline-block' }} initial="hide" animate={go}
                    variants={{ hide: { y: '110%' }, show: { y: 0, transition: { duration: 1, delay: 0.15 + i * 0.14, ease } } }}>
                    {i === 1 ? <span className="gradient-text">{l}</span> : l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p className="hero-sub" initial="hide" animate={go}
              variants={{ hide: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.7, ease } } }}>
              Nexora Technologies delivers software and SaaS products end to end. We are ready to adopt the complete AI agentic development cycle for your project and requirements, to fix your customer’s real problem with a seamless experience.
            </motion.p>
            <motion.div className="hero-cta" initial="hide" animate={go}
              variants={{ hide: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.85, ease } } }}>
              <Link to="/contact" className="btn btn-primary">Start your project <ArrowRight size={18} /></Link>
              <Link to="/work" className="btn btn-ghost"><PlayCircle size={18} /> See our work</Link>
            </motion.div>
            <motion.div className="hero-stats" initial="hide" animate={go}
              variants={{ hide: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, delay: 1.1 } } }}>
              <div className="stat"><b>6-stage</b><span>agentic delivery cycle</span></div>
              <div className="stat"><b>2</b><span>flagship products built</span></div>
              <div className="stat"><b>Human</b><span>led review on every release</span></div>
            </motion.div>
          </motion.div>
          <motion.div initial="hide" animate={go}
            variants={{ hide: { opacity: 0, y: 50, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, delay: 0.5, ease } } }}>
            <AgentConsole />
          </motion.div>
        </div>
        <div className="scroll-cue"><span>Scroll</span><i /></div>
      </section>

      <Marquee items={TECH} />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Agentic development cycle" title={<>One cycle. <span className="gradient-text">Every project.</span></>}
            text="From the first conversation to continuous improvement, AI agents accelerate each stage while our engineers stay in command of quality." />
          <Reveal><AgentCycle /></Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="What we build" title={<>Software that solves <span className="gradient-text">real problems</span></>}
            text="Every service is delivered through the same agent-first cycle, so quality and speed come standard." />
          <div className="grid grid-3">
            {SERVICES.slice(0, 6).map((s, i) => {
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
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-ghost">Explore all services <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Showcase" title={<>Our quality, <span className="gradient-text">shown in products</span></>}
            text="We do not just talk about quality. These are two products we designed, built and shipped." />
          <div className="grid grid-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.12}>
                <SpotCard as={Link} to="/work" className="project-card" style={{ display: 'block', height: '100%' }}>
                  {p.slug === 'digigold' ? <GoldMock /> : <CabMock />}
                  <div className="body">
                    <span className="kind">{p.kind}</span>
                    <h3 style={{ margin: '10px 0 12px' }}>{p.name}</h3>
                    <p>{p.summary}</p>
                    <span className="link-arrow">View case study <ArrowRight size={17} /></span>
                  </div>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead center eyebrow="Why Nexora" title={<>A startup that gives you <span className="gradient-text">its maximum</span></>}
            text="Small, focused and fully committed. Every client gets our best effort, because every project is our reputation." />
          <div className="grid grid-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <SpotCard style={{ height: '100%' }}>
                  <div className="icon-chip"><Sparkles size={22} /></div>
                  <h3 style={{ fontSize: '1.1rem' }}>{p.title}</h3>
                  <p>{p.text}</p>
                </SpotCard>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', color: 'var(--text-2)' }}>
            {['Innovate', 'Build', 'Elevate'].map((w) => (
              <span key={w} style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontFamily: 'Sora', fontWeight: 600 }}><Check size={18} color="var(--p-400)" /> {w}</span>
            ))}
            <span style={{ color: 'var(--text-3)' }}>· {COMPANY.tagline}</span>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
