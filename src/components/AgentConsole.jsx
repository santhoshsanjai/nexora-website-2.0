import { useEffect, useState } from 'react'
import { Compass, Hammer, ShieldCheck, Rocket, Check, Zap, Bot } from 'lucide-react'

const AGENTS = [
  { icon: Compass, name: 'Planner agent', task: 'Turning requirements into a spec', log: 'spec.md generated · 14 user stories mapped' },
  { icon: Hammer, name: 'Builder agent', task: 'Writing features and tests', log: 'feature/booking-flow · 38 files · tests written' },
  { icon: ShieldCheck, name: 'Reviewer agent', task: 'Security and quality review', log: 'review passed · 0 critical · a11y score 100' },
  { icon: Rocket, name: 'Release agent', task: 'Deploying to production', log: 'deploy complete · monitoring online' },
]

export default function AgentConsole() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [lines, setLines] = useState([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setActive(3); setProgress(100); setLines(AGENTS.map((a) => a.log)); return }
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((a) => {
            const next = (a + 1) % AGENTS.length
            setLines((l) => (next === 0 ? [] : [...l, AGENTS[a].log]))
            return next
          })
          return 0
        }
        return p + 5
      })
    }, 130)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div className="console mono">
        <div className="console-bar"><i /><i /><i /><span>nexora · agentic-cycle</span></div>
        <div className="console-body">
          {AGENTS.map((a, i) => {
            const Icon = a.icon
            const done = i < active, on = i === active
            return (
              <div key={a.name} className={`agent-row ${on ? 'active' : ''}`}>
                <div className="agent-ico"><Icon size={18} /></div>
                <div>
                  <b>{a.name}</b>
                  <small>{a.task}</small>
                  {on && <div className="bar"><i style={{ width: `${progress}%`, transition: 'width 0.13s linear' }} /></div>}
                </div>
                <span className={`state ${done ? 'done' : ''}`}>{done ? <Check size={12} style={{ verticalAlign: -2 }} /> : on ? 'working' : 'queued'}</span>
              </div>
            )
          })}
        </div>
        <div className="console-log">
          {lines.map((l, i) => <div key={i}><span className="ok">✓</span> {l}</div>)}
          <div>› {AGENTS[active].task.toLowerCase()}<span className="caret" /></div>
        </div>
      </div>
      <div className="float-chip fc1"><Zap size={16} /> Human-reviewed, agent-accelerated</div>
      <div className="float-chip fc2"><Bot size={16} /> Agent-first delivery</div>
    </div>
  )
}
