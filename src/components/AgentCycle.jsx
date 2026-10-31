import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CYCLE } from '../data/content.js'
import { SpotCard } from './ui.jsx'
import { Layers } from 'lucide-react'

export default function AgentCycle() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setI((n) => (n + 1) % CYCLE.length), 5200)
    return () => clearTimeout(id)
  }, [i, paused])

  const step = CYCLE[i]
  const Icon = step.icon

  return (
    <div className="cycle" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="cycle-steps" role="tablist" aria-label="Agentic development cycle">
        {CYCLE.map((s, idx) => (
          <button key={s.title} role="tab" aria-selected={idx === i} className={`step-btn ${idx === i ? 'on' : ''}`} onClick={() => setI(idx)}>
            <span className="n">0{idx + 1}</span>
            <b>{s.title}</b>
          </button>
        ))}
      </div>
      <SpotCard className="cycle-panel">
        <AnimatePresence mode="wait">
          <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
            <div className="icon-chip"><Icon size={28} /></div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="out-tag mono"><Layers size={15} /> {step.out}</div>
          </motion.div>
        </AnimatePresence>
      </SpotCard>
    </div>
  )
}
