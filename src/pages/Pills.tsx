import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Stethoscope } from 'lucide-react'
import { ctaLabel, pillsPage, site, type Plan } from '../content'
import { Accordion } from '../components/Accordion'
import { BenefitsStrip } from '../components/blocks'
import { Badge, Button, CheckList, Container, Reveal, Stars } from '../components/ui'
import { cn } from '../lib/cn'

const money = (n: number) => `$${n.toLocaleString('en-US')}`

/* -------------------------------- Gallery --------------------------------- */

function Gallery() {
  const [tab, setTab] = useState(pillsPage.galleryTabs[0].id)
  const { durationPanel: dur, providerPanel: prov } = pillsPage

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#e7ecf3_55%,#d5dce6_100%)]">
        <Badge className="absolute top-5 left-5 z-10">{pillsPage.badge}</Badge>

        {tab === 'product' && (
          <div key="product" className="absolute inset-0 animate-[fadeIn_.4s_ease-out]">
            <img
              src="/images/pills-bottle.jpg"
              alt="Modafinil + L-Theanine prescription bottle, 30 tablets"
              width={1122}
              height={1402}
              fetchPriority="high"
              className="size-full object-cover"
            />
          </div>
        )}

        {tab === 'duration' && (
          <div key="duration" className="absolute inset-0 flex animate-[fadeIn_.4s_ease-out] flex-col items-center justify-center p-10 text-center">
            <p className="text-6xl font-extrabold tracking-tight text-navy sm:text-7xl">{dur.value}</p>
            <p className="mt-3 max-w-xs text-muted">{dur.label}</p>
            <div className="mt-10 w-full max-w-sm">
              <div className="h-3 overflow-hidden rounded-full bg-navy/10">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-sky via-primary to-navy" />
              </div>
              <div className="mt-3 flex justify-between text-xs font-medium text-muted">
                {dur.timeline.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'provider' && (
          <div key="provider" className="absolute inset-0 grid animate-[fadeIn_.4s_ease-out] place-items-center p-8">
            <div className="w-full max-w-sm rounded-2xl bg-white p-7 shadow-card-hover">
              <span className="grid size-12 place-items-center rounded-full bg-navy text-white">
                <Stethoscope className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{prov.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{prov.body}</p>
              <CheckList items={prov.points} className="mt-5" />
            </div>
          </div>
        )}
      </div>

      <div role="tablist" aria-label="Product views" className="mt-4 grid grid-cols-3 gap-2 rounded-full bg-mist p-1.5">
        {pillsPage.galleryTabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              'h-10 rounded-full text-sm font-semibold transition-all',
              tab === t.id ? 'bg-white text-navy shadow-card' : 'text-muted hover:text-navy',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ Plan selector ----------------------------- */

function PlanOption({ plan, selected, onSelect }: { plan: Plan; selected: boolean; onSelect: () => void }) {
  return (
    <label
      className={cn(
        'relative flex cursor-pointer items-center gap-4 rounded-2xl border bg-white p-4 transition-all sm:p-5',
        selected
          ? 'border-primary shadow-[0_0_0_3px_rgb(42_108_176/0.15)]'
          : 'border-navy/10 hover:border-navy/25',
      )}
    >
      <input type="radio" name="plan" value={plan.id} checked={selected} onChange={onSelect} className="peer sr-only" />
      <span
        className={cn(
          'grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky',
          selected ? 'border-primary' : 'border-navy/25',
        )}
      >
        <span className={cn('size-2.5 rounded-full bg-primary transition-transform', selected ? 'scale-100' : 'scale-0')} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-navy">{plan.name}</span>
        <span className="mt-0.5 block text-sm text-muted">
          {plan.perMonth}
          {plan.save && <span className="ml-2 font-semibold text-save">{plan.save}</span>}
        </span>
      </span>
      <span className="text-right">
        <span className="block text-lg font-bold text-navy">{money(plan.total)}</span>
        {plan.compareAt && <span className="block text-sm text-muted line-through">{money(plan.compareAt)}</span>}
      </span>
      {plan.badge && (
        <span
          className={cn(
            'absolute -top-2.5 right-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em]',
            plan.badge === 'MOST POPULAR' ? 'bg-primary text-white' : 'bg-navy text-white',
          )}
        >
          {plan.badge}
        </span>
      )}
    </label>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function Pills() {
  const [planId, setPlanId] = useState(pillsPage.defaultPlan)
  const plan = pillsPage.plans.find((p) => p.id === planId) ?? pillsPage.plans[0]

  return (
    <>
      <section data-hero className="pt-8 pb-20 lg:pb-28">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-muted">
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-navy">{pillsPage.breadcrumb}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <Gallery />
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Stars size="size-4" />
                <span>
                  <strong className="font-semibold text-navy">{site.rating}</strong> · {site.reviewCount} reviews
                </span>
              </div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{pillsPage.title}</h1>
              <p className="mt-2 text-lg font-semibold text-primary">{pillsPage.subtitle}</p>
              <p className="mt-4 leading-relaxed text-muted">{pillsPage.description}</p>

              <CheckList items={pillsPage.checklist} cols={2} className="mt-6" />

              <fieldset className="mt-10">
                <legend className="mb-4 text-sm font-semibold tracking-[0.18em] text-navy uppercase">
                  {pillsPage.supplyTitle}
                </legend>
                <div className="space-y-3.5">
                  {pillsPage.plans.map((p) => (
                    <PlanOption key={p.id} plan={p} selected={p.id === planId} onSelect={() => setPlanId(p.id)} />
                  ))}
                </div>
              </fieldset>

              <Button href={`${site.checkoutHref}?plan=${plan.id}`} size="lg" arrow className="mt-6 w-full">
                {ctaLabel} · {money(plan.total)}
              </Button>
              <p className="mt-3 text-center text-xs text-muted">{pillsPage.ctaNote}</p>

              <ul className="mt-8 grid grid-cols-3 gap-3">
                {pillsPage.guarantees.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-navy/[0.08] bg-mist px-2 py-4 text-center text-xs leading-snug font-medium text-navy sm:text-[13px]"
                  >
                    <Icon className="size-5 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>

              <Link
                to={pillsPage.gumCard.href}
                className="group mt-6 flex items-center gap-4 rounded-2xl border border-navy/[0.08] bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <img
                  src="/images/gum-box.jpg"
                  alt=""
                  width={1122}
                  height={1402}
                  loading="lazy"
                  className="size-14 shrink-0 rounded-xl object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-navy">{pillsPage.gumCard.title}</span>
                  <span className="block text-sm text-muted">{pillsPage.gumCard.body}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>

              <Accordion
                variant="plain"
                className="mt-10"
                defaultOpen={0}
                items={pillsPage.accordion.map((a) => ({
                  title: a.title,
                  content: (
                    <div className="space-y-3">
                      {a.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ),
                }))}
              />

              <p className="mt-6 text-sm text-muted">
                {pillsPage.formulaLink.lead}{' '}
                <Link
                  to={pillsPage.formulaLink.href}
                  className="group inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark"
                >
                  {pillsPage.formulaLink.label}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <BenefitsStrip />
        </Container>
      </section>
    </>
  )
}
