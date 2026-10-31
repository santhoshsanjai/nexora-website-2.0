// Address that receives the Contact Us and Careers forms.
// Set VITE_CONTACT_EMAIL in .env (see .env.example) — never hard-code it elsewhere.
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || ''

export const COMPANY = {
  name: 'Nexora Technologies',
  tagline: 'Innovate. Build. Elevate.',
  phones: [
    { label: '+91 77084 02001', href: 'tel:+917708402001' },
    { label: '+91 91504 65242', href: 'tel:+919150465242' },
  ],
  website: 'www.nexoratechnologies.com',
  location: 'Tamil Nadu, India',
}

export const MOTTO =
  'We are ready to adopt the complete AI agentic development cycle for your project and requirements.'
