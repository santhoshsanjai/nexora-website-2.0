import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h1 className="gradient-text">404</h1>
        <p style={{ color: 'var(--text-2)', margin: '12px 0 28px' }}>This page wandered off. Let’s get you back.</p>
        <Link to="/" className="btn btn-primary"><ArrowLeft size={18} /> Back home</Link>
      </div>
    </section>
  )
}
