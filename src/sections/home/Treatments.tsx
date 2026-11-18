import { site, treatments } from '../../content'
import { Badge, Button, Card, CheckList, Container, Reveal, SectionHeading, Stars } from '../../components/ui'

export function Treatments() {
  const { pills, gum } = treatments
  return (
    <section id="treatments" className="scroll-mt-[72px] bg-mist py-24 lg:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={treatments.eyebrow} title={treatments.title} />
          <p className="max-w-sm text-lg leading-relaxed text-muted lg:text-right">{treatments.aside}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Pills */}
          <Reveal>
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[8/9] overflow-hidden bg-[#e3e9f2]">
                <img
                  src="/images/pills-bottle.jpg"
                  alt="Modafinil + L-Theanine prescription bottle"
                  width={1122}
                  height={1402}
                  loading="lazy"
                  className="size-full object-cover"
                />
                <Badge className="absolute top-5 left-5">{pills.badge}</Badge>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Stars size="size-3.5" />
                  <span>
                    <strong className="font-semibold text-navy">{site.rating}</strong> · {site.reviewCount} reviews
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{pills.name}</h3>
                <p className="mt-1 text-muted">{pills.tagline}</p>
                <CheckList items={pills.bullets} className="mt-6" />
                <div className="mt-auto pt-8">
                  <div className="border-t border-navy/[0.08] pt-6">
                    <p className="text-sm text-muted">
                      {pills.priceLead} <span className="text-2xl font-bold text-navy">{pills.price}</span>
                    </p>
                    <p className="mt-1 text-xs text-muted">{pills.priceNote}</p>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Button href={site.getStartedHref}>{pills.primary}</Button>
                    <Button href="/pills" variant="outline">
                      {pills.secondary}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Gum */}
          <Reveal delay={120}>
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[8/9] overflow-hidden bg-[#e3e9f2]">
                <img
                  src="/images/gum-box.jpg"
                  alt="Modafinil Gum box, clean mint"
                  width={1122}
                  height={1402}
                  loading="lazy"
                  className="size-full object-cover"
                />
                <Badge tone="sky" className="absolute top-5 left-5">
                  {gum.badge}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="size-2 animate-pulse rounded-full bg-sky" />
                  {gum.status}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{gum.name}</h3>
                <p className="mt-1 text-muted">{gum.tagline}</p>
                <CheckList items={gum.bullets} className="mt-6" />
                <div className="mt-auto pt-8">
                  <Button href="/gum" variant="navy" size="lg" className="w-full">
                    {gum.cta}
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
