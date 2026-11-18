import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnnouncementBar } from './AnnouncementBar'
import { Footer } from './Footer'
import { Header } from './Header'
import { StickyCTA } from './StickyCTA'

/** Scrolls to top on route change, or to the #hash target when present. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    // Wait a frame so the target page has rendered.
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    return () => window.clearTimeout(t)
  }, [pathname, hash, key])
  return null
}

export function Layout() {
  return (
    <>
      <ScrollManager />
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
