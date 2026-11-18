import type { CSSProperties } from 'react'
import { cn } from '../lib/cn'

/** Pearl-white pill with an embossed serif "m". Used in the logo, hero and packaging. */
export function Tablet({ size = 64, className, style }: { size?: number; className?: string; style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className={cn('relative grid shrink-0 place-items-center rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle at 34% 28%, #ffffff 0%, #f4f6f9 42%, #dfe4ec 78%, #c9d1dc 100%)',
        boxShadow: `inset ${-size * 0.04}px ${-size * 0.06}px ${size * 0.12}px rgb(11 31 77 / 0.14), inset ${size * 0.03}px ${size * 0.03}px ${size * 0.06}px rgb(255 255 255 / 0.95), 0 ${size * 0.14}px ${size * 0.3}px -${size * 0.1}px rgb(11 31 77 / 0.4)`,
        ...style,
      }}
    >
      <span
        className="absolute rounded-full"
        style={{
          inset: '9%',
          boxShadow: 'inset 0 1px 2px rgb(11 31 77 / 0.1), 0 1px 0 rgb(255 255 255 / 0.9)',
        }}
      />
      <span
        className="relative font-serif font-medium italic leading-none select-none"
        style={{
          fontSize: size * 0.56,
          color: '#e7ebf1',
          marginTop: -size * 0.1,
          textShadow: `-1px -1px 1px rgb(11 31 77 / 0.22), 1px 1px 1px rgb(255 255 255 / 0.95)`,
        }}
      >
        m
      </span>
    </div>
  )
}
