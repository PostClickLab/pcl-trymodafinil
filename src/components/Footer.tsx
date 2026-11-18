import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import { footer } from '../content'
import { EmailForm } from './blocks'
import { Logo } from './Logo'
import { Container } from './ui'

export function Footer() {
  return (
    <footer id="site-footer" className="bg-navy text-white">
      <Container className="pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-5 leading-relaxed text-white/65">{footer.tagline}</p>
            <p className="mt-8 text-sm font-semibold">{footer.newsletter.title}</p>
            <EmailForm
              dark
              className="mt-3"
              placeholder={footer.newsletter.placeholder}
              button={footer.newsletter.button}
              success={footer.newsletter.success}
            />
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {footer.seals.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2.5 text-sm text-white/75">
                <span className="grid size-9 place-items-center rounded-full bg-white/[0.07] text-sky">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-2 self-start rounded-lg border border-white/20 px-3.5 py-2 text-[11px] font-bold tracking-[0.18em] text-white/85 lg:self-auto">
            <ShieldCheck className="size-4 text-sky" />
            {footer.legitScript}
          </span>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-white/45">{footer.disclaimer}</p>
        <p className="mt-6 text-xs text-white/45">{footer.copyright}</p>
      </Container>
    </footer>
  )
}
