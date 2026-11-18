import { howItWorks } from '../../content'
import { Container, Reveal, SectionHeading } from '../../components/ui'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-[72px] overflow-hidden bg-navy py-24 text-white lg:py-32"
      style={{
        backgroundImage:
          'radial-gradient(50% 60% at 100% 0%, rgb(42 108 176 / 0.35) 0%, rgb(11 31 77 / 0) 70%), radial-gradient(40% 50% at 0% 100%, rgb(91 155 213 / 0.12) 0%, rgb(11 31 77 / 0) 70%)',
      }}
    >
      <Container>
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} dark />
          <p className="max-w-sm text-lg leading-relaxed text-white/70 lg:text-right">{howItWorks.body}</p>
        </Reveal>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line on desktop */}
          <span aria-hidden className="absolute top-[52px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 lg:block" />
          {howItWorks.steps.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 100}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-full bg-primary text-base font-bold shadow-[0_0_0_6px_rgb(42_108_176/0.2)]">
                  {i + 1}
                </span>
                <Icon className="size-6 text-sky" strokeWidth={1.75} />
              </div>
              <h3 className="mt-8 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
