import { ctaLabel, gumPage, site } from '../content'
import { EmailForm } from '../components/blocks'
import { Card, Container, Eyebrow, Italic, Reveal, SectionHeading, Stars, Button } from '../components/ui'

export default function Gum() {
  const { form, why, upsell } = gumPage
  return (
    <>
      {/* Hero */}
      <section
        data-hero
        className="relative overflow-hidden bg-navy text-white"
        style={{
          backgroundImage:
            'radial-gradient(50% 65% at 78% 45%, rgb(42 108 176 / 0.5) 0%, rgb(11 31 77 / 0) 70%), radial-gradient(40% 50% at 0% 100%, rgb(91 155 213 / 0.14) 0%, rgb(11 31 77 / 0) 70%)',
        }}
      >
        <Container className="grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold tracking-[0.18em]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-sky" />
                </span>
                {gumPage.badge}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl leading-[1.04] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                {gumPage.title}
                <br />
                <Italic>{gumPage.italic}</Italic>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">{gumPage.body}</p>
              <EmailForm
                dark
                className="mt-8 max-w-lg"
                placeholder={form.placeholder}
                button={form.button}
                success={form.success}
              />
              <p className="mt-3 text-sm text-white/50">{form.note}</p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgb(91 155 213 / 0.5), rgb(42 108 176 / 0) 70%)' }}
            />
            <img
              src="/images/gum-box.jpg"
              alt="Modafinil Gum box, clean mint"
              width={1122}
              height={1402}
              fetchPriority="high"
              className="relative aspect-[1122/1402] w-full rounded-3xl object-cover shadow-[0_40px_80px_-20px_rgb(3_10_30/0.6)] ring-1 ring-white/10"
            />
          </Reveal>
        </Container>
      </section>

      {/* Why gum */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={why.eyebrow} title={why.title} italic={why.italic} align="center" />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {why.cards.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Card className="h-full p-8">
                  <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Upsell */}
          <Reveal className="mt-16">
            <div
              className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10 md:grid-cols-[auto_1fr_auto] md:gap-10 lg:p-12"
              style={{ backgroundImage: 'radial-gradient(60% 90% at 0% 50%, rgb(42 108 176 / 0.45) 0%, rgb(11 31 77 / 0) 70%)' }}
            >
              <img
                src="/images/pills-bottle.jpg"
                alt="Modafinil + L-Theanine prescription bottle"
                width={1122}
                height={1402}
                loading="lazy"
                className="mx-auto aspect-[4/5] w-32 rounded-2xl object-cover shadow-[0_20px_40px_-10px_rgb(3_10_30/0.6)] md:w-36"
              />
              <div className="text-center md:text-left">
                <Eyebrow dark>{upsell.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{upsell.title}</h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/70 md:max-w-none">{upsell.body}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/75 md:justify-start">
                  <Stars size="size-4" />
                  <span>
                    <strong className="text-white">{site.rating}</strong> · {site.reviewCount} reviews
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 md:items-end">
                <p className="text-2xl font-bold">{upsell.price}</p>
                <Button href={site.getStartedHref} size="lg" arrow>
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
