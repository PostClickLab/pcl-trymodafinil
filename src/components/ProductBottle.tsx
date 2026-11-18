import { useId } from 'react'
import { cn } from '../lib/cn'

/**
 * Prescription bottle drawn in SVG: ribbed navy cap, translucent glass body,
 * blue label with wordmark and an embossed tablet.
 */
export function ProductBottle({ className, label = true }: { className?: string; label?: boolean }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const id = (name: string) => `${name}-${uid}`
  const url = (name: string) => `url(#${id(name)})`

  return (
    <svg viewBox="0 0 240 384" className={cn('block h-auto', className)} role="img" aria-label="Modafinil prescription bottle">
      <defs>
        <linearGradient id={id('cap')} x1="0" x2="1">
          <stop offset="0" stopColor="#06122e" />
          <stop offset="0.18" stopColor="#1d3d84" />
          <stop offset="0.42" stopColor="#10295f" />
          <stop offset="0.78" stopColor="#0b1f4d" />
          <stop offset="1" stopColor="#050f27" />
        </linearGradient>
        <pattern id={id('ribs')} width="6" height="10" patternUnits="userSpaceOnUse">
          <rect width="2.4" height="10" fill="rgb(255 255 255 / 0.09)" />
          <rect x="3" width="3" height="10" fill="rgb(0 0 0 / 0.22)" />
        </pattern>
        <linearGradient id={id('glass')} x1="0" x2="1">
          <stop offset="0" stopColor="#b9c7da" stopOpacity="0.75" />
          <stop offset="0.1" stopColor="#ffffff" stopOpacity="0.92" />
          <stop offset="0.3" stopColor="#eaf0f8" stopOpacity="0.45" />
          <stop offset="0.7" stopColor="#dce5f1" stopOpacity="0.35" />
          <stop offset="0.9" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#a9b8cd" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={id('label')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f86cf" />
          <stop offset="0.5" stopColor="#2a6cb0" />
          <stop offset="1" stopColor="#0f2a63" />
        </linearGradient>
        <linearGradient id={id('labelShade')} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.32" />
          <stop offset="0.22" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.85" stopColor="#000" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000" stopOpacity="0.38" />
        </linearGradient>
        <radialGradient id={id('pill')} cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f1f4f8" />
          <stop offset="1" stopColor="#c8d1dd" />
        </radialGradient>
        <clipPath id={id('body')}>
          <rect x="28" y="104" width="184" height="258" rx="26" />
        </clipPath>
        <filter id={id('blur')} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* floor shadow */}
      <ellipse cx="120" cy="368" rx="90" ry="9" fill="rgb(11 31 77 / 0.28)" filter={url('blur')} />

      {/* neck */}
      <rect x="54" y="86" width="132" height="26" rx="6" fill={url('glass')} stroke="rgb(11 31 77 / 0.12)" />

      {/* glass body */}
      <rect x="28" y="104" width="184" height="258" rx="26" fill={url('glass')} stroke="rgb(11 31 77 / 0.14)" />

      {label && (
        <g clipPath={url('body')}>
          <rect x="28" y="148" width="184" height="172" fill={url('label')} />
          <rect x="28" y="148" width="184" height="172" fill={url('labelShade')} />
          <text
            x="120"
            y="194"
            textAnchor="middle"
            fill="#fff"
            style={{ font: 'italic 700 33px "Playfair Display", Georgia, serif' }}
          >
            modafinil
          </text>
          <line x1="58" x2="182" y1="208" y2="208" stroke="rgb(255 255 255 / 0.45)" />
          <text
            x="120"
            y="226"
            textAnchor="middle"
            fill="rgb(255 255 255 / 0.88)"
            letterSpacing="1.4"
            style={{ font: '600 8.5px Inter, sans-serif' }}
          >
            MODAFINIL + L-THEANINE
          </text>
          <circle cx="120" cy="264" r="23" fill={url('pill')} />
          <circle cx="120" cy="264" r="19.5" fill="none" stroke="rgb(11 31 77 / 0.08)" />
          <text
            x="120"
            y="270"
            textAnchor="middle"
            fill="#e3e8ef"
            stroke="rgb(11 31 77 / 0.18)"
            strokeWidth="0.4"
            style={{ font: 'italic 500 26px "Playfair Display", Georgia, serif' }}
          >
            m
          </text>
          <text
            x="120"
            y="307"
            textAnchor="middle"
            fill="rgb(255 255 255 / 0.75)"
            letterSpacing="0.6"
            style={{ font: '500 8.5px Inter, sans-serif' }}
          >
            Rx Only · 30 Tablets
          </text>
        </g>
      )}

      {/* glass thickness at the base */}
      <rect x="30" y="338" width="180" height="22" rx="18" fill="rgb(255 255 255 / 0.25)" clipPath={url('body')} />

      {/* glass highlights */}
      <rect x="40" y="114" width="9" height="236" rx="4.5" fill="#fff" opacity="0.55" />
      <rect x="194" y="122" width="5" height="220" rx="2.5" fill="#fff" opacity="0.35" />
      <rect x="62" y="90" width="5" height="18" rx="2.5" fill="#fff" opacity="0.6" />

      {/* cap */}
      <rect x="44" y="80" width="152" height="14" rx="4" fill={url('cap')} />
      <rect x="48" y="12" width="144" height="76" rx="12" fill={url('cap')} />
      <rect x="48" y="12" width="144" height="76" rx="12" fill={url('ribs')} />
      <rect x="48" y="12" width="144" height="9" rx="6" fill="#2a4c96" opacity="0.55" />
      <rect x="66" y="18" width="9" height="66" rx="4.5" fill="#fff" opacity="0.13" />
    </svg>
  )
}
