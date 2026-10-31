import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Reveal, SpotCard } from '../components/ui.jsx'
import { POSTS } from '../data/content.js'

export default function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title={<>Ideas on agentic AI, SaaS and <span className="gradient-text">great software</span></>}
        text="Notes from the Nexora team on how we build, what we learn and where software is heading." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container grid grid-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1}>
              <SpotCard as={Link} to={`/blog/${p.slug}`} className="post-card" style={{ display: 'flex' }}>
                <div><span className="tag">{p.tag}</span></div>
                <div className="date">{p.date} · {p.read}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="link-arrow">Read article <ArrowRight size={17} /></span>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
