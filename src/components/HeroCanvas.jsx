import { useEffect, useRef } from 'react'

/** Elegant neural-network field: drifting nodes, soft links, and a cursor that gently attracts them. */
export default function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0, visible = true
    const mouse = { x: -9999, y: -9999 }
    let nodes = []

    const color = () => {
      const dark = document.documentElement.getAttribute('data-theme') !== 'light'
      return dark ? { node: '196,181,253', link: '167,139,250' } : { node: '109,40,217', link: '124,58,237' }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth; h = canvas.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, Math.max(28, (w * h) / 15000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8, hex: Math.random() < 0.12,
      }))
    }

    const hexPath = (x, y, r) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i + Math.PI / 6
        const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)
      }
      ctx.closePath()
    }

    const draw = () => {
      raf = requestAnimationFrame(draw)
      if (!visible) return
      const c = color()
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!reduce) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy)
          if (d < 180) { n.vx += (dx / d) * 0.004; n.vy += (dy / d) * 0.004 }
          n.vx *= 0.995; n.vy *= 0.995
          n.x += n.vx; n.y += n.vy
          if (n.x < -10) n.x = w + 10; if (n.x > w + 10) n.x = -10
          if (n.y < -10) n.y = h + 10; if (n.y > h + 10) n.y = -10
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 140) {
            ctx.strokeStyle = `rgba(${c.link},${(1 - d / 140) * 0.32})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        if (n.hex) {
          ctx.strokeStyle = `rgba(${c.node},0.55)`; ctx.lineWidth = 1.2
          hexPath(n.x, n.y, 7); ctx.stroke()
        } else {
          ctx.fillStyle = `rgba(${c.node},0.75)`
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
        }
      }
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = mouse.y = -9999 }
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })
    io.observe(canvas)
    resize(); draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf); io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" />
}
