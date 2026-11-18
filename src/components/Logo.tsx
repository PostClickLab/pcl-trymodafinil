import { Link } from 'react-router-dom'
import { site } from '../content'
import { cn } from '../lib/cn'
import { Tablet } from './Tablet'

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label={`${site.brand} home`}>
      <Tablet size={34} />
      <span
        className={cn(
          'font-serif text-[26px] font-bold italic leading-none tracking-tight',
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {site.brand}
      </span>
    </Link>
  )
}
