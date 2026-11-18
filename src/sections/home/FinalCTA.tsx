import { ctaLabel, finalCta, site } from '../../content'
import { TrustRow } from '../../components/blocks'
import { Button, Container, Reveal, SectionHeading } from '../../components/ui'

function Mountains() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full"
    >
      <path
        d="M0 210 L120 150 L230 190 L380 90 L520 170 L640 120 L760 180 L900 70 L1040 160 L1160 110 L1300 170 L1440 120 V320 H0 Z"
        fill="#2a6cb0"
        fillOpacity="0.14"
      />
      <path
        d="M0 250 L160 190 L300 230 L460 160 L600 220 L740 170 L880 230 L1020 150 L1180 220 L1320 180 L1440 210 V320 H0 Z"
        fill="#5b9bd5"
        fillOpacity="0.1"
      />
      <path
        d="M0 290 L180 240 L340 275 L520 225 L700 270 L860 235 L1040 280 L1220 240 L1440 270 V320 H0 Z"
        fill="#0b1f4d"
      />
    </svg>
  )
}

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-28 text-white lg:py-36"
      style={{
        backgroundImage: 'radial-gradient(60% 70% at 50% 0%, rgb(42 108 176 / 0.45) 0%, rgb(11 31 77 / 0) 70%)',
      }}
    >
      <Mountains />
      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading title={finalCta.title} italic={finalCta.italic} breakItalic dark align="center" size="xl">
            <p>{finalCta.body}</p>
          </SectionHeading>
          <Button href={site.getStartedHref} size="lg" arrow className="mt-10">
            {ctaLabel}
          </Button>
          <TrustRow dark className="mt-10 justify-center" />
        </Reveal>
      </Container>
    </section>
  )
}
