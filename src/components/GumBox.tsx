import { useId } from 'react'
import { cn } from '../lib/cn'

/** White retail box for Modafinil Gum, drawn in SVG with a navy "COMING SOON" band. */
export function GumBox({ className, band = true }: { className?: string; band?: boolean }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const id = (name: string) => `${name}-${uid}`
  const url = (name: string) => `url(#${id(name)})`

  return (
    <svg viewBox="0 0 260 310" className={cn('block h-auto', className)} role="img" aria-label="Modafinil Gum box">
      <defs>
        <linearGradient id={id('front')} x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef2f7" />
        </linearGradient>
        <linearGradient id={id('side')} x1="0" x2="1">
          <stop offset="0" stopColor="#d3dbe6" />
          <stop offset="1" stopColor="#bfc9d7" />
        </linearGradient>
        <radialGradient id={id('pill')} cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f1f4f8" />
          <stop offset="1" stopColor="#c8d1dd" />
        </radialGradient>
        <filter id={id('blur')} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx="135" cy="292" rx="105" ry="10" fill="rgb(11 31 77 / 0.25)" filter={url('blur')} />

      {/* top */}
      <polygon points="36,64 80,38 228,38 184,64" fill="#f6f8fb" stroke="rgb(11 31 77 / 0.08)" />
      {/* side */}
      <polygon points="184,64 228,38 228,254 184,280" fill={url('side')} />
      {/* front */}
      <rect x="36" y="64" width="148" height="216" fill={url('front')} stroke="rgb(11 31 77 / 0.08)" />

      <text x="110" y="128" textAnchor="middle" fill="#0b1f4d" style={{ font: 'italic 700 27px "Playfair Display", Georgia, serif' }}>
        modafinil
      </text>
      <text x="110" y="150" textAnchor="middle" fill="#2a6cb0" letterSpacing="6" style={{ font: '700 13px Inter, sans-serif' }}>
        GUM
      </text>
      <circle cx="110" cy="190" r="19" fill={url('pill')} stroke="rgb(11 31 77 / 0.08)" />
      <text x="110" y="196" textAnchor="middle" fill="#e3e8ef" stroke="rgb(11 31 77 / 0.2)" strokeWidth="0.4" style={{ font: 'italic 500 22px "Playfair Display", Georgia, serif' }}>
        m
      </text>
      <text x="110" y="225" textAnchor="middle" fill="#64748b" letterSpacing="0.8" style={{ font: '500 7.5px Inter, sans-serif' }}>
        CLEAN MINT · Rx ONLY
      </text>

      {band && (
        <>
          <rect x="36" y="240" width="148" height="28" fill="#0b1f4d" />
          <polygon points="184,240 228,214 228,242 184,268" fill="#061433" />
          <text x="110" y="258" textAnchor="middle" fill="#fff" letterSpacing="3" style={{ font: '700 9px Inter, sans-serif' }}>
            COMING SOON
          </text>
        </>
      )}

      {/* edge highlight */}
      <line x1="184" y1="64" x2="184" y2="280" stroke="#fff" strokeOpacity="0.8" />
    </svg>
  )
}
