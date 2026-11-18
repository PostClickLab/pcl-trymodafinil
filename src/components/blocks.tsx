import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { benefits, trustRow, type IconText } from '../content'
import { cn } from '../lib/cn'
import { Button, Reveal } from './ui'

/* -------------------------------- TrustRow -------------------------------- */

export function TrustRow({
  items = trustRow,
  dark,
  className,
}: {
  items?: IconText[]
  dark?: boolean
  className?: string
}) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-6 gap-y-3 text-sm', dark ? 'text-white/70' : 'text-muted', className)}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="inline-flex items-center gap-2">
          <Icon className={cn('size-4', dark ? 'text-sky' : 'text-primary')} />
          {label}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------ BenefitsStrip ----------------------------- */

export function BenefitsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid gap-px overflow-hidden rounded-2xl border border-navy/[0.08] bg-navy/[0.08] sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
    >
      {benefits.map(({ icon: Icon, title, body }, i) => (
        <Reveal key={title} delay={i * 80} className="flex gap-4 bg-white p-6 lg:flex-col lg:p-7">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Icon className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold text-navy">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------- EmailForm -------------------------------- */

/**
 * Email capture used for the gum waitlist and the newsletter.
 * No backend is wired up: hook `onSubmit` to your ESP / API.
 */
export function EmailForm({
  placeholder,
  button,
  success,
  dark,
  className,
}: {
  placeholder: string
  button: string
  success: string
  dark?: boolean
  className?: string
}) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: send `email` to your email provider.
    setDone(true)
  }

  if (done)
    return (
      <p
        role="status"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium',
          dark ? 'bg-white/10 text-white' : 'bg-save/10 text-save',
          className,
        )}
      >
        <Check className="size-4" /> {success}
      </p>
    )

  return (
    <form onSubmit={onSubmit} className={cn('flex flex-col gap-2 sm:flex-row', className)}>
      <label className="sr-only" htmlFor={`email-${button}`}>
        Email address
      </label>
      <input
        id={`email-${button}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'h-12 min-w-0 flex-1 rounded-full border px-5 text-sm outline-none transition-colors',
          dark
            ? 'border-white/15 bg-white/[0.07] text-white placeholder:text-white/45 focus:border-sky'
            : 'border-navy/15 bg-white text-navy placeholder:text-muted focus:border-primary',
        )}
      />
      <Button type="submit" variant={dark ? 'white' : 'primary'} className="h-12 shrink-0">
        {button}
      </Button>
    </form>
  )
}
