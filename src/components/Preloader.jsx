import { useEffect } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const HEX = (r, c = 100) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`
  }).join(' ')

const NODES = [0, 1, 2, 3, 4, 5].map((i) => {
  const a = (Math.PI / 3) * i - Math.PI / 2
  return { x: 100 + 88 * Math.cos(a), y: 100 + 88 * Math.sin(a) }
})

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div className="preloader" exit={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
      <motion.div className="pl-glow" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease }} />
      <div className="preloader-inner">
        <div className="pl-stage">
          <svg className="pl-svg" viewBox="0 0 200 200" aria-hidden="true">
            <motion.polygon points={HEX(92)} className="pl-hex" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
            <motion.polygon points={HEX(72)} className="pl-hex thin" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.25, ease: 'easeInOut' }} />
            <g className="pl-spin">
              <circle cx="100" cy="100" r="98" className="pl-dash" />
            </g>
            {NODES.map((n, i) => (
              <motion.circle key={i} cx={n.x} cy={n.y} r="3" className="pl-node" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }} transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease }} />
            ))}
          </svg>

          <motion.div className="pl-logo" initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, scale: 0.9 }} animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.55, ease }}>
            <img src="/brand/mark.png" alt="Nexora Technologies" />
            <motion.span className="pl-shine" initial={{ backgroundPositionX: '160%' }} animate={{ backgroundPositionX: '-60%' }} transition={{ duration: 1.3, delay: 1.5, ease: 'easeInOut' }} />
          </motion.div>
        </div>

        <div className="pl-word" aria-label="Nexora Technologies">
          {'NEXORA'.split('').map((ch, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 1.3 + i * 0.07, duration: 0.7, ease }}>{ch}</motion.span>
          ))}
        </div>
        <motion.div className="pl-sub" initial={{ opacity: 0, letterSpacing: '0.2em' }} animate={{ opacity: 1, letterSpacing: '0.46em' }} transition={{ delay: 1.8, duration: 1.1, ease }}>
          TECHNOLOGIES
        </motion.div>
        <motion.div className="pl-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.15, duration: 0.8 }}>
          Innovate · Build · Elevate
        </motion.div>
      </div>
    </motion.div>
  )
}
