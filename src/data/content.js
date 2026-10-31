import {
  Code2, Smartphone, Layers, Cloud, Palette, Bot, ShoppingCart, LifeBuoy,
  Compass, ClipboardList, Hammer, ShieldCheck, Rocket, RefreshCw, Globe,
} from 'lucide-react'

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work Cases' },
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
]

export const SERVICES = [
  {
    icon: Layers, title: 'SaaS Product Development',
    text: 'Multi-tenant platforms, subscription billing and admin consoles, designed to scale from first customer to thousands.',
    agent: 'Agents scaffold tenancy, auth and billing; engineers own the architecture.',
  },
  {
    icon: Code2, title: 'Custom Software',
    text: 'Business software shaped around how your team actually works, from workflow tools to full ERP-style systems.',
    agent: 'Requirements are turned into specs, tests and working code in tight loops.',
  },
  {
    icon: Smartphone, title: 'Mobile App Development',
    text: 'Polished iOS and Android apps with offline support, live tracking and push notifications.',
    agent: 'A shared design system and agent-generated test suites keep every release steady.',
  },
  {
    icon: Globe, title: 'Websites & Web Apps',
    text: 'Fast, accessible, SEO-ready React websites and dashboards that feel premium on every screen.',
    agent: 'Automated performance, accessibility and visual checks on every change.',
  },
  {
    icon: Bot, title: 'AI Agents & Automation',
    text: 'Custom AI agents, copilots and workflow automation that remove repetitive work from your business.',
    agent: 'We build for your customers the same way we build ourselves: agent first.',
  },
  {
    icon: Cloud, title: 'API, Backend & Cloud',
    text: 'Secure APIs, data models and cloud infrastructure with monitoring, backups and CI/CD from day one.',
    agent: 'Agents review every pull request for security, regressions and cost.',
  },
  {
    icon: Palette, title: 'UI/UX Design',
    text: 'Research-led interfaces and design systems that make complex products simple to use.',
    agent: 'Design tokens flow straight into code, so what you approve is what ships.',
  },
  {
    icon: ShoppingCart, title: 'E-Commerce Solutions',
    text: 'Storefronts, catalogues, payments and order management built for conversion and growth.',
    agent: 'Continuous testing of checkout flows so revenue never breaks quietly.',
  },
  {
    icon: LifeBuoy, title: 'Maintenance & Support',
    text: 'Proactive monitoring, upgrades and fast fixes so your product keeps improving after launch.',
    agent: 'Monitoring agents surface issues before your customers notice.',
  },
]

export const CYCLE = [
  {
    icon: Compass, title: 'Discover',
    text: 'We listen first. AI agents help us analyse your market, users and constraints so the real problem is clear before a line of code exists.',
    out: 'Problem brief · user journeys · success metrics',
  },
  {
    icon: ClipboardList, title: 'Plan',
    text: 'Requirements become specs, architecture and a clear milestone roadmap. You see the plan, the scope and the risks up front.',
    out: 'Spec · architecture · milestone roadmap',
  },
  {
    icon: Hammer, title: 'Build',
    text: 'Specialised agents write code, tests and docs in parallel while senior engineers direct the design and own every decision.',
    out: 'Working software every sprint',
  },
  {
    icon: ShieldCheck, title: 'Verify',
    text: 'Automated review, security scans, performance and accessibility checks run on every change, backed by human QA.',
    out: 'Tested · reviewed · secure',
  },
  {
    icon: Rocket, title: 'Ship',
    text: 'One-click deployments, staged rollouts and clean documentation. Launch day is routine, not risky.',
    out: 'Live product · CI/CD · runbooks',
  },
  {
    icon: RefreshCw, title: 'Evolve',
    text: 'We watch real usage, learn from it and keep improving. Your product gets smarter with every release.',
    out: 'Insights · iterations · growth',
  },
]

export const PRINCIPLES = [
  { title: 'Agent-first, human-led', text: 'AI agents handle the repetitive work. People handle judgement, creativity and accountability.' },
  { title: 'Quality you can inspect', text: 'Every project ships with tests, docs and automated checks you can see and rerun.' },
  { title: 'Startup energy', text: 'We are a young team giving every client our maximum effort, speed and attention.' },
  { title: 'Problems before features', text: 'We fix the customer problem first, then choose the smallest elegant solution.' },
]

export const PROJECTS = [
  {
    slug: 'digigold',
    name: 'DigiGold',
    kind: 'Digital Gold Savings Platform',
    summary:
      'A white-label gold savings platform for jewellers. One codebase serves many jewellery brands, each with its own branding, scheme rules and features.',
    problem:
      'Jewellers wanted to offer monthly gold savings schemes to customers, but paper registers and spreadsheets made enrolment, payments, redemption and expiry hard to manage and impossible to scale.',
    solution:
      'We built a multi-tenant platform: a customer mobile app, a CRM for jeweller staff, and a platform console that lets us onboard a new jeweller by configuration instead of new code.',
    highlights: [
      'Multi-tenant architecture with database-level row security between jewellers',
      'Live gold rate management and a full customer ledger',
      'Redemptions, expiry handling and role-based staff permissions',
      'Console with branding, feature flags and a built-in website CMS',
      'Seed-demo command and local setup guide for fast onboarding',
    ],
    stack: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'React Native', 'Docker'],
    agentic: 'Specs, migrations, API clients and test suites were drafted by agents and reviewed by engineers, keeping the platform consistent across four apps.',
    modules: ['Customer app', 'Jeweller CRM', 'Platform console', 'Business website'],
  },
  {
    slug: 'travels-management',
    name: 'Travels Management',
    kind: 'Cab Booking & Fleet Platform',
    summary:
      'An Ola-style travels booking system covering rider booking, driver operations and an admin panel to run the whole fleet.',
    problem:
      'Local travel operators were taking bookings over phone calls and messages, with no live visibility of vehicles, drivers or fares.',
    solution:
      'We built a booking website, driver workflow and an operations admin panel on a clean backend, so bookings, dispatch and pricing live in one system.',
    highlights: [
      'Instant booking with route, distance and transparent fare estimate',
      'Driver assignment and trip lifecycle tracking',
      'Admin panel for vehicles, drivers, bookings and revenue',
      'Responsive website designed for fast mobile booking',
      'Separate backend, website and admin apps for easy scaling',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'Maps', 'Admin Panel'],
    agentic: 'Fare logic, validation and admin screens were generated and tested by agents against a shared spec, then refined by our engineers.',
    modules: ['Booking website', 'Driver flow', 'Admin panel', 'Backend API'],
  },
]

