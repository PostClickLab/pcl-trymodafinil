import { BadgeCheck } from 'lucide-react'
import { reviews, site } from '../../content'
import { Card, Container, Reveal, SectionHeading, Stars } from '../../components/ui'

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .replace(/[^A-Z]/gi, '')
    .slice(0, 2)
    .toUpperCase()

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-[72px] py-24 lg:py-32">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={reviews.eyebrow} title={reviews.title} />
          <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-1">
            <span className="text-5xl font-bold tracking-tight">{site.rating}</span>
            <div className="lg:text-right">
              <Stars size="size-5" />
              <p className="mt-1 text-sm text-muted">{reviews.summaryLabel}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <Card className="flex h-full flex-col p-6">
                <Stars size="size-4" />
                <h3 className="mt-4 font-bold leading-snug">“{r.title}”</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.body}</p>
                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-3 border-t border-navy/[0.08] pt-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-white">
                      {initials(r.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="inline-flex items-center gap-1 text-sm font-semibold">
                        {r.name}
                        <BadgeCheck className="size-4 fill-primary text-white" aria-label="Verified" />
                      </p>
                      <p className="text-xs text-muted">{r.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">{reviews.note}</p>
      </Container>
    </section>
  )
}
