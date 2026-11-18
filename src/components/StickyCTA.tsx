import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ctaLabel, site, stickyCta } from '../content'
import { cn } from '../lib/cn'
import { Tablet } from './Tablet'
import { Button, Container } from './ui'

/** Bottom bar that slides in once the user scrolls past the hero, and hides over the footer. */
export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('[data-hero]')
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 520
      const footer = document.getElementById('site-footer')
      const overFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false
      setVisible(pastHero && !overFooter)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [location.pathname])

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 text-white backdrop-blur-lg transition-transform duration-500 ease-out',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full',
      )}
    >
      <Container className="flex items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Tablet size={40} className="hidden sm:grid" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {stickyCta.title}
              <span className="hidden font-normal text-white/70 sm:inline"> · {stickyCta.titleSuffix}</span>
            </p>
            <p className="truncate text-xs text-white/65">
              <span className="text-star">★</span> {stickyCta.meta}
            </p>
          </div>
        </div>
        <Button href={site.getStartedHref} arrow className="shrink-0">
          {ctaLabel}
        </Button>
      </Container>
    </div>
  )
}
