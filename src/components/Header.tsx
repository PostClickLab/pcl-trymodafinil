import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ctaLabel, nav, site } from '../content'
import { cn } from '../lib/cn'
import { Logo } from './Logo'
import { Button, Container } from './ui'

function NavBadge({ children }: { children: string }) {
  return (
    <span className="ml-1.5 rounded-full bg-sky px-1.5 py-0.5 text-[9px] leading-none font-bold tracking-wider text-white">
      {children}
    </span>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.key])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300',
        scrolled ? 'border-navy/[0.08] shadow-[0_6px_24px_-16px_rgb(11_31_77/0.35)]' : 'border-transparent',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="inline-flex items-center text-sm font-medium text-navy/75 transition-colors hover:text-navy"
            >
              {item.label}
              {item.badge && <NavBadge>{item.badge}</NavBadge>}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={site.getStartedHref} className="hidden sm:inline-flex">
            {ctaLabel}
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-mist lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* mobile menu */}
      <div
        className={cn(
          'grid border-t border-navy/[0.06] bg-white transition-[grid-template-rows] duration-300 lg:hidden',
          open ? 'grid-rows-[1fr]' : 'pointer-events-none grid-rows-[0fr] border-transparent',
        )}
      >
        <div className="overflow-hidden">
          <Container className="pt-2 pb-6">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center border-b border-navy/[0.06] py-4 text-lg font-semibold text-navy"
                >
                  {item.label}
                  {item.badge && <NavBadge>{item.badge}</NavBadge>}
                </Link>
              ))}
            </nav>
            <Button href={site.getStartedHref} size="lg" arrow className="mt-6 w-full">
              {ctaLabel}
            </Button>
          </Container>
        </div>
      </div>
    </header>
  )
}
