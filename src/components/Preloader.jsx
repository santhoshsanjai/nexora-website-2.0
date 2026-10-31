import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div className="preloader" exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
      <div className="preloader-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src="/brand/mark.png" alt="Nexora Technologies" />
        </motion.div>
        <motion.span className="word" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
          NEXORA
        </motion.span>
        <div className="track">
          <motion.i initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
        </div>
      </div>
    </motion.div>
  )
}
