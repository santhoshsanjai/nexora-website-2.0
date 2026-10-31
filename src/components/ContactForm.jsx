import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { CONTACT_EMAIL } from '../config.js'

const SERVICES = ['SaaS product', 'Custom software', 'Mobile app', 'Website / web app', 'AI agents & automation', 'UI/UX design', 'E-commerce', 'Something else']

/** variant "careers" adds a role and portfolio link instead of a service. */
export default function ContactForm({ variant = 'contact', role = '' }) {
  const [status, setStatus] = useState({ state: 'idle', msg: '' })
  const careers = variant === 'careers'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot
    delete data.website

    if (!CONTACT_EMAIL) {
      setStatus({ state: 'error', msg: 'The contact email has not been configured yet. Please call us directly.' })
      return
    }
    setStatus({ state: 'sending', msg: '' })
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: careers ? `Career application: ${data.role || 'General'}` : `New enquiry from ${data.name} — Nexora website`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === 'false') throw new Error(json.message || 'Request failed')
      form.reset()
      setStatus({ state: 'ok', msg: careers ? 'Application received. We will be in touch soon.' : 'Thank you! Your message is on its way and we will reply shortly.' })
    } catch {
      setStatus({ state: 'error', msg: 'Something went wrong while sending. Please try again or call us.' })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-row">
        <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required placeholder="Your name" autoComplete="name" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="+91 ..." autoComplete="tel" /></div>
        {careers ? (
          <div className="field"><label htmlFor="role">Role</label><input id="role" name="role" defaultValue={role} placeholder="Role you are applying for" required /></div>
        ) : (
          <div className="field">
            <label htmlFor="service">What do you need?</label>
            <select id="service" name="service" defaultValue={SERVICES[0]}>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
          </div>
        )}
      </div>
      {careers && <div className="field"><label htmlFor="link">Portfolio / GitHub / LinkedIn</label><input id="link" name="link" placeholder="https://" /></div>}
      <div className="field">
        <label htmlFor="message">{careers ? 'Tell us about yourself' : 'Tell us about your project'}</label>
        <textarea id="message" name="message" required placeholder={careers ? 'Your experience, what you want to build...' : 'The problem you want to solve, timeline and any references...'} />
      </div>
      {status.state === 'ok' && <div className="notice ok" role="status"><CheckCircle2 size={18} /> {status.msg}</div>}
      {status.state === 'error' && <div className="notice err" role="alert"><AlertCircle size={18} /> {status.msg}</div>}
      <div><button className="btn btn-primary" type="submit" disabled={status.state === 'sending'}>{status.state === 'sending' ? 'Sending…' : careers ? 'Submit application' : 'Send message'} <Send size={16} /></button></div>
    </form>
  )
}
