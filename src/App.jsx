import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('nexora-theme', theme) } catch { /* storage unavailable */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0613' : '#fbf9ff')
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [loading, setLoading] = useState(() => {
    try { return !sessionStorage.getItem('nexora-intro') } catch { return true }
  })
  const location = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  const finishIntro = () => {
    try { sessionStorage.setItem('nexora-intro', '1') } catch { /* storage unavailable */ }
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>{loading && <Preloader onDone={finishIntro} />}</AnimatePresence>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home ready={!loading} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