export const POSTS = [
  {
    slug: 'what-is-agentic-development',
    title: 'What is AI agentic development, and why should clients care?',
    date: 'October 2026', read: '5 min read', tag: 'Agentic AI',
    excerpt: 'Beyond autocomplete: how coordinated AI agents plan, build, test and review software, and what that means for your timeline and budget.',
    body: [
      'Most people have seen AI complete a line of code. Agentic development goes much further. Instead of one assistant answering one prompt, a team of specialised agents works through a full cycle: understanding requirements, planning, writing code, testing it, reviewing it and preparing it for release.',
      'For a client this shows up as three things. First, speed: repetitive work like scaffolding, boilerplate and test writing happens in minutes instead of days. Second, consistency: the same checks run on every change, every time. Third, focus: our engineers spend their hours on architecture, product thinking and your specific problem.',
      'The important part is who stays in charge. At Nexora, agents never replace accountability. Senior engineers set direction, review every important decision and own the result. The agents simply let a small, focused team deliver like a much larger one.',
    ],
  },
  {
    slug: 'multi-tenant-saas-lessons',
    title: 'Building a white-label SaaS: lessons from DigiGold',
    date: 'October 2026', read: '6 min read', tag: 'SaaS',
    excerpt: 'How we serve many jewellers from one codebase without letting their data ever touch, and why configuration beats customisation.',
    body: [
      'A white-label product has one big promise: every customer feels like they have their own app. The risk is that every customer slowly becomes their own codebase. We avoided that by treating branding, scheme rules and features as configuration, never code.',
      'Isolation was the second decision. Each tenant-owned table carries a tenant id, and the database itself enforces that one jeweller can never read another jeweller’s rows, even if a query forgets a filter. Safety lives in the layer that cannot be forgotten.',
      'The result is that onboarding a new jeweller becomes a console task, not a development project. That is the kind of leverage SaaS should give both us and our clients.',
    ],
  },
  {
    slug: 'design-for-trust',
    title: 'Designing software interfaces that feel trustworthy',
    date: 'September 2026', read: '4 min read', tag: 'UI/UX',
    excerpt: 'Speed, clarity and small details: the quiet signals that tell users a product is built by people who care.',
    body: [
      'Users judge quality in seconds, long before they read a feature list. Fast loading, consistent spacing, clear error messages and smooth, purposeful motion all signal care.',
      'We design from a token-based system so colour, type and spacing stay consistent across web and mobile. Animation is used sparingly: to explain change, not to decorate it.',
      'The takeaway: trust is built in the details nobody writes in the brief. Good teams sweat them anyway.',
    ],
  },
  {
    slug: 'startup-advantage',
    title: 'Why a startup partner can be your biggest advantage',
    date: 'September 2026', read: '3 min read', tag: 'Company',
    excerpt: 'Direct access to the people building your product, fast decisions and a team that treats your launch as its own.',
    body: [
      'Big agencies bring process. Startups bring ownership. When you work with a young team, you talk directly to the people writing the code and making the decisions.',
      'We are putting our full effort and potential into every client because each project is our reputation. Combined with an agent-first workflow, that means fast iterations without sacrificing quality.',
    ],
  },
]

export const ROLES = [
  { title: 'Full-Stack Engineer (React / Node / Python)', type: 'Full-time', place: 'Tamil Nadu · Hybrid', text: 'Build SaaS products end to end, working side by side with AI coding agents.' },
  { title: 'AI Agent Engineer', type: 'Full-time', place: 'Remote / Hybrid', text: 'Design the agents, prompts, tools and evaluations that power our delivery cycle.' },
  { title: 'UI/UX Designer', type: 'Full-time', place: 'Tamil Nadu · Hybrid', text: 'Craft elegant, accessible interfaces and own our design system.' },
  { title: 'Mobile Developer (React Native)', type: 'Full-time', place: 'Remote / Hybrid', text: 'Ship polished iOS and Android apps for our SaaS clients.' },
  { title: 'Software Engineering Intern', type: 'Internship', place: 'Tamil Nadu', text: 'Learn agentic development on real client projects with mentoring.' },
]

export const PERKS = [
  'Work with the latest AI development tools',
  'Real ownership on client products',
  'Mentoring from day one',
  'Flexible, outcome-focused culture',
  'Learning budget and growth path',
  'Ground-floor startup opportunity',
]

export const TECH = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL',
  'React Native', 'Docker', 'AWS', 'Claude', 'OpenAI', 'Tailwind', 'Figma',
]
