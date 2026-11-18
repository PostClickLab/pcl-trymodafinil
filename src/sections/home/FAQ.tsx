import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { faq } from '../../content'
import { Accordion } from '../../components/Accordion'
import { Container, Reveal, SectionHeading } from '../../components/ui'

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-[72px] bg-mist py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title}>
            <p>{faq.body}</p>
          </SectionHeading>
          <Link
            to={faq.contact.href}
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white py-2 pr-5 pl-2 text-sm font-semibold shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <span className="grid size-9 place-items-center rounded-full bg-navy text-white">
              <MessageCircle className="size-4" />
            </span>
            {faq.contact.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <Accordion items={faq.items.map((item) => ({ title: item.q, content: <p>{item.a}</p> }))} defaultOpen={0} />
        </Reveal>
      </Container>
    </section>
  )
}
