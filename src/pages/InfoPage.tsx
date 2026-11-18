import { useParams } from 'react-router-dom'
import { ctaLabel, infoPages, site } from '../content'
import { Button, Container, Reveal, SectionHeading } from '../components/ui'

export default function InfoPage() {
  const { slug = '' } = useParams()
  const page = infoPages[slug]

  if (!page)
    return (
      <section className="py-32">
        <Container className="max-w-2xl text-center">
          <SectionHeading eyebrow="404" title="Page not found." align="center" as="h1">
            <p>The page you are looking for doesn’t exist or has moved.</p>
          </SectionHeading>
          <Button href="/" className="mt-10" arrow>
            Back to home
          </Button>
        </Container>
      </section>
    )

  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow={page.eyebrow} title={page.title} italic={page.italic} as="h1" />
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
            {page.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button href={site.getStartedHref} size="lg" arrow className="mt-12">
            {ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
