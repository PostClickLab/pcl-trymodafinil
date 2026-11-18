import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'
import { cn } from '../lib/cn'

/* ------------------------------- Container -------------------------------- */

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-6', className)}>{children}</div>
}

/* --------------------------------- Button --------------------------------- */

type ButtonVariant = 'primary' | 'navy' | 'outline' | 'white' | 'outline-light'

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-[0_8px_20px_-8px_rgb(42_108_176/0.6)]',
  navy: 'bg-navy text-white hover:bg-navy-deep',
  outline: 'border border-navy/15 bg-white text-navy hover:border-navy/30 hover:bg-navy/[0.04]',
  white: 'bg-white text-navy hover:bg-mist',
  'outline-light': 'border border-white/25 text-white hover:bg-white/10',
}

type ButtonProps = {
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  arrow?: boolean
  className?: string
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  href,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky',
    size === 'lg' ? 'h-14 px-8 text-base' : 'h-11 px-6 text-sm',
    buttonVariants[variant],
    className,
  )
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  )
  if (href?.startsWith('/'))
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    )
  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  )
}

/* ---------------------------- Headings & type ----------------------------- */

export function Italic({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('font-serif font-semibold italic tracking-normal text-sky', className)}>{children}</span>
}

export function Eyebrow({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.22em]',
        dark ? 'text-sky' : 'text-primary',
        className,
      )}
    >
      {children}
    </p>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  /** Rendered in Playfair italic, light blue, after the title. */
  italic?: string
  /** Put the italic part on its own line. */
  breakItalic?: boolean
  dark?: boolean
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  size?: 'md' | 'lg' | 'xl'
  className?: string
  children?: ReactNode
}

const headingSizes = {
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl',
  xl: 'text-5xl sm:text-6xl lg:text-7xl',
}

export function SectionHeading({
  eyebrow,
  title,
  italic,
  breakItalic,
  dark,
  align = 'left',
  as: Tag = 'h2',
  size = 'lg',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Eyebrow dark={dark} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          'font-bold leading-[1.05] tracking-tight text-balance',
          headingSizes[size],
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {title}
        {italic && (
          <>
            {breakItalic ? <br /> : ' '}
            <Italic>{italic}</Italic>
          </>
        )}
      </Tag>
      {children && (
        <div
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/70' : 'text-muted',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

/* --------------------------------- Reveal --------------------------------- */

export function useInView<T extends Element>(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView }
}

/** Fades and slides children up when they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------ Small pieces ------------------------------ */

export function Stars({ className, size = 'size-4' }: { className?: string; size?: string }) {
  return (
    <span className={cn('inline-flex gap-0.5', className)} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn(size, 'fill-star text-star')} />
      ))}
    </span>
  )
}

export function CheckList({
  items,
  className,
  dark,
  cols = 1,
}: {
  items: string[]
  className?: string
  dark?: boolean
  cols?: 1 | 2
}) {
  return (
    <ul className={cn(cols === 2 ? 'grid gap-3 sm:grid-cols-2' : 'space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className={cn('flex items-start gap-3 text-[15px]', dark ? 'text-white/85' : 'text-navy')}>
          <span
            className={cn(
              'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full',
              dark ? 'bg-sky/20 text-sky' : 'bg-primary/10 text-primary',
            )}
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Badge({ children, tone = 'navy', className }: { children: ReactNode; tone?: 'navy' | 'sky' | 'primary'; className?: string }) {
  const tones = { navy: 'bg-navy text-white', sky: 'bg-sky text-white', primary: 'bg-primary text-white' }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Card({ className, children, hover = true }: { className?: string; children: ReactNode; hover?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-navy/[0.08] bg-white shadow-card',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      {children}
    </div>
  )
}
