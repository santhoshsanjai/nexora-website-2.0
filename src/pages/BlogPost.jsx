import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CTA } from '../components/ui.jsx'
import { POSTS } from '../data/content.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 30 }}>
        <div className="hero-bg"><div className="aurora a1" /><div className="grid-bg" /></div>
        <div className="container article" style={{ position: 'relative' }}>
          <Link to="/blog" className="back"><ArrowLeft size={17} /> All articles</Link>
          <div><span className="tag">{post.tag}</span></div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.6vw, 3.2rem)' }}>{post.title}</h1>
          <p style={{ marginTop: 16, fontSize: '0.95rem' }}>{post.date} · {post.read}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 30 }}>
        <article className="container article">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </article>
      </section>
      <CTA />
    </>
  )
}
