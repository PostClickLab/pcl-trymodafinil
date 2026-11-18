import { Check } from 'lucide-react'
import { ctaLabel, hero, site } from '../../content'
import { TrustRow } from '../../components/blocks'
import { Button, Container, Italic, Reveal, Stars } from '../../components/ui'

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-[6%] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(91 155 213 / 0.45), rgb(42 108 176 / 0) 70%)' }}
      />
      <img
        src="/images/hero-vial.jpg"
        alt="Modafinil + L-Theanine prescription bottle, 30 tablets"
        width={1122}
        height={1402}
        fetchPriority="high"
        className="relative aspect-[1122/1402] w-full rounded-3xl object-cover shadow-[0_40px_80px_-20px_rgb(3_10_30/0.6)] ring-1 ring-white/10"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section
      data-hero
      className="relative overflow-hidden bg-navy text-white"
      style={{
        backgroundImage:
          'radial-gradient(55% 65% at 78% 38%, rgb(42 108 176 / 0.55) 0%, rgb(11 31 77 / 0) 70%), radial-gradient(45% 55% at 0% 100%, rgb(91 155 213 / 0.16) 0%, rgb(11 31 77 / 0) 70%)',
      }}
    >
      <Container className="grid items-center gap-12 pt-14 pb-12 lg:grid-cols-[1.25fr_1fr] lg:pt-20 lg:pb-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 sm:text-sm">
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[64px] xl:text-[72px]">
              {hero.title}
              <br />
              <Italic>{hero.italic}</Italic>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{hero.subtitle}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/90"
                >
                  <Check className="size-3.5 text-sky" strokeWidth={3} />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button href={site.getStartedHref} size="lg" arrow>
              {ctaLabel}
            </Button>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Stars />
              <span>
                <strong className="font-semibold text-white">{site.rating}</strong> · {site.reviewCount} reviews
              </span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <TrustRow dark className="mt-9" />
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                'py-7 lg:px-8 lg:py-9',
                i % 2 === 1 ? 'pl-5 border-l border-white/10' : '',
                i > 1 ? 'border-t border-white/10 lg:border-t-0' : '',
                i === 2 ? 'lg:border-l lg:border-white/10' : '',
                i === 0 ? 'lg:pl-0' : '',
              ].join(' ')}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
