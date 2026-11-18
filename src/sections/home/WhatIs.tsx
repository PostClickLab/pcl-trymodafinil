import { Link } from 'react-router-dom'
import { ArrowRight, Plus } from 'lucide-react'
import { whatIs } from '../../content'
import { Container, Reveal, SectionHeading } from '../../components/ui'
import { cn } from '../../lib/cn'

export function WhatIs() {
  return (
    <section id="formula" className="scroll-mt-[72px] py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={whatIs.eyebrow} title={whatIs.title} italic={whatIs.italic} breakItalic>
            <p>{whatIs.body}</p>
          </SectionHeading>
          <Link
            to={whatIs.link.href}
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
          >
            {whatIs.link.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="relative grid gap-5 sm:grid-cols-2">
          {whatIs.cards.map(({ eyebrow, title, icon: Icon, tag, body, dark }, i) => (
            <Reveal
              key={title}
              delay={i * 120}
              className={cn(
                'flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 sm:min-h-[340px]',
                dark
                  ? 'bg-navy text-white shadow-[0_30px_60px_-30px_rgb(11_31_77/0.7)]'
                  : 'border border-navy/[0.08] bg-mist text-navy',
                i === 1 && 'sm:mt-12',
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'grid size-12 place-items-center rounded-full',
                    dark ? 'bg-white/10 text-sky' : 'bg-white text-primary shadow-card',
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-[11px] font-semibold',
                    dark ? 'bg-white/10 text-white/80' : 'bg-white text-muted',
                  )}
                >
                  {tag}
                </span>
              </div>
              <p
                className={cn(
                  'mt-auto pt-12 text-xs font-semibold tracking-[0.22em] uppercase',
                  dark ? 'text-sky' : 'text-primary',
                )}
              >
                {eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold italic">{title}</h3>
              <p className={cn('mt-3 text-[15px] leading-relaxed', dark ? 'text-white/70' : 'text-muted')}>{body}</p>
            </Reveal>
          ))}
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-primary text-white sm:grid"
          >
            <Plus className="size-4" strokeWidth={3} />
          </span>
        </div>
      </Container>
    </section>
  )
}
