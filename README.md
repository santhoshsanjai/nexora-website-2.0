# Nexora Technologies — Website 2.0

React + Vite marketing site for Nexora Technologies. Purple/black dark theme and purple/white light theme, agentic-development storytelling, DigiGold and Travels Management showcases.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Contact form

Contact Us and Careers submit through [FormSubmit](https://formsubmit.co). Copy `.env.example` to `.env` and set the receiving address:

```
VITE_CONTACT_EMAIL=you@example.com
```

The first submission sends an activation email to that address; click the link once and later messages arrive normally.

## Structure

- `src/pages` — Home, Services, Work Cases, About Us, Careers, Blog (+ post), Contact Us
- `src/components` — navbar, footer, hero canvas, agent console, agentic cycle, product mockups, forms
- `src/data/content.js` — all copy (services, projects, posts, roles)
- `src/config.js` — company details and contact email
- `public/brand` — logos
